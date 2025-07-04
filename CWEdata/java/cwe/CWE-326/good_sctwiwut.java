/*
 * The MIT License
 *
 * Copyright (c) 2004-2010, Sun Microsystems, Inc., Kohsuke Kawaguchi
 * Copyright (c) 2016, CloudBees Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
package hudson.util;

import hudson.model.FreeStyleProject;
import hudson.model.ParameterDefinition;
import hudson.model.ParametersDefinitionProperty;
import hudson.model.PasswordParameterDefinition;
import org.hamcrest.core.Is;
import org.junit.After;
import org.junit.Before;
import org.junit.Rule;
import org.junit.Test;
import org.jvnet.hudson.test.Issue;
import org.jvnet.hudson.test.JenkinsRule;
import org.jvnet.hudson.test.recipes.LocalData;

import java.io.IOException;
import java.util.regex.Pattern;

import static org.hamcrest.core.Is.isA;
import static org.hamcrest.core.IsNot.not;
import static org.hamcrest.core.StringContains.containsString;
import static org.junit.Assert.*;

/**
 * Tests {@link Secret}.
 */
public class SecretCompatTest {

    @Rule
    public JenkinsRule j = new JenkinsRule() {
        @Override
        public void before() throws Throwable {
            Secret.resetKeyForTest();  //As early as possible
            super.before();
        }
    };

    @After
    public void after() {
        Secret.resetKeyForTest();
    }


    @Test
    @Issue("SECURITY-304")
    public void encryptedValueStaysTheSameAfterRoundtrip() throws Exception {
        FreeStyleProject project = j.createFreeStyleProject();
        project.addProperty(new ParametersDefinitionProperty(new PasswordParameterDefinition("p", "s3cr37", "Keep this a secret")));
        project = j.configRoundtrip(project);
        String round1 = project.getConfigFile().asString();
        project = j.configRoundtrip(project);
        String round2 = project.getConfigFile().asString();
        assertEquals(round1, round2);


        //But reconfiguring will make it a new value
        project = j.jenkins.getItemByFullName(project.getFullName(), FreeStyleProject.class);
        project.removeProperty(ParametersDefinitionProperty.class);
        project.addProperty(new ParametersDefinitionProperty(new PasswordParameterDefinition("p", "s3cr37", "Keep this a secret")));
        project = j.configRoundtrip(project);
        String round3 = project.getConfigFile().asString();
        assertNotEquals(round2, round3);
        //Saving again will produce the same
        project = j.configRoundtrip(project);
        String round4 = project.getConfigFile().asString();
        assertEquals(round3, round4);
    }

    @Test
    @Issue("SECURITY-304")
    @LocalData
    public void canReadPreSec304Secrets() throws Exception {
        FreeStyleProject project = j.jenkins.getItemByFullName("OldSecret", FreeStyleProject.class);
        String oldxml = project.getConfigFile().asString();
        //It should be unchanged on disk
        assertThat(oldxml, containsString("<defaultValue>z/Dd3qrHdQ6/C5lR7uEafM/jD3nQDrGprw3XsfZ/0vo=</defaultValue>"));
        ParametersDefinitionProperty property = project.getProperty(ParametersDefinitionProperty.class);
        ParameterDefinition definition = property.getParameterDefinitions().get(0);
        assertTrue(definition instanceof PasswordParameterDefinition);
        Secret secret = ((PasswordParameterDefinition) definition).getDefaultValueAsSecret();
        assertEquals("theSecret", secret.getPlainText());

        //OK it was read correctly from disk, now the first roundtrip should update the encrypted value

        project = j.configRoundtrip(project);
        String newXml = project.getConfigFile().asString();
        assertNotEquals(oldxml, newXml); //This could have changed because Jenkins has moved on, so not really a good check
        assertThat(newXml, not(containsString("<defaultValue>z/Dd3qrHdQ6/C5lR7uEafM/jD3nQDrGprw3XsfZ/0vo=</defaultValue>")));
        Pattern p = Pattern.compile("<defaultValue>\\{[A-Za-z0-9+/]+={0,2}}</defaultValue>");
        assertTrue(p.matcher(newXml).find());

        //But the next roundtrip should result in the same data
        project = j.configRoundtrip(project);
        String round2 = project.getConfigFile().asString();
        assertEquals(newXml, round2);
    }
}
/*
 * The MIT License
 *
 * Copyright (c) 2004-2010, Sun Microsystems, Inc., Kohsuke Kawaguchi
 * Copyright (c) 2016, CloudBees Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
package hudson.util;

import hudson.model.FreeStyleProject;
import hudson.model.ParameterDefinition;
import hudson.model.ParametersDefinitionProperty;
import hudson.model.PasswordParameterDefinition;
import org.hamcrest.core.Is;
import org.junit.After;
import org.junit.Before;
import org.junit.Rule;
import org.junit.Test;
import org.jvnet.hudson.test.Issue;
import org.jvnet.hudson.test.JenkinsRule;
import org.jvnet.hudson.test.recipes.LocalData;

import java.io.IOException;
import java.util.regex.Pattern;

import static org.hamcrest.core.Is.isA;
import static org.hamcrest.core.IsNot.not;
import static org.hamcrest.core.StringContains.containsString;
import static org.junit.Assert.*;

/**
 * Tests {@link Secret}.
 */
public class SecretCompatTest {

    @Rule
    public JenkinsRule j = new JenkinsRule() {
        @Override
        public void before() throws Throwable {
            Secret.resetKeyForTest();  //As early as possible
            super.before();
        }
    };

    @After
    public void after() {
        Secret.resetKeyForTest();
    }


    @Test
    @Issue("SECURITY-304")
    public void encryptedValueStaysTheSameAfterRoundtrip() throws Exception {
        FreeStyleProject project = j.createFreeStyleProject();
        project.addProperty(new ParametersDefinitionProperty(new PasswordParameterDefinition("p", "s3cr37", "Keep this a secret")));
        project = j.configRoundtrip(project);
        String round1 = project.getConfigFile().asString();
        project = j.configRoundtrip(project);
        String round2 = project.getConfigFile().asString();
        assertEquals(round1, round2);


        //But reconfiguring will make it a new value
        project = j.jenkins.getItemByFullName(project.getFullName(), FreeStyleProject.class);
        project.removeProperty(ParametersDefinitionProperty.class);
        project.addProperty(new ParametersDefinitionProperty(new PasswordParameterDefinition("p", "s3cr37", "Keep this a secret")));
        project = j.configRoundtrip(project);
        String round3 = project.getConfigFile().asString();
        assertNotEquals(round2, round3);
        //Saving again will produce the same
        project = j.configRoundtrip(project);
        String round4 = project.getConfigFile().asString();
        assertEquals(round3, round4);
    }

    @Test
    @Issue("SECURITY-304")
    @LocalData
    public void canReadPreSec304Secrets() throws Exception {
        FreeStyleProject project = j.jenkins.getItemByFullName("OldSecret", FreeStyleProject.class);
        String oldxml = project.getConfigFile().asString();
        //It should be unchanged on disk
        assertThat(oldxml, containsString("<defaultValue>z/Dd3qrHdQ6/C5lR7uEafM/jD3nQDrGprw3XsfZ/0vo=</defaultValue>"));
        ParametersDefinitionProperty property = project.getProperty(ParametersDefinitionProperty.class);
        ParameterDefinition definition = property.getParameterDefinitions().get(0);
        assertTrue(definition instanceof PasswordParameterDefinition);
        Secret secret = ((PasswordParameterDefinition) definition).getDefaultValueAsSecret();
        assertEquals("theSecret", secret.getPlainText());

        //OK it was read correctly from disk, now the first roundtrip should update the encrypted value

        project = j.configRoundtrip(project);
        String newXml = project.getConfigFile().asString();
        assertNotEquals(oldxml, newXml); //This could have changed because Jenkins has moved on, so not really a good check
        assertThat(newXml, not(containsString("<defaultValue>z/Dd3qrHdQ6/C5lR7uEafM/jD3nQDrGprw3XsfZ/0vo=</defaultValue>")));
        Pattern p = Pattern.compile("<defaultValue>\\{[A-Za-z0-9+/]+={0,2}}</defaultValue>");
        assertTrue(p.matcher(newXml).find());

        //But the next roundtrip should result in the same data
        project = j.configRoundtrip(project);
        String round2 = project.getConfigFile().asString();
        assertEquals(newXml, round2);
    }
}