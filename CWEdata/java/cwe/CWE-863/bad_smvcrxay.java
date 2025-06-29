/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

apply plugin: 'java'
apply plugin: 'maven'

group = 'cn.cisdigital.demo'
version = '1.0.0'

description = """demo项目"""

sourceCompatibility = 1.5
targetCompatibility = 1.5
tasks.withType(JavaCompile) {
	options.encoding = 'UTF-8'
}



repositories {
        
     maven { url "http://maven.aliyun.com/nexus/content/groups/public/" }
     maven { url "http://10.73.1.87:8088/nexus/content/groups/public/" }
     maven { url "http://repo.maven.apache.org/maven2" }
}
dependencies {
    compile(group: 'org.springframework.boot', name: 'spring-boot-starter-web', version:'2.3.3.RELEASE') {
exclude(module: 'spring-boot-starter-logging')
    }
    compile(group: 'mysql', name: 'mysql-connector-java', version:'5.1.47') {
exclude(module: 'protobuf-java')
    }
    compile group: 'org.springframework.boot', name: 'spring-boot-starter-log4j2', version:'2.3.3.RELEASE'
    compile group: 'org.projectlombok', name: 'lombok', version:'1.18.12'
    compile group: 'com.alibaba', name: 'druid-spring-boot-starter', version:'1.1.17'
    compile group: 'com.baomidou', name: 'mybatis-plus-boot-starter', version:'3.4.0'
    compile group: 'com.alibaba', name: 'fastjson', version:'1.2.73'
    compile group: 'org.apache.commons', name: 'commons-lang3', version:'3.11'
    compile group: 'com.ctrip.framework.apollo', name: 'apollo-client', version:'1.2.0'
    compile group: 'io.springfox', name: 'springfox-swagger2', version:'2.7.0'
    compile group: 'io.springfox', name: 'springfox-swagger-ui', version:'2.7.0'
    compile group: 'cn.cisdigital', name: 'exception-component', version:'1.0.0'
    compile group: 'com.dianping.cat', name: 'cat-client', version:'3.0.0'
    compile group: 'org.hibernate.validator', name: 'hibernate-validator', version:'6.0.9.Final'
    compile group: 'io.jsonwebtoken', name: 'jjwt', version:'0.6.0'
    compile group: 'org.aspectj', name: 'aspectjweaver', version:'1.9.6'
    testCompile(group: 'org.springframework.boot', name: 'spring-boot-starter-test', version:'2.3.3.RELEASE') {
exclude(module: 'junit-vintage-engine')
    }
    testCompile group: 'junit', name: 'junit', version:'4.13'
}