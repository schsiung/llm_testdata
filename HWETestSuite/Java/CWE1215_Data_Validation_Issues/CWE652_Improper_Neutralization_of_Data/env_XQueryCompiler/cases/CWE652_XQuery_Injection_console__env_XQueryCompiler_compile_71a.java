/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE652_Improper_Neutralization_of_Data.env_XQueryCompiler.cases;

/*
 * @description 数据流source点在同一个包中两个不同类的方法通过强转的Object类型进行传递。
 *
 * @cwe 652
 * @bad bad
 * @good good
 * @tool fortify: XQuery Injection;secbrella: SecS_XQuery_Injection
 * @author 董镇山 d00305016
 */
public class CWE652_XQuery_Injection_console__env_XQueryCompiler_compile_71a {


    public void bad() throws Throwable {
        String data;

        data = ""; /* Initialize data */

        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }


        (new CWE652_XQuery_Injection_console__env_XQueryCompiler_compile_71b()).badSink((Object) data);
    }

    public void good() throws Throwable {
        goodG2B();
    }

    private void goodG2B() throws Throwable {
        String data;

        data = "foo";

        (new CWE652_XQuery_Injection_console__env_XQueryCompiler_compile_71b()).goodG2BSink((Object) data);
    }
}
