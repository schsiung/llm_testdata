/**
* @testsuite baihu
*/
package CWE1219_File_Handling_Issues.CWE22_Improper_Limitation_of_a_Pathname.spring_input;

import testcasesupport.IO;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.File;

/*
 * @description Spring最简单的@Requestmapping注解方法String入参作为污染数据。
 *
 * @cwe 22
 * @bad bad
 * @tool fortify: Path Manipulation;secbrella: SecS_Path_Manipulation;secbrella: Path_Traversal;
 * @author 方健尔 f00563108
 */
@RestController
@RequestMapping("/sample")
public class CWE22_Path_Manipulation_spring__spring_input_file_spring_01 {


    @RequestMapping("/bad")
    public String bad(String contaminationData) {
        this.badSourceSink(contaminationData);

        return "success";
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


        /* POTENTIAL FLAW: path manipulation */
        File file = new File(data);
        IO.writeLine(file.getName());

    }
}
