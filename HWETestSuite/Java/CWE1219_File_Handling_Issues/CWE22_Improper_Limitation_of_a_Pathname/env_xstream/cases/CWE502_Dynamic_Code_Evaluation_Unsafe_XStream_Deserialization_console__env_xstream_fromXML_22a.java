/**
* @testsuite baihu
*/
package CWE1219_File_Handling_Issues.CWE22_Improper_Limitation_of_a_Pathname.env_xstream.cases;

import testcasesupport.Contact;
import testcasesupport.IO;
import com.thoughtworks.xstream.XStream;
import com.thoughtworks.xstream.io.xml.DomDriver;

/*
 * @description 数据流source点传递过程被一个公有的静态成员变量badPublicStatic控制，并且从另一个文件的方法调用传入。
 *
 * @cwe 502
 * @bad bad
 * @good good
 * @tool fortify: Dynamic Code Evaluation: Unsafe XStream Deserialization;secbrella: SecS_Dynamic_Code_Evaluation;secbrella: Eval_Injection;
 * @author 董镇山 d00305016
 */
public class CWE502_Dynamic_Code_Evaluation_Unsafe_XStream_Deserialization_console__env_xstream_fromXML_22a {


    public static boolean badPublicStatic = false;

    public void bad() throws Throwable {
        String data;

        badPublicStatic = true;
        data = (new CWE502_Dynamic_Code_Evaluation_Unsafe_XStream_Deserialization_console__env_xstream_fromXML_22b()).badSource();

        XStream xstream = new XStream(new DomDriver());
        xstream.setClassLoader(Contact.class.getClassLoader());

        xstream.processAnnotations(Contact.class);
        /* POTENTIAL FLAW: Dynamic Code Evaluation: Unsafe XStream Deserialization */
        Contact expl = (Contact) xstream.fromXML(data);

        IO.writeLine(expl.toString());

    }

    public static boolean goodG2B1PublicStatic = false;
    public static boolean goodG2B2PublicStatic = false;

    public void good() throws Throwable {
        goodG2B1();
        goodG2B2();
    }

    private void goodG2B1() throws Throwable {
        String data;

        goodG2B1PublicStatic = false;
        data = (new CWE502_Dynamic_Code_Evaluation_Unsafe_XStream_Deserialization_console__env_xstream_fromXML_22b()).goodG2B1Source();

        XStream xstream = new XStream(new DomDriver());
        xstream.setClassLoader(Contact.class.getClassLoader());

        xstream.processAnnotations(Contact.class);
        Contact expl = (Contact) xstream.fromXML(data);

        IO.writeLine(expl.toString());

    }

    private void goodG2B2() throws Throwable {
        String data;

        goodG2B2PublicStatic = true;
        data = (new CWE502_Dynamic_Code_Evaluation_Unsafe_XStream_Deserialization_console__env_xstream_fromXML_22b()).goodG2B2Source();

        XStream xstream = new XStream(new DomDriver());
        xstream.setClassLoader(Contact.class.getClassLoader());

        xstream.processAnnotations(Contact.class);
        Contact expl = (Contact) xstream.fromXML(data);

        IO.writeLine(expl.toString());

    }
}
