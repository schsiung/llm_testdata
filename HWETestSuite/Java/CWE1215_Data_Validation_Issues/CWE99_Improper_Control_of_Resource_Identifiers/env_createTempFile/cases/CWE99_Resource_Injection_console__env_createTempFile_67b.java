/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE99_Improper_Control_of_Resource_Identifiers.env_createTempFile.cases;

import testcasesupport.IO;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;

/*
 * @description 数据流sink点爆发方法，其中的source点在同一个包中两个不同类的方法通过其他类的成员变量进行传递。
 *
 * @cwe 99
 * @tool fortify: Resource Injection;secbrella: SecS_Resource_Injection;secbrella: Resource_Injection;
 * @author 董镇山 d00305016
 */
public class CWE99_Resource_Injection_console__env_createTempFile_67b {


    public void badSink(CWE99_Resource_Injection_console__env_createTempFile_67a.Container dataContainer) throws Throwable {
        String data = dataContainer.containerOne;

        try {
            /* POTENTIAL FLAW: Resource Injection */
            Path path = Files.createTempFile(data, ".tpl");

            IO.writeLine(path.getNameCount());

        } catch (IOException e) {
            IO.writeLine(e.getMessage());
        }

    }

    public void goodG2BSink(CWE99_Resource_Injection_console__env_createTempFile_67a.Container dataContainer) throws Throwable {
        String data = dataContainer.containerOne;

        try {
            Path path = Files.createTempFile(data, ".tpl");

            IO.writeLine(path.getNameCount());

        } catch (IOException e) {
            IO.writeLine(e.getMessage());
        }

    }
}
