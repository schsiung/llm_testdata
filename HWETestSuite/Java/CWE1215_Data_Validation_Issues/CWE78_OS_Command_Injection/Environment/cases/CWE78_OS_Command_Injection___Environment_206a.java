/**
 * @testsuite baihu
 */
package CWE1215_Data_Validation_Issues.CWE78_OS_Command_Injection.Environment.cases;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;

import testcasesupport.IO;

/*
 * @description 实现类。数据流source点从抽象类产生，赋值给抽象类的成员变量，在被子类使用时丢失的场景。
 *
 * @cwe 78
 * @bad bad
 * @tool fortify: Command Injection;secbrella: SecS_Command_Injection
 * @author 方健尔 f00563108
 */
public class CWE78_OS_Command_Injection___Environment_206a extends CWE78_OS_Command_Injection___Environment_206b {


    @Override
    public void abstractMethod() {
        System.out.println("override abstract class's abstract method");
    }

    @Override
    public void bad() throws Throwable {
        super.bad();
        CWE78_OS_Command_Injection___Environment_206c.badSink(super.path);
    }

}
