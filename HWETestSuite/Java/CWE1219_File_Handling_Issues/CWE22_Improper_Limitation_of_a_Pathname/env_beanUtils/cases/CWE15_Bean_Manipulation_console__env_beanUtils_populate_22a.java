/**
* @testsuite baihu
*/
package CWE1219_File_Handling_Issues.CWE22_Improper_Limitation_of_a_Pathname.env_beanUtils.cases;

import testcasesupport.Contact;
import testcasesupport.IO;
import org.apache.commons.beanutils.BeanUtils;

import java.lang.reflect.InvocationTargetException;
import java.util.HashMap;
import java.util.Map;

/*
 * @description 数据流source点传递过程被一个公有的静态成员变量badPublicStatic控制，并且从另一个文件的方法调用传入。
 *
 * @cwe 15
 * @bad bad
 * @good good
 * @tool fortify: Bean Manipulation;secbrella: SecS_Bean_Manipulation
 * @author 董镇山 d00305016
 */
public class CWE15_Bean_Manipulation_console__env_beanUtils_populate_22a {


    public static boolean badPublicStatic = false;

    public void bad() throws Throwable {
        String data;

        badPublicStatic = true;
        data = (new CWE15_Bean_Manipulation_console__env_beanUtils_populate_22b()).badSource();


        Map properties = new HashMap();
        properties.put("name", data);
        Contact contact = new Contact();

        try {
            /* POTENTIAL FLAW: Bean Manipulation */
            BeanUtils.populate(contact, properties);
        } catch (IllegalAccessException e) {
            IO.writeLine(e.getMessage());
        } catch (InvocationTargetException e) {
            IO.writeLine(e.getMessage());
        }

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
        data = (new CWE15_Bean_Manipulation_console__env_beanUtils_populate_22b()).goodG2B1Source();


        Map properties = new HashMap();
        properties.put("data", data);
        Contact contact = new Contact();

        try {
            BeanUtils.populate(contact, properties);
        } catch (IllegalAccessException e) {
            IO.writeLine(e.getMessage());
        } catch (InvocationTargetException e) {
            IO.writeLine(e.getMessage());
        }

    }

    private void goodG2B2() throws Throwable {
        String data;

        goodG2B2PublicStatic = true;
        data = (new CWE15_Bean_Manipulation_console__env_beanUtils_populate_22b()).goodG2B2Source();


        Map properties = new HashMap();
        properties.put("data", data);
        Contact contact = new Contact();

        try {
            BeanUtils.populate(contact, properties);
        } catch (IllegalAccessException e) {
            IO.writeLine(e.getMessage());
        } catch (InvocationTargetException e) {
            IO.writeLine(e.getMessage());
        }

    }
}
