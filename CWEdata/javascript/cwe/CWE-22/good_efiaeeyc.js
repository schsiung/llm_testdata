buildscript {
	repositories {
		mavenLocal()
		jcenter()
	}
	dependencies {
	}
}

subprojects {
}
	version = '3.0.4'

apply plugin: 'groovy'
apply plugin: 'idea'

group = 'com.bertramlabs.plugins'

repositories {
	jcenter()
	mavenCentral()
}

// groovydoc {
// 	groovyClasspath = configurations.doc
// }

dependencies {
	compile 'org.codehaus.groovy:groovy:2.0.7'
	compile 'org.codehaus.groovy:groovy-templates:2.0.7'
	compile 'org.mozilla:rhino:1.7R4'
	// compile 'com.google.javascript:closure-compiler-unshaded:v20170124'
	compile     'com.google.javascript:closure-compiler-unshaded:v20160713'
	// compile 'com.google.javascript:closure-compiler-unshaded:v20171112'
	compile 'commons-logging:commons-logging:1.1.1'
	testCompile 'org.spockframework:spock-core:0.7-groovy-2.0'
}

test {
	testLogging {
		exceptionFormat = 'full'
		showStandardStreams = true
	}
}

task wrapper(type: Wrapper) {
	gradleVersion = '3.3'
}