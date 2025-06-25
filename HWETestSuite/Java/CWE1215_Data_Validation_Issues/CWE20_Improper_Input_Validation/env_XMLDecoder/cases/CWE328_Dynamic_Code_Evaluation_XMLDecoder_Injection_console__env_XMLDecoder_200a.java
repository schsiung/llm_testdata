/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE20_Improper_Input_Validation.env_XMLDecoder.cases;

import testcasesupport.IO;

import java.beans.XMLDecoder;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.InputStream;

/*
 * @description 实现类。数据流source点从接口产生，在被子类调用时丢失的场景。
 *
 * @cwe 328
 * @bad bad
 * @tool fortify: Dynamic Code Evaluation: XMLDecoder Injection;secbrella: SecS_Dynamic_Code_Evaluation;secbrella: Eval_Injection;
 * @author 方健尔 f00563108
 */
public class CWE328_Dynamic_Code_Evaluation_XMLDecoder_Injection_console__env_XMLDecoder_200a implements CWE328_Dynamic_Code_Evaluation_XMLDecoder_Injection_console__env_XMLDecoder_200b {


    @Override
    public void bad() throws Throwable {
        badSink(CONTAMINANT);
    }

    private void badSink(String data) throws Throwable {

        try {
            InputStream inputStream = new FileInputStream(data);

            /* POTENTIAL FLAW: Dynamic Code Evaluation XML Decoder Injection */
            XMLDecoder xmlDecoder = new XMLDecoder(inputStream);
            xmlDecoder.readObject();
        } catch (FileNotFoundException e) {
            IO.writeLine(e.getMessage());
        }

    }
}
