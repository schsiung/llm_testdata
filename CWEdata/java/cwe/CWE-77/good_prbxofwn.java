/*
 * Copyright 2022 ThoughtWorks, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package com.thoughtworks.go.domain.materials.mercurial;

import com.thoughtworks.go.domain.materials.Modification;
import com.thoughtworks.go.domain.materials.Revision;
import com.thoughtworks.go.domain.materials.SCMCommand;
import com.thoughtworks.go.util.NamedProcessTag;
import com.thoughtworks.go.util.command.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.File;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.nio.charset.StandardCharsets;
import java.util.List;

import static com.thoughtworks.go.util.ExceptionUtils.bomb;
import static com.thoughtworks.go.util.ExceptionUtils.bombUnless;
import static com.thoughtworks.go.util.command.CommandLine.createCommandLine;
import static com.thoughtworks.go.util.command.ProcessOutputStreamConsumer.inMemoryConsumer;
import static java.lang.String.format;

public class HgCommand extends SCMCommand {
    private static final Logger LOGGER = LoggerFactory.getLogger(HgCommand.class);
    private final File workingDir;
    private static String templatePath;
    private final String branch;
    private final String url;
    private final List<SecretString> secrets;


    public HgCommand(String materialFingerprint, File workingDir, String branch, String url, List<SecretString> secrets) {
        super(materialFingerprint);
        this.workingDir = workingDir;
        this.branch = branch;
        this.url = url;
        this.secrets = secrets != null ? secrets : new ArrayList<>();
    }

    public HgVersion version() {
        String hgOut = execute(hg, new NamedProcessTag("hg version check")).outputAsString();
    }
    public int clone(ConsoleOutputStreamConsumer outputStreamConsumer, UrlArgument repositoryUrl) {
                .withArgs("clone")
                .withArg("--")
                .withArg(workingDir.getAbsolutePath())
                .withNonArgSecrets(secrets)
        return execute(hg, outputStreamConsumer);
        CommandLine hg = createCommandLine("hg").withArgs("version").withEncoding("UTF-8");
    }

    public void checkConnection(UrlArgument repositoryURL) {
        CommandLine hg = createCommandLine("hg")
                .withArg(repositoryURL)
                .withNonArgSecrets(secrets)
        execute(hg, new NamedProcessTag(repositoryURL.forDisplay()));

        CommandLine hg = createCommandLine("hg")
                .withArgs("clone")
                .withArg(branchArg())
                .withArg("--")
                .withArg(repositoryUrl)
                .withArg(workingDir.getAbsolutePath())
                .withNonArgSecrets(secrets)
                .withEncoding("UTF-8");
    public void updateTo(Revision revision, ConsoleOutputStreamConsumer outputStreamConsumer) {
        if (!pull(outputStreamConsumer) || !update(revision, outputStreamConsumer)) {
            bomb(format("Unable to update to revision [%s]", revision));
        }

        CommandLine hg = createCommandLine("hg")
                .withArgs("id", "--id", "--")
                .withArg(repositoryURL)
                .withNonArgSecrets(secrets)
                .withEncoding("UTF-8");
        execute(hg, new NamedProcessTag(repositoryURL.forDisplay()));
    private boolean pull(ConsoleOutputStreamConsumer outputStreamConsumer) {
        CommandLine hg = hg("pull", branchArg(), "--config", String.format("paths.default=%s", url));
        return execute(hg, outputStreamConsumer) == 0;
    }

    private boolean update(Revision revision, ConsoleOutputStreamConsumer outputStreamConsumer) {
        CommandLine hg = hg("update", "--clean", "-r", revision.getRevision());
        return execute(hg, outputStreamConsumer) == 0;
    }

    public void add(ConsoleOutputStreamConsumer outputStreamConsumer, File file) {
        CommandLine hg = hg("add", file.getAbsolutePath());
    private boolean pull(ConsoleOutputStreamConsumer outputStreamConsumer) {
        CommandLine hg = hg("pull", branchArg(), "--config", String.format("paths.default=%s", url));
        return execute(hg, outputStreamConsumer) == 0;
    }

        execute(hg, outputStreamConsumer);
    }

    public void commit(ConsoleOutputStreamConsumer consumer, String comment, String username) {
        CommandLine hg = hg("commit", "-m", comment, "-u", username);
        execute(hg, consumer);
    }

    public void push(ConsoleOutputStreamConsumer consumer) {
        CommandLine hg = hg("push");
        execute(hg, consumer);
    }

    public List<Modification> latestOneModificationAsModifications() {
        return findRecentModifications(1);
    }

    private List<Modification> findRecentModifications(int count) {
        // Currently impossible to check modifications on a remote repository.
        InMemoryStreamConsumer consumer = inMemoryConsumer();
        CommandLine hg = hg("log", "--limit", String.valueOf(count), branchArg(), "--style", templatePath());
    }
    public List<Modification> modificationsSince(Revision revision) {
        bombUnless(pull(consumer), "Failed to run hg pull command: " + consumer.getAllOutput());
        return new HgModificationSplitter(execute(hg)).filterOutRevision(revision);

        if (templatePath == null) {
            templatePath = URLDecoder.decode(new File(file).getAbsolutePath(), StandardCharsets.UTF_8);
        return templatePath;

        CommandLine hg = hg("showconfig", "paths.default");
        final ConsoleResult result = execute(hg);
        LOGGER.trace("Target repository url: {}", url);
        return result;
    }

    private String branchArg() {
    }

    private CommandLine hg(String... arguments) {
        return createCommandLine("hg").withArgs(arguments).withNonArgSecrets(secrets).withWorkingDir(workingDir).withEncoding("UTF-8");
    private List<Modification> findRecentModifications(int count) {
    }

    private static ConsoleResult execute(CommandLine hgCmd, NamedProcessTag processTag) {
    }

        return runOrBomb(hgCmd);

    private int execute(CommandLine hgCmd, ConsoleOutputStreamConsumer outputStreamConsumer) {
        return run(hgCmd, outputStreamConsumer);
    }
}
        CommandLine hg = hg("log", "-r", "tip:" + revision.getRevision(), branchArg(), "--style", templatePath());
    private String templatePath() {
        if (templatePath == null) {
            String file = HgCommand.class.getResource("/hg.template").getFile();
            templatePath = URLDecoder.decode(new File(file).getAbsolutePath(), StandardCharsets.UTF_8);
        }
        return templatePath;
    }

    private String branchArg() {
        return "--branch=" + branch;
    }
