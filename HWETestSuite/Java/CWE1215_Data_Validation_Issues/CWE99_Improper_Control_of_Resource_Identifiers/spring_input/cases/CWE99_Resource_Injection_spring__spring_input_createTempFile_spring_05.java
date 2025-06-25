/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE99_Improper_Control_of_Resource_Identifiers.spring_input.cases;

import testcasesupport.IO;
import org.springframework.beans.factory.annotation.Value;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;

/*
 * @description Spring注解@Value读取污染数据，污染数据解析成List进行传递。
 *
 * @cwe 99
 * @bad bad1,bad2
 * @tool fortify: Resource Injection;secbrella: SecS_Resource_Injection;secbrella: Resource_Injection;
 * @author 方健尔 f00563108
 */
public class CWE99_Resource_Injection_spring__spring_input_createTempFile_spring_05 {


    /* 通过@Value注解来读取污染数据方式1 */
    @Value("${password.list.ids:1,2,3}")
    private List<String> value1;

    /* 通过@Value注解来读取污染数据方式2 */
    @Value("#{'${password.list}'.split(',')}")
    private List<String> value2;

    private void bad1() {
        if (value1 != null) {
            this.badSourceSink(value1.get(0));
        }
    }

    private void bad2() {
        if (value2 != null) {
            this.badSourceSink(value2.get(0));
        }
    }

    private void badSourceSink(String contaminationData) {
        String data;

        data = ""; /* Initialize data */

        /* Manipulate data from spring input */
        {
            data = contaminationData.toLowerCase().trim();
            if (data.length() > 2) {
                data = data.substring(1);
            }
        }


        try {
            /* POTENTIAL FLAW: Resource Injection */
            Path path = Files.createTempFile(data, ".tpl");

            IO.writeLine(path.getNameCount());

        } catch (IOException e) {
            IO.writeLine(e.getMessage());
        }

    }
}
