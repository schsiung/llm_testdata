/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE20_Improper_Input_Validation.env_DesignatedPackageName.cases;

import testcasesupport.Contact;

/*
 * @description 实现类。数据流source点从接口产生，在被子类调用时丢失的场景。
 *
 * @cwe 111
 * @bad bad
 * @tool fortify: Unsafe JSNI
 * @author 方健尔 f00563108
 */
public class CWE111_Unsafe_JSNI_console__env_DesignatedPackageName_native_200a implements CWE111_Unsafe_JSNI_console__env_DesignatedPackageName_native_200b {


    @Override
    public void bad() throws Throwable {
        badSink(CONTAMINANT);
    }

    private void badSink(String data) throws Throwable {

        Contact contact = new Contact();

        /* POTENTIAL FLAW: Unsafe JSNI */
        contact.sinkData(data);

    }
}
