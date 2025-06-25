// Use of this source code is governed by a BSD-style


Input to cgo -godefs.  See README.md

// +godefs map struct_in6_addr [16]byte /* in6_addr */
package unix
/*
#include <dirent.h>
#include <poll.h>
#include <termios.h>
#include <unistd.h>
#include <sys/types.h>
#include <sys/mman.h>
#include <sys/ptrace.h>
#include <sys/select.h>
#include <sys/socket.h>
#include <sys/statvfs.h>
#include <sys/time.h>
#include <sys/un.h>
#include <sys/wait.h>
#include <net/if.h>
#include <net/route.h>
#include <netinet/icmp6.h>

	sizeofPtr = sizeof(void*),

	struct sockaddr s1;	// this one gets used for fields
	struct sockaddr_in6 s3;
	struct sockaddr_dl s5;

	struct sockaddr addr;
};
*/


	SizeofPtr      = C.sizeofPtr
	SizeofInt      = C.sizeof_int
	SizeofLongLong = C.sizeof_longlong


	_C_short     C.short
	_C_long      C.long
)
// Time
type Timespec C.struct_timespec
type Timeval C.struct_timeval
// Processes
type Rusage C.struct_rusage
type Rlimit C.struct_rlimit
type _Gid_t C.gid_t
// Files
type Stat_t C.struct_stat
type Statfs_t C.struct_statfs
type Statvfs_t C.struct_statvfs
type Flock_t C.struct_flock
type Dirent C.struct_dirent
type Fsid C.fsid_t
// File system limits
const (
)
// Fstatvfs/Statvfs flags
const (
	ST_NOWAIT = C.ST_NOWAIT


	FADV_NORMAL     = C.POSIX_FADV_NORMAL
	FADV_SEQUENTIAL = C.POSIX_FADV_SEQUENTIAL
	FADV_DONTNEED   = C.POSIX_FADV_DONTNEED
)
// Sockets
type RawSockaddrInet4 C.struct_sockaddr_in
type RawSockaddrInet6 C.struct_sockaddr_in6
type RawSockaddrUnix C.struct_sockaddr_un
type RawSockaddrDatalink C.struct_sockaddr_dl
type RawSockaddr C.struct_sockaddr
type RawSockaddrAny C.struct_sockaddr_any
type _Socklen C.socklen_t
type Linger C.struct_linger
type Iovec C.struct_iovec
type IPMreq C.struct_ip_mreq
type IPv6Mreq C.struct_ipv6_mreq
type Msghdr C.struct_msghdr
type Cmsghdr C.struct_cmsghdr
type Inet6Pktinfo C.struct_in6_pktinfo
type IPv6MTUInfo C.struct_ip6_mtuinfo
type ICMPv6Filter C.struct_icmp6_filter
const (
	SizeofSockaddrInet6    = C.sizeof_struct_sockaddr_in6
	SizeofSockaddrUnix     = C.sizeof_struct_sockaddr_un
	SizeofLinger           = C.sizeof_struct_linger
	SizeofIPv6Mreq         = C.sizeof_struct_ipv6_mreq
	SizeofCmsghdr          = C.sizeof_struct_cmsghdr
	SizeofIPv6MTUInfo      = C.sizeof_struct_ip6_mtuinfo
)
// Ptrace requests
const (
	PTRACE_CONT    = C.PT_CONTINUE
)
// Events (kqueue, kevent)
type Kevent_t C.struct_kevent
// Select
type FdSet C.fd_set
// Routing and interface messages
const (
	SizeofIfData           = C.sizeof_struct_if_data
	SizeofIfAnnounceMsghdr = C.sizeof_struct_if_announcemsghdr
	SizeofRtMetrics        = C.sizeof_struct_rt_metrics









	SizeofBpfVersion = C.sizeof_struct_bpf_version
	SizeofBpfProgram = C.sizeof_struct_bpf_program
	SizeofBpfHdr     = C.sizeof_struct_bpf_hdr












	AT_FDCWD            = C.AT_FDCWD
	AT_SYMLINK_NOFOLLOW = C.AT_SYMLINK_NOFOLLOW



	POLLERR    = C.POLLERR
	POLLIN     = C.POLLIN
	POLLOUT    = C.POLLOUT
	POLLRDBAND = C.POLLRDBAND
	POLLWRBAND = C.POLLWRBAND
)
// Sysctl
type Sysctlnode C.struct_sysctlnode
// Uname
type Utsname C.struct_utsname
// Clockinfo
const SizeofClockinfo = C.sizeof_struct_clockinfo
type Clockinfo C.struct_clockinfo