<?xml version='1.0' encoding='UTF-8'?>
<!--
  ~ Copyright 2016 Red Hat, Inc. and/or its affiliates
  ~ and other contributors as indicated by the @author tags.
  ~
  ~ Licensed under the Apache License, Version 2.0 (the "License");
  ~ you may not use this file except in compliance with the License.
  ~ You may obtain a copy of the License at
  ~
  ~ http://www.apache.org/licenses/LICENSE-2.0
  ~
  ~ Unless required by applicable law or agreed to in writing, software
  ~ distributed under the License is distributed on an "AS IS" BASIS,
  ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  ~ See the License for the specific language governing permissions and
  ~ limitations under the License.
  -->

<!--  See src/resources/configuration/ReadMe.txt for how the configuration assembly works -->
<config>
    <extension-module>org.jboss.as.connector</extension-module>
    <subsystem xmlns="urn:jboss:domain:datasources:5.0">
        <datasources>
            <datasource jndi-name="java:jboss/datasources/ExampleDS" pool-name="ExampleDS" enabled="true" use-java-context="true" statistics-enabled="${wildfly.datasources.statistics-enabled:${wildfly.statistics-enabled:false}}">
                <connection-url>jdbc:h2:mem:test;DB_CLOSE_DELAY=-1;DB_CLOSE_ON_EXIT=FALSE</connection-url>
                <driver>h2</driver>
                <security>
                    <user-name>sa</user-name>
                    <password>sa</password>
                </security>
            </datasource>
            <datasource jndi-name="java:jboss/datasources/KeycloakDS" pool-name="KeycloakDS" enabled="true" use-java-context="true" statistics-enabled="${wildfly.datasources.statistics-enabled:${wildfly.statistics-enabled:false}}">
                <connection-url><?KEYCLOAK_DS_CONNECTION_URL?></connection-url>
                <driver>h2</driver>
                <security>
                    <user-name>sa</user-name>
                    <password>sa</password>
                </security>
                <pool>
                    <max-pool-size>100</max-pool-size>
                </pool>
            </datasource>
            <drivers>
                <driver name="h2" module="com.h2database.h2">
                    <xa-datasource-class>org.h2.jdbcx.JdbcDataSource</xa-datasource-class>
                </driver>
            </drivers>
        </datasources>
    </subsystem>
    <supplement name="default">
        <replacement placeholder="KEYCLOAK_DS_CONNECTION_URL">
            jdbc:h2:${jboss.server.data.dir}/keycloak;AUTO_SERVER=TRUE
        </replacement>
    </supplement>
    <supplement name="domain">
        <replacement placeholder="KEYCLOAK_DS_CONNECTION_URL">
            jdbc:h2:${jboss.server.data.dir}/../../shared-database/keycloak;AUTO_SERVER=TRUE
        </replacement>
    </supplement>
</config>