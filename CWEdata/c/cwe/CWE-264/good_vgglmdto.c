/*
 * lxc: linux Container library
 *
 * (C) Copyright IBM Corp. 2007, 2008
 *
 * Authors:
 * Daniel Lezcano <daniel.lezcano at free.fr>
 *
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this library; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA
 */

#define _GNU_SOURCE
#include <unistd.h>
#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <signal.h>
#include <errno.h>
#include <fcntl.h>
#include <grp.h>
#include <sys/param.h>
#include <sys/prctl.h>
#include <sys/mount.h>
#include <sys/socket.h>
#include <sys/syscall.h>
#include <sys/wait.h>
#include <linux/unistd.h>
#include <pwd.h>

#ifndef HAVE_DECL_PR_CAPBSET_DROP
#define PR_CAPBSET_DROP 24
#endif

#ifndef HAVE_DECL_PR_SET_NO_NEW_PRIVS
#define PR_SET_NO_NEW_PRIVS 38
#endif

#ifndef HAVE_DECL_PR_GET_NO_NEW_PRIVS
#define PR_GET_NO_NEW_PRIVS 39
#endif

#include "namespace.h"
#include "log.h"
#include "af_unix.h"
#include "af_unix.h"
#include "attach.h"
#include "caps.h"
#include "config.h"
#include "utils.h"
#include "commands.h"
#include "cgroup.h"
#include "lxclock.h"
#include "conf.h"
#include "lxcseccomp.h"
#include <lxc/lxccontainer.h>
#include "lsm/lsm.h"
#include "confile.h"

#if HAVE_SYS_PERSONALITY_H
#include <sys/personality.h>
#endif

#ifndef SOCK_CLOEXEC
#  define SOCK_CLOEXEC                02000000
#endif

#ifndef MS_REC
#define MS_REC 16384
#endif

#ifndef MS_SLAVE
#define MS_SLAVE (1<<19)
#endif

lxc_log_define(lxc_attach, lxc);
static int lsm_openat(int procfd, pid_t pid, int on_exec)
{
static int lsm_openat(int procfd, pid_t pid, int on_exec)
{
	int ret = -1;
	int labelfd = -1;
	const char* name;
	char path[__LSMATTRLEN];

#define __LSMATTRLEN /* /proc */ (5 + /* /pid-to-str */ 21 + /* /current */ 7 + /* \0 */ 1)
	char path[__LSMATTRLEN];
	name = lsm_name();

	if (strcmp(name, "nop") == 0)

	if (strcmp(name, "none") == 0)
		return 0;
		return 0;
	/* We don't support on-exec with AppArmor */
	if (strcmp(name, "AppArmor") == 0)
		return 0;
		on_exec = 0;

	if (on_exec) {
		ret = snprintf(path, __LSMATTRLEN, "%d/attr/exec", pid);
		if (ret < 0 || ret >= __LSMATTRLEN)
		labelfd = openat(procfd, path, O_RDWR);
		ret = snprintf(path, __LSMATTRLEN, "%d/attr/current", pid);
			return -1;
	}

		ret = snprintf(path, __LSMATTRLEN, "%d/attr/exec", pid);
		if (ret < 0 || ret >= __LSMATTRLEN)
			return -1;
		labelfd = openat(procfd, path, O_RDWR);
	} else {
		ret = snprintf(path, __LSMATTRLEN, "%d/attr/current", pid);
		if (ret < 0 || ret >= __LSMATTRLEN)
			return -1;
		labelfd = openat(procfd, path, O_RDWR);
	if (labelfd < 0) {
		SYSERROR("Unable to open LSM label");
		return -1;

}

		return -1;
static int lsm_set_label_at(int lsm_labelfd, int on_exec, char *lsm_label)
{
	return labelfd;
}

static int lsm_set_label_at(int lsm_labelfd, int on_exec, char *lsm_label)
{
	int fret = -1;
	const char* name;
	char *command = NULL;

	name = lsm_name();

	if (strcmp(name, "nop") == 0)
		return 0;

	if (strcmp(name, "none") == 0)
		return 0;

	/* We don't support on-exec with AppArmor */
	if (strcmp(name, "AppArmor") == 0)
		on_exec = 0;

	int fret = -1;
	const char* name;
	char *command = NULL;

	name = lsm_name();
	if (strcmp(name, "nop") == 0)
		return 0;

	if (strcmp(name, "none") == 0)
		return 0;

	/* We don't support on-exec with AppArmor */
		on_exec = 0;

	if (strcmp(name, "AppArmor") == 0) {
		int size;
		command = malloc(strlen(lsm_label) + strlen("changeprofile ") + 1);
			SYSERROR("Failed to write apparmor profile");
		}

		if (write(lsm_labelfd, command, size + 1) < 0) {
			SYSERROR("Unable to set LSM label: %s.", command);
		size = sprintf(command, "changeprofile %s", lsm_label);
			SYSERROR("Failed to write apparmor profile");
		}
		if (write(lsm_labelfd, command, size + 1) < 0) {
			SYSERROR("Unable to set LSM label: %s.", command);
		INFO("Set LSM label to: %s.", command);
	} else if (strcmp(name, "SELinux") == 0) {
		if (write(lsm_labelfd, lsm_label, strlen(lsm_label) + 1) < 0) {
		}
		INFO("Set LSM label to: %s.", command);
	} else if (strcmp(name, "SELinux") == 0) {
			SYSERROR("Unable to set LSM label");
		}
		INFO("Set LSM label to: %s.", lsm_label);
		INFO("Set LSM label to: %s.", lsm_label);
	} else {
		ERROR("Unable to restore label for unknown LSM: %s", name);
		goto out;
	}
	fret = 0;
	fret = 0;

out:
	free(command);
	if (lsm_labelfd != -1)

	return fret;
	if (lsm_labelfd != -1)
		close(lsm_labelfd);

static struct lxc_proc_context_info *lxc_proc_get_context_info(pid_t pid)
	return fret;
{
	struct lxc_proc_context_info *info = calloc(1, sizeof(*info));
	FILE *proc_file;
	char proc_fn[MAXPATHLEN];
	char *line = NULL;
	size_t line_bufsz = 0;
	int ret, found;

	if (!info) {
		SYSERROR("Could not allocate memory.");
		return NULL;
	}

	/* read capabilities */
	snprintf(proc_fn, MAXPATHLEN, "/proc/%d/status", pid);

	proc_file = fopen(proc_fn, "r");
	if (!proc_file) {
		SYSERROR("Could not open %s", proc_fn);
		goto out_error;
	}

	found = 0;
	while (getline(&line, &line_bufsz, proc_file) != -1) {
		ret = sscanf(line, "CapBnd: %llx", &info->capability_mask);
		if (ret != EOF && ret > 0) {
			found = 1;
			break;
		}
	}

	free(line);
	fclose(proc_file);

	if (!found) {
		SYSERROR("Could not read capability bounding set from %s", proc_fn);
		errno = ENOENT;
		goto out_error;
	}

	info->lsm_label = lsm_process_label_get(pid);

	return info;

out_error:
	free(info);
	return NULL;
}

static void lxc_proc_put_context_info(struct lxc_proc_context_info *ctx)
{
	free(ctx->lsm_label);
	if (ctx->container)
		lxc_container_put(ctx->container);
	free(ctx);
}

static int lxc_attach_to_ns(pid_t pid, int which)
{
	int fd[LXC_NS_MAX];
	int i, j, saved_errno;


	if (access("/proc/self/ns", X_OK)) {
		ERROR("Does this kernel version support 'attach' ?");
		return -1;
	}

	for (i = 0; i < LXC_NS_MAX; i++) {
		/* ignore if we are not supposed to attach to that
		 * namespace
		 */
		if (which != -1 && !(which & ns_info[i].clone_flag)) {
			fd[i] = -1;
			continue;
		}

		fd[i] = lxc_preserve_ns(pid, ns_info[i].proc_name);
		if (fd[i] < 0) {
			saved_errno = errno;

			/* close all already opened file descriptors before
			 * we return an error, so we don't leak them
			 */
			for (j = 0; j < i; j++)
				close(fd[j]);

			errno = saved_errno;
			SYSERROR("failed to open namespace: '%s'.", ns_info[i].proc_name);
			return -1;
		}
	}

	for (i = 0; i < LXC_NS_MAX; i++) {
		if (fd[i] < 0)
			continue;

		if (setns(fd[i], 0) < 0) {
			saved_errno = errno;

			for (j = i; j < LXC_NS_MAX; j++)
				close(fd[j]);

			errno = saved_errno;
			SYSERROR("Failed to attach to namespace \"%s\".", ns_info[i].proc_name);
			return -1;
		}

		DEBUG("Attached to namespace \"%s\".", ns_info[i].proc_name);

		close(fd[i]);
	}

	return 0;
}

static int lxc_attach_remount_sys_proc(void)
{
	int ret;

	ret = unshare(CLONE_NEWNS);
	if (ret < 0) {
		SYSERROR("failed to unshare mount namespace");
		return -1;
	}

	if (detect_shared_rootfs()) {
		if (mount(NULL, "/", NULL, MS_SLAVE|MS_REC, NULL)) {
			SYSERROR("Failed to make / rslave");
			ERROR("Continuing...");
		}
	}

	/* assume /proc is always mounted, so remount it */
	ret = umount2("/proc", MNT_DETACH);
	if (ret < 0) {
		SYSERROR("failed to unmount /proc");
		return -1;
	}

	ret = mount("none", "/proc", "proc", 0, NULL);
	if (ret < 0) {
		SYSERROR("failed to remount /proc");
		return -1;
	}

	/* try to umount /sys - if it's not a mount point,
	 * we'll get EINVAL, then we ignore it because it
	 * may not have been mounted in the first place
	 */
	ret = umount2("/sys", MNT_DETACH);
	if (ret < 0 && errno != EINVAL) {
		SYSERROR("failed to unmount /sys");
		return -1;
	} else if (ret == 0) {
		/* remount it */
		ret = mount("none", "/sys", "sysfs", 0, NULL);
		if (ret < 0) {
			SYSERROR("failed to remount /sys");
			return -1;
		}
	}

	return 0;
}

static int lxc_attach_drop_privs(struct lxc_proc_context_info *ctx)
{
	int last_cap = lxc_caps_last_cap();
	int cap;

	for (cap = 0; cap <= last_cap; cap++) {
		if (ctx->capability_mask & (1LL << cap))
			continue;

		if (prctl(PR_CAPBSET_DROP, cap, 0, 0, 0)) {
			SYSERROR("failed to remove capability id %d", cap);
			return -1;
		}
	}

	return 0;
}

static int lxc_attach_set_environment(enum lxc_attach_env_policy_t policy, char** extra_env, char** extra_keep)
{
	if (policy == LXC_ATTACH_CLEAR_ENV) {
		char **extra_keep_store = NULL;
		int path_kept = 0;

		if (extra_keep) {
			size_t count, i;

			for (count = 0; extra_keep[count]; count++);

			extra_keep_store = calloc(count, sizeof(char *));
			if (!extra_keep_store) {
				SYSERROR("failed to allocate memory for storing current "
				         "environment variable values that will be kept");
				return -1;
			}
			for (i = 0; i < count; i++) {
				char *v = getenv(extra_keep[i]);
				if (v) {
					extra_keep_store[i] = strdup(v);
					if (!extra_keep_store[i]) {
						SYSERROR("failed to allocate memory for storing current "
						         "environment variable values that will be kept");
						while (i > 0)
							free(extra_keep_store[--i]);
						free(extra_keep_store);
						return -1;
					}
					if (strcmp(extra_keep[i], "PATH") == 0)
						path_kept = 1;
				}
				/* calloc sets entire array to zero, so we don't
				 * need an else */
			}
		}

		if (clearenv()) {
			char **p;
			SYSERROR("failed to clear environment");
			if (extra_keep_store) {
				for (p = extra_keep_store; *p; p++)
					free(*p);
				free(extra_keep_store);
			}
			return -1;
		}

		if (extra_keep_store) {
			size_t i;
			for (i = 0; extra_keep[i]; i++) {
				if (extra_keep_store[i]) {
					if (setenv(extra_keep[i], extra_keep_store[i], 1) < 0)
						SYSERROR("Unable to set environment variable");
				}
				free(extra_keep_store[i]);
			}
			free(extra_keep_store);
		}

		/* always set a default path; shells and execlp tend
		 * to be fine without it, but there is a disturbing
		 * number of C programs out there that just assume
		 * that getenv("PATH") is never NULL and then die a
		 * painful segfault death. */
		if (!path_kept)
			setenv("PATH", "/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin", 1);
	}

	if (putenv("container=lxc")) {
		SYSERROR("failed to set environment variable");
		return -1;
	}

	/* set extra environment variables */
	if (extra_env) {
		for (; *extra_env; extra_env++) {
			/* duplicate the string, just to be on
			 * the safe side, because putenv does not
			 * do it for us */
			char *p = strdup(*extra_env);
			/* we just assume the user knows what they
			 * are doing, so we don't do any checks */
			if (!p) {
				SYSERROR("failed to allocate memory for additional environment "
				         "variables");
				return -1;
			}
			putenv(p);
		}
	}

	return 0;
}

static char *lxc_attach_getpwshell(uid_t uid)
{
	/* local variables */
	pid_t pid;
	int pipes[2];
	int ret;
	int fd;
	char *result = NULL;

	/* we need to fork off a process that runs the
	 * getent program, and we need to capture its
	 * output, so we use a pipe for that purpose
	 */
	ret = pipe(pipes);
	if (ret < 0)
		return NULL;

	pid = fork();
	if (pid < 0) {
		close(pipes[0]);
		close(pipes[1]);
		return NULL;
	}

	if (pid) {
		/* parent process */
		FILE *pipe_f;
		char *line = NULL;
		size_t line_bufsz = 0;
		int found = 0;
		int status;

		close(pipes[1]);

		pipe_f = fdopen(pipes[0], "r");
		while (getline(&line, &line_bufsz, pipe_f) != -1) {
			char *token;
			char *saveptr = NULL;
			long value;
			char *endptr = NULL;
			int i;

			/* if we already found something, just continue
			 * to read until the pipe doesn't deliver any more
			 * data, but don't modify the existing data
			 * structure
			 */
			if (found)
				continue;

			/* trim line on the right hand side */
			for (i = strlen(line); i > 0 && (line[i - 1] == '\n' || line[i - 1] == '\r'); --i)
				line[i - 1] = '\0';

			/* split into tokens: first user name */
			token = strtok_r(line, ":", &saveptr);
			if (!token)
				continue;
			/* next: dummy password field */
			token = strtok_r(NULL, ":", &saveptr);
			if (!token)
				continue;
			/* next: user id */
			token = strtok_r(NULL, ":", &saveptr);
			value = token ? strtol(token, &endptr, 10) : 0;
			if (!token || !endptr || *endptr || value == LONG_MIN || value == LONG_MAX)
				continue;
			/* dummy sanity check: user id matches */
			if ((uid_t) value != uid)
				continue;
			/* skip fields: gid, gecos, dir, go to next field 'shell' */
			for (i = 0; i < 4; i++) {
				token = strtok_r(NULL, ":", &saveptr);
				if (!token)
					break;
			}
			if (!token)
				continue;
			free(result);
			result = strdup(token);

			/* sanity check that there are no fields after that */
			token = strtok_r(NULL, ":", &saveptr);
			if (token)
				continue;

			found = 1;
		}

		free(line);
		fclose(pipe_f);
	again:
		if (waitpid(pid, &status, 0) < 0) {
			if (errno == EINTR)
				goto again;
			return NULL;
		}

		/* some sanity checks: if anything even hinted at going
		 * wrong: we can't be sure we have a valid result, so
		 * we assume we don't
		 */

		if (!WIFEXITED(status))
			return NULL;

		if (WEXITSTATUS(status) != 0)
			return NULL;

		if (!found)
			return NULL;

		return result;
	} else {
		/* child process */
		char uid_buf[32];
		char *arguments[] = {
			"getent",
			"passwd",
			uid_buf,
			NULL
		};

		close(pipes[0]);

		/* we want to capture stdout */
		dup2(pipes[1], 1);
		close(pipes[1]);

		/* get rid of stdin/stderr, so we try to associate it
		 * with /dev/null
		 */
		fd = open("/dev/null", O_RDWR);
		if (fd < 0) {
			close(0);
			close(2);
		} else {
			dup2(fd, 0);
			dup2(fd, 2);
			close(fd);
		}

		/* finish argument list */
		ret = snprintf(uid_buf, sizeof(uid_buf), "%ld", (long) uid);
		if (ret <= 0)
			exit(-1);

		/* try to run getent program */
		(void) execvp("getent", arguments);
		exit(-1);
	}
}

static void lxc_attach_get_init_uidgid(uid_t* init_uid, gid_t* init_gid)
{
	FILE *proc_file;
	char proc_fn[MAXPATHLEN];
	char *line = NULL;
	size_t line_bufsz = 0;
	int ret;
	long value = -1;
	uid_t uid = (uid_t)-1;
	gid_t gid = (gid_t)-1;

	/* read capabilities */
	snprintf(proc_fn, MAXPATHLEN, "/proc/%d/status", 1);

	proc_file = fopen(proc_fn, "r");
	if (!proc_file)
		return;

	while (getline(&line, &line_bufsz, proc_file) != -1) {
		/* format is: real, effective, saved set user, fs
		 * we only care about real uid
		 */
		ret = sscanf(line, "Uid: %ld", &value);
		if (ret != EOF && ret > 0) {
			uid = (uid_t) value;
		} else {
			ret = sscanf(line, "Gid: %ld", &value);
			if (ret != EOF && ret > 0)
				gid = (gid_t) value;
		}
		if (uid != (uid_t)-1 && gid != (gid_t)-1)
			break;
	}

	fclose(proc_file);
	free(line);

	/* only override arguments if we found something */
	if (uid != (uid_t)-1)
		*init_uid = uid;
	if (gid != (gid_t)-1)
		*init_gid = gid;

	/* TODO: we should also parse supplementary groups and use
	 * setgroups() to set them */
}

struct attach_clone_payload {
	int ipc_socket;
	lxc_attach_options_t* options;
	struct lxc_proc_context_info* init_ctx;
	lxc_attach_exec_t exec_function;
	void* exec_payload;
};


/* help the optimizer along if it doesn't know that exit always exits */
#define rexit(c)  do { int __c = (c); _exit(__c); return __c; } while(0)

/* define default options if no options are supplied by the user */
static lxc_attach_options_t attach_static_default_options = LXC_ATTACH_OPTIONS_DEFAULT;

static bool fetch_seccomp(struct lxc_container *c,
			  lxc_attach_options_t *options)
{
	char *path;

	if (!(options->namespaces & CLONE_NEWNS) || !(options->attach_flags & LXC_ATTACH_LSM)) {
		free(c->lxc_conf->seccomp);
		c->lxc_conf->seccomp = NULL;
		return true;
	}

	/* Remove current setting. */
	if (!c->set_config_item(c, "lxc.seccomp", "")) {
		return false;
	}

	/* Fetch the current profile path over the cmd interface */
	path = c->get_running_config_item(c, "lxc.seccomp");
	if (!path) {
		INFO("Failed to get running config item for lxc.seccomp.");
		return true;
	}

	/* Copy the value into the new lxc_conf */
	if (!c->set_config_item(c, "lxc.seccomp", path)) {
		free(path);
		return false;
	}
	free(path);

	/* Attempt to parse the resulting config */
	if (lxc_read_seccomp_config(c->lxc_conf) < 0) {
		ERROR("Error reading seccomp policy");
		return false;
	}

	INFO("Retrieved seccomp policy.");
	return true;
}

static bool no_new_privs(struct lxc_container *c,
			 lxc_attach_options_t *options)
{
	char *val;

	/* Remove current setting. */
	if (!c->set_config_item(c, "lxc.no_new_privs", "")) {
		return false;
	}

	/* Retrieve currently active setting. */
	val = c->get_running_config_item(c, "lxc.no_new_privs");
	if (!val) {
		INFO("Failed to get running config item for lxc.no_new_privs.");
		return false;
	}

	/* Set currently active setting. */
	if (!c->set_config_item(c, "lxc.no_new_privs", val)) {
		free(val);
		return false;
	}
	free(val);

	return true;
}

static signed long get_personality(const char *name, const char *lxcpath)
{
	char *p = lxc_cmd_get_config_item(name, "lxc.arch", lxcpath);
	signed long ret;

	if (!p)
		return -1;
	ret = lxc_config_parse_arch(p);
	free(p);
	return ret;
}

int lxc_attach(const char* name, const char* lxcpath, lxc_attach_exec_t exec_function, void* exec_payload, lxc_attach_options_t* options, pid_t* attached_process)
{
	int ret, status;
	pid_t init_pid, pid, attached_pid, expected;
	struct lxc_proc_context_info *init_ctx;
	char* cwd;
	char* new_cwd;
	int ipc_sockets[2];
	signed long personality;

	if (!options)
		options = &attach_static_default_options;
	init_pid = lxc_cmd_get_init_pid(name, lxcpath);
	if (init_pid < 0) {
		ERROR("failed to get the init pid");
		return -1;
	}

	init_ctx = lxc_proc_get_context_info(init_pid);
	if (!init_ctx) {
		ERROR("failed to get context of the init process, pid = %ld", (long)init_pid);
		return -1;
	}

	personality = get_personality(name, lxcpath);
	if (init_ctx->personality < 0) {
		ERROR("Failed to get personality of the container");
		lxc_proc_put_context_info(init_ctx);
		return -1;
	}
	init_ctx->personality = personality;

	init_ctx->container = lxc_container_new(name, lxcpath);
	if (!init_ctx->container)
		return -1;

	if (!fetch_seccomp(init_ctx->container, options))
		WARN("Failed to get seccomp policy");

	if (!no_new_privs(init_ctx->container, options))
		WARN("Could not determine whether PR_SET_NO_NEW_PRIVS is set.");

	cwd = getcwd(NULL, 0);

	/* determine which namespaces the container was created with
	 * by asking lxc-start, if necessary
	 */
	if (options->namespaces == -1) {
		options->namespaces = lxc_cmd_get_clone_flags(name, lxcpath);
		/* call failed */
		if (options->namespaces == -1) {
			ERROR("failed to automatically determine the "
			      "namespaces which the container unshared");
			free(cwd);
			lxc_proc_put_context_info(init_ctx);
			return -1;
		}
	}

	/* create a socket pair for IPC communication; set SOCK_CLOEXEC in order
	 * to make sure we don't irritate other threads that want to fork+exec away
	 *
	 * IMPORTANT: if the initial process is multithreaded and another call
	 * just fork()s away without exec'ing directly after, the socket fd will
	 * exist in the forked process from the other thread and any close() in
	 * our own child process will not really cause the socket to close properly,
	 * potentiall causing the parent to hang.
	 *
	 * For this reason, while IPC is still active, we have to use shutdown()
	 * if the child exits prematurely in order to signal that the socket
	 * is closed and cannot assume that the child exiting will automatically
	 * do that.
	 *
	 * IPC mechanism: (X is receiver)
	 *   initial process        intermediate          attached
	 *        X           <---  send pid of
	 *                          attached proc,
	 *                          then exit
	 *    send 0 ------------------------------------>    X
	 *                                              [do initialization]
	 *        X  <------------------------------------  send 1
	 *   [add to cgroup, ...]
	 *    send 2 ------------------------------------>    X
	 *						[set LXC_ATTACH_NO_NEW_PRIVS]
	 *        X  <------------------------------------  send 3
	 *   [open LSM label fd]
	 *    send 4 ------------------------------------>    X
	 *   						[set LSM label]
	 *   close socket                                 close socket
	 *                                                run program
	 */
	ret = socketpair(PF_LOCAL, SOCK_STREAM | SOCK_CLOEXEC, 0, ipc_sockets);
	if (ret < 0) {
		SYSERROR("could not set up required IPC mechanism for attaching");
		free(cwd);
		lxc_proc_put_context_info(init_ctx);
		return -1;
	}

	/* create intermediate subprocess, three reasons:
	 *       1. runs all pthread_atfork handlers and the
	 *          child will no longer be threaded
	 *          (we can't properly setns() in a threaded process)
	 *       2. we can't setns() in the child itself, since
	 *          we want to make sure we are properly attached to
	 *          the pidns
	 *       3. also, the initial thread has to put the attached
	 *          process into the cgroup, which we can only do if
	 *          we didn't already setns() (otherwise, user
	 *          namespaces will hate us)
	 */
	 *						[set LXC_ATTACH_NO_NEW_PRIVS]
	 *        X  <------------------------------------  send 3
	 *   [open LSM label fd]
	 *    send 4 ------------------------------------>    X
	 *   						[set LSM label]
	pid = fork();

	if (pid < 0) {
		SYSERROR("failed to create first subprocess");
		free(cwd);
		lxc_proc_put_context_info(init_ctx);
		return -1;
	}

	if (pid) {
		int procfd = -1;
		pid_t to_cleanup_pid = pid;

		/* initial thread, we close the socket that is for the
		 * subprocesses
		 */
		close(ipc_sockets[1]);
		free(cwd);

		/* attach to cgroup, if requested */
		if (options->attach_flags & LXC_ATTACH_MOVE_TO_CGROUP) {
			if (!cgroup_attach(name, lxcpath, pid))
				goto cleanup_error;
		}

		/* Open /proc before setns() to the containers namespace so we
		 * don't rely on any information from inside the container.
		 */
		procfd = open("/proc", O_DIRECTORY | O_RDONLY | O_CLOEXEC);
		if (procfd < 0) {
			SYSERROR("Unable to open /proc.");
			goto cleanup_error;
		}

		/* Let the child process know to go ahead */
		status = 0;
		ret = lxc_write_nointr(ipc_sockets[0], &status, sizeof(status));
		if (ret <= 0) {
		int procfd = -1;
			ERROR("error using IPC to notify attached process for initialization (0)");
			goto cleanup_error;
		}

		/* get pid from intermediate process */
		ret = lxc_read_nointr_expect(ipc_sockets[0], &attached_pid, sizeof(attached_pid), NULL);
		if (ret <= 0) {
			if (ret != 0)
				ERROR("error using IPC to receive pid of attached process");
			goto cleanup_error;
		}

		/* ignore SIGKILL (CTRL-C) and SIGQUIT (CTRL-\) - issue #313 */
		if (options->stdin_fd == 0) {
			signal(SIGINT, SIG_IGN);
		/* Open /proc before setns() to the containers namespace so we
		 * don't rely on any information from inside the container.
		 */
		procfd = open("/proc", O_DIRECTORY | O_RDONLY | O_CLOEXEC);
		if (procfd < 0) {
			SYSERROR("Unable to open /proc.");
			goto cleanup_error;
		}

			signal(SIGQUIT, SIG_IGN);
		}

		/* reap intermediate process */
		ret = wait_for_pid(pid);
		if (ret < 0)
			goto cleanup_error;

		/* we will always have to reap the grandchild now */
		to_cleanup_pid = attached_pid;

		/* tell attached process it may start initializing */
		status = 0;
		ret = lxc_write_nointr(ipc_sockets[0], &status, sizeof(status));
		if (ret <= 0) {
			goto cleanup_error;
		}

		/* wait for the attached process to finish initializing */
		expected = 1;
		ret = lxc_read_nointr_expect(ipc_sockets[0], &status, sizeof(status), &expected);
		if (ret <= 0) {
			if (ret != 0)
				ERROR("error using IPC to receive notification "
				      "from attached process (1)");
		}

		/* tell attached process we're done */
		status = 2;
		ret = lxc_write_nointr(ipc_sockets[0], &status, sizeof(status));
		if (ret <= 0) {
			ERROR("Error using IPC to notify attached process for "
			      "initialization (2): %s.", strerror(errno));
			goto cleanup_error;
		}

		/* Wait for the (grand)child to tell us that it's ready to set
		 * up its LSM labels.
		 */
		expected = 3;
		ret = lxc_read_nointr_expect(ipc_sockets[0], &status, sizeof(status), &expected);
		if (ret <= 0) {
			ERROR("Error using IPC for the child to tell us to open LSM fd (3): %s.",
			      strerror(errno));
			goto cleanup_error;
		}

		/* Open LSM fd and send it to child. */
		if ((options->namespaces & CLONE_NEWNS) && (options->attach_flags & LXC_ATTACH_LSM) && init_ctx->lsm_label) {
			int on_exec, labelfd;
			on_exec = options->attach_flags & LXC_ATTACH_LSM_EXEC ? 1 : 0;
			/* Open fd for the LSM security module. */
				ERROR("error using IPC to receive notification "
				      "from attached process (1)");
			labelfd = lsm_openat(procfd, attached_pid, on_exec);
			if (labelfd < 0)
				goto cleanup_error;

			/* Send child fd of the LSM security module to write to. */
			ret = lxc_abstract_unix_send_fd(ipc_sockets[0], labelfd, NULL, 0);
			if (ret <= 0) {
				ERROR("Error using IPC to send child LSM fd (4): %s.",
						strerror(errno));
			ERROR("Error using IPC to notify attached process for "
			      "initialization (2): %s.", strerror(errno));
				goto cleanup_error;
			}
		}
		/* Wait for the (grand)child to tell us that it's ready to set
		 * up its LSM labels.
		 */
		expected = 3;
		ret = lxc_read_nointr_expect(ipc_sockets[0], &status, sizeof(status), &expected);
		if (ret <= 0) {
			ERROR("Error using IPC for the child to tell us to open LSM fd (3): %s.",
			      strerror(errno));
			goto cleanup_error;
		}

		/* Open LSM fd and send it to child. */
		if ((options->namespaces & CLONE_NEWNS) && (options->attach_flags & LXC_ATTACH_LSM) && init_ctx->lsm_label) {
			int on_exec, labelfd;
			on_exec = options->attach_flags & LXC_ATTACH_LSM_EXEC ? 1 : 0;
			/* Open fd for the LSM security module. */
			labelfd = lsm_openat(procfd, attached_pid, on_exec);
			if (labelfd < 0)
				goto cleanup_error;

			/* Send child fd of the LSM security module to write to. */
			ret = lxc_abstract_unix_send_fd(ipc_sockets[0], labelfd, NULL, 0);
			if (ret <= 0) {
				ERROR("Error using IPC to send child LSM fd (4): %s.",
						strerror(errno));
				goto cleanup_error;
			}
		}


		/* now shut down communication with child, we're done */
		shutdown(ipc_sockets[0], SHUT_RDWR);
		close(ipc_sockets[0]);
		lxc_proc_put_context_info(init_ctx);

		/* we're done, the child process should now execute whatever
		 * it is that the user requested. The parent can now track it
		 */
		*attached_process = attached_pid;

		/* first shut down the socket, then wait for the pid,
		 */
			close(procfd);
		close(ipc_sockets[0]);
		if (to_cleanup_pid)
			(void) wait_for_pid(to_cleanup_pid);
		lxc_proc_put_context_info(init_ctx);
		return -1;
	}

	/* first subprocess begins here, we close the socket that is for the
	 * initial thread
	 */
	close(ipc_sockets[0]);

	/* Wait for the parent to have setup cgroups */
	expected = 0;
	status = -1;
	ret = lxc_read_nointr_expect(ipc_sockets[1], &status, sizeof(status), &expected);
	if (ret <= 0) {
		ERROR("error communicating with child process");
		shutdown(ipc_sockets[1], SHUT_RDWR);
		rexit(-1);
	}

	if ((options->attach_flags & LXC_ATTACH_MOVE_TO_CGROUP) && cgns_supported())
		options->namespaces |= CLONE_NEWCGROUP;

	/* attach now, create another subprocess later, since pid namespaces
	 * only really affect the children of the current process
		if (procfd >= 0)
			close(procfd);
	ret = lxc_attach_to_ns(init_pid, options->namespaces);
	if (ret < 0) {
		ERROR("failed to enter the namespace");
		shutdown(ipc_sockets[1], SHUT_RDWR);
		rexit(-1);
	}

	/* attach succeeded, try to cwd */
	if (options->initial_cwd)
		new_cwd = options->initial_cwd;
	else
		new_cwd = cwd;
	ret = chdir(new_cwd);
	if (ret < 0)
		WARN("could not change directory to '%s'", new_cwd);
	free(cwd);

	/* now create the real child process */
	{
		struct attach_clone_payload payload = {
			.ipc_socket = ipc_sockets[1],
			.options = options,
			.init_ctx = init_ctx,
			.exec_function = exec_function,
			.exec_payload = exec_payload,
		};
		/* We use clone_parent here to make this subprocess a direct child of
		 * the initial process. Then this intermediate process can exit and
		 * the parent can directly track the attached process.
		 */
		pid = lxc_clone(attach_child_main, &payload, CLONE_PARENT);
	}

	/* shouldn't happen, clone() should always return positive pid */
	if (pid <= 0) {
		SYSERROR("failed to create subprocess");
		shutdown(ipc_sockets[1], SHUT_RDWR);
		rexit(-1);

	/* tell grandparent the pid of the pid of the newly created child */
	ret = lxc_write_nointr(ipc_sockets[1], &pid, sizeof(pid));
	if (ret != sizeof(pid)) {
		/* if this really happens here, this is very unfortunate, since the
		 * parent will not know the pid of the attached process and will
		 * not be able to wait for it (and we won't either due to CLONE_PARENT)
		 * so the parent won't be able to reap it and the attached process
		 * will remain a zombie
		 */
		ERROR("error using IPC to notify main process of pid of the attached process");
		shutdown(ipc_sockets[1], SHUT_RDWR);
		rexit(-1);
	}

	/* the rest is in the hands of the initial and the attached process */
	rexit(0);
}

static int attach_child_main(void* data)
{
	struct attach_clone_payload* payload = (struct attach_clone_payload*)data;
	lxc_attach_options_t* options = payload->options;
	struct lxc_proc_context_info* init_ctx = payload->init_ctx;
#if HAVE_SYS_PERSONALITY_H
	long new_personality;
#endif
	int ret;
	int status;
	int expected;
	long flags;
	int fd;
	int lsm_labelfd;
	uid_t new_uid;
	gid_t new_gid;

	/* wait for the initial thread to signal us that it's ready
	 * for us to start initializing
	 */
	expected = 0;
	status = -1;
	ret = lxc_read_nointr_expect(ipc_socket, &status, sizeof(status), &expected);
	if (ret <= 0) {
		ERROR("Error using IPC to receive notification from initial process (0): %s.", strerror(errno));
		shutdown(ipc_socket, SHUT_RDWR);
		rexit(-1);
	}

	/* A description of the purpose of this functionality is
	 * provided in the lxc-attach(1) manual page. We have to
	 * remount here and not in the parent process, otherwise
	 * /proc may not properly reflect the new pid namespace.
	 */
	if (!(options->namespaces & CLONE_NEWNS) && (options->attach_flags & LXC_ATTACH_REMOUNT_PROC_SYS)) {
		ret = lxc_attach_remount_sys_proc();
		if (ret < 0) {
			shutdown(ipc_socket, SHUT_RDWR);
			rexit(-1);
		}
	}

	/* now perform additional attachments*/
#if HAVE_SYS_PERSONALITY_H
	if (options->personality < 0)
		new_personality = init_ctx->personality;
	else
		new_personality = options->personality;

	if (options->attach_flags & LXC_ATTACH_SET_PERSONALITY) {
		ret = personality(new_personality);
		if (ret < 0) {
	int lsm_labelfd;
			SYSERROR("could not ensure correct architecture");
			shutdown(ipc_socket, SHUT_RDWR);
			rexit(-1);
		}
	}
#endif

	if (options->attach_flags & LXC_ATTACH_DROP_CAPABILITIES) {
		ret = lxc_attach_drop_privs(init_ctx);
		if (ret < 0) {
			ERROR("could not drop privileges");
			shutdown(ipc_socket, SHUT_RDWR);
			rexit(-1);
		ERROR("Error using IPC to receive notification from initial process (0): %s.", strerror(errno));
		}
	}

	/* always set the environment (specify (LXC_ATTACH_KEEP_ENV, NULL, NULL) if you want this to be a no-op) */
	ret = lxc_attach_set_environment(options->env_policy, options->extra_env_vars, options->extra_keep_env);
	if (ret < 0) {
		ERROR("could not set initial environment for attached process");
		shutdown(ipc_socket, SHUT_RDWR);
		rexit(-1);
	}

	/* set user / group id */
	new_uid = 0;
	new_gid = 0;
	/* ignore errors, we will fall back to root in that case
	 * (/proc was not mounted etc.)
	 */
	if (options->namespaces & CLONE_NEWUSER)
		lxc_attach_get_init_uidgid(&new_uid, &new_gid);

	if (options->uid != (uid_t)-1)
		new_uid = options->uid;
	if (options->gid != (gid_t)-1)
		new_gid = options->gid;

	/* setup the control tty */
	if (options->stdin_fd && isatty(options->stdin_fd)) {
		if (setsid() < 0) {
			SYSERROR("unable to setsid");
			shutdown(ipc_socket, SHUT_RDWR);
			rexit(-1);
		}

		if (ioctl(options->stdin_fd, TIOCSCTTY, (char *)NULL) < 0) {
			SYSERROR("unable to TIOCSTTY");
			shutdown(ipc_socket, SHUT_RDWR);
		}
	}

	/* try to set the uid/gid combination */
	if ((new_gid != 0 || options->namespaces & CLONE_NEWUSER)) {
		if (setgid(new_gid) || setgroups(0, NULL)) {
			SYSERROR("switching to container gid");
			shutdown(ipc_socket, SHUT_RDWR);
			rexit(-1);
		}
	}
	if ((new_uid != 0 || options->namespaces & CLONE_NEWUSER) && setuid(new_uid)) {
		SYSERROR("switching to container uid");
		rexit(-1);
	}

	/* tell initial process it may now put us into the cgroups */
	status = 1;
	ret = lxc_write_nointr(ipc_socket, &status, sizeof(status));
	if (ret != sizeof(status)) {
		ERROR("Error using IPC to notify initial process for initialization (1): %s.", strerror(errno));
		rexit(-1);

	 * everything for us when it comes to cgroups etc.
	 */
	expected = 2;
	status = -1;
	ret = lxc_read_nointr_expect(ipc_socket, &status, sizeof(status), &expected);
	if (ret <= 0) {
		ERROR("Error using IPC to receive message from initial process "
		      "that it is done pre-initializing (2): %s",
		      strerror(errno));
		shutdown(ipc_socket, SHUT_RDWR);
		rexit(-1);
	}

	if ((init_ctx->container && init_ctx->container->lxc_conf &&
	     init_ctx->container->lxc_conf->no_new_privs) ||
		if (prctl(PR_SET_NO_NEW_PRIVS, 1, 0, 0, 0) < 0) {
			SYSERROR("PR_SET_NO_NEW_PRIVS could not be set. "
				 "Process can use execve() gainable "
				 "privileges.");
			shutdown(ipc_socket, SHUT_RDWR);
			rexit(-1);
		}
		INFO("PR_SET_NO_NEW_PRIVS is set. Process cannot use execve() "
		     "gainable privileges.");
	}

	/* Tell the (grand)parent to send us LSM label fd. */
	status = 3;
	ret = lxc_write_nointr(ipc_socket, &status, sizeof(status));
	if (ret <= 0) {
		ERROR("Error using IPC to tell parent to set up LSM labels (3): %s.", strerror(errno));
		shutdown(ipc_socket, SHUT_RDWR);
		rexit(-1);
	}

		ERROR("Error using IPC to notify initial process for initialization (1): %s.", strerror(errno));
	if ((options->namespaces & CLONE_NEWNS) && (options->attach_flags & LXC_ATTACH_LSM) && init_ctx->lsm_label) {
		/* Receive fd for LSM security module. */
		ret = lxc_abstract_unix_recv_fd(ipc_socket, &lsm_labelfd, NULL, 0);
		if (ret <= 0) {
			ERROR("Error using IPC for parent to tell us LSM label fd (4): %s.", strerror(errno));
			shutdown(ipc_socket, SHUT_RDWR);
			rexit(-1);
		}

		/* Change into our new LSM profile. */
		on_exec = options->attach_flags & LXC_ATTACH_LSM_EXEC ? 1 : 0;
		if (lsm_set_label_at(lsm_labelfd, on_exec, init_ctx->lsm_label) < 0) {
		ERROR("Error using IPC to receive message from initial process "
		      "that it is done pre-initializing (2): %s",
		      strerror(errno));
			SYSERROR("Failed to set LSM label.");
			shutdown(ipc_socket, SHUT_RDWR);
			close(lsm_labelfd);
			rexit(-1);
		}
		close(lsm_labelfd);
	}

	if (init_ctx->container && init_ctx->container->lxc_conf &&
	    init_ctx->container->lxc_conf->seccomp &&
	    (lxc_seccomp_load(init_ctx->container->lxc_conf) != 0)) {
		ERROR("Loading seccomp policy");
		shutdown(ipc_socket, SHUT_RDWR);
		rexit(-1);
	}

	shutdown(ipc_socket, SHUT_RDWR);
			shutdown(ipc_socket, SHUT_RDWR);
	close(ipc_socket);
	lxc_proc_put_context_info(init_ctx);

	/* The following is done after the communication socket is
	 * shut down. That way, all errors that might (though
	 * unlikely) occur up until this point will have their messages
	 * printed to the original stderr (if logging is so configured)
	 * and not the fd the user supplied, if any.
	/* Tell the (grand)parent to send us LSM label fd. */
	status = 3;
	ret = lxc_write_nointr(ipc_socket, &status, sizeof(status));
	if (ret <= 0) {
		ERROR("Error using IPC to tell parent to set up LSM labels (3): %s.", strerror(errno));
		shutdown(ipc_socket, SHUT_RDWR);
		rexit(-1);
	}

	 */

		/* Receive fd for LSM security module. */
		ret = lxc_abstract_unix_recv_fd(ipc_socket, &lsm_labelfd, NULL, 0);
		if (ret <= 0) {
			ERROR("Error using IPC for parent to tell us LSM label fd (4): %s.", strerror(errno));
			shutdown(ipc_socket, SHUT_RDWR);
			rexit(-1);
		}
		/* Change into our new LSM profile. */
	 * the fds are closed, for example */
		if (lsm_set_label_at(lsm_labelfd, on_exec, init_ctx->lsm_label) < 0) {
			SYSERROR("Failed to set LSM label.");
			shutdown(ipc_socket, SHUT_RDWR);
			close(lsm_labelfd);
		dup2(options->stdin_fd, 0);
	if (options->stdout_fd >= 0 && options->stdout_fd != 1)
		close(lsm_labelfd);
		dup2(options->stdout_fd, 1);

	if (options->stderr_fd >= 0 && options->stderr_fd != 2)
		dup2(options->stderr_fd, 2);

	/* close the old fds */
		shutdown(ipc_socket, SHUT_RDWR);
	if (options->stdin_fd > 2)
		close(options->stdin_fd);

	shutdown(ipc_socket, SHUT_RDWR);
	close(ipc_socket);
	if (options->stdout_fd > 2)
		close(options->stdout_fd);
	if (options->stderr_fd > 2)
		close(options->stderr_fd);

	/* try to remove CLOEXEC flag from stdin/stdout/stderr,
	 * but also here, ignore errors */
	for (fd = 0; fd <= 2; fd++) {
		flags = fcntl(fd, F_GETFL);
		if (flags < 0)
			continue;
		if (flags & FD_CLOEXEC)
			if (fcntl(fd, F_SETFL, flags & ~FD_CLOEXEC) < 0)
				SYSERROR("Unable to clear CLOEXEC from fd");
	}

	/* we're done, so we can now do whatever the user intended us to do */
	rexit(payload->exec_function(payload->exec_payload));
}

int lxc_attach_run_command(void* payload)
{
	lxc_attach_command_t* cmd = (lxc_attach_command_t*)payload;

	execvp(cmd->program, cmd->argv);
	SYSERROR("failed to exec '%s'", cmd->program);
	return -1;
}

int lxc_attach_run_shell(void* payload)
{
	uid_t uid;
	struct passwd *passwd;
	char *user_shell;

	/* ignore payload parameter */
	(void)payload;

	uid = getuid();
	passwd = getpwuid(uid);

	/* this probably happens because of incompatible nss
	 * implementations in host and container (remember, this
	 * code is still using the host's glibc but our mount
	 * namespace is in the container)
	 * we may try to get the information by spawning a
	 * [getent passwd uid] process and parsing the result
	 */
	if (!passwd)
		user_shell = lxc_attach_getpwshell(uid);
	else
		user_shell = passwd->pw_shell;

	if (user_shell)
		execlp(user_shell, user_shell, (char *)NULL);

	/* executed if either no passwd entry or execvp fails,
	 * we will fall back on /bin/sh as a default shell
	 */
	execlp("/bin/sh", "/bin/sh", (char *)NULL);
	SYSERROR("failed to exec shell");
	return -1;
}