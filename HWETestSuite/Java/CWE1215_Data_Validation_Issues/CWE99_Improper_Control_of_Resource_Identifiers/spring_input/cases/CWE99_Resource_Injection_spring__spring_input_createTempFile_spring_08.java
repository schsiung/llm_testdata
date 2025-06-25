/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE99_Improper_Control_of_Resource_Identifiers.spring_input.cases;

import testcasesupport.IO;
import org.apache.commons.lang3.StringUtils;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;

/*
 * @description 在Restful接口中使用@Path注解读取外部输入。
 *
 * @cwe 99
 * @bad bad
 * @tool fortify: Resource Injection;secbrella: SecS_Resource_Injection;secbrella: Resource_Injection;
 * @author 方健尔 f00563108
 */
public class CWE99_Resource_Injection_spring__spring_input_createTempFile_spring_08 {


    @javax.ws.rs.Path("{hostName}")
    @javax.ws.rs.POST
    @javax.ws.rs.Consumes(javax.ws.rs.core.MediaType.APPLICATION_JSON)
    @javax.ws.rs.Produces({javax.ws.rs.core.MediaType.APPLICATION_JSON, javax.ws.rs.core.MediaType.APPLICATION_XML})
    public void bad(@javax.ws.rs.PathParam("hostName") String hostName) {
        hostName = StringUtils.trim(hostName);
        String agentCrtName = hostName + ".crt";
        String contaminationData = agentCrtName;
        String data = "";
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
