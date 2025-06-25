/**
* @testsuite baihu
*/
package CWE339_Resource_Management_Errors.CWE114_Process_Control.env_Runtime.cases;

/*
 * @description 将污染数据以value的形式存入跨类的成员变量map中，然后通过获取跨类的map中的key所对应的value来传递的场景。
 *
 * @cwe 114
 * @bad bad
 * @good good
 * @tool fortify: Process Control;secbrella: SecS_Process_Control
 * @author 方健尔 f00563108
 */
public class CWE114_Process_Control_console__env_Runtime_load_333a {


    public void bad() throws Throwable {
        String data;
        data = ""; /* Initialize data */
        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }

        CWE114_Process_Control_console__env_Runtime_load_333b anotherClass = new CWE114_Process_Control_console__env_Runtime_load_333b();
        anotherClass.mapSource.put("key1", data);

        sink(anotherClass);
    }

    private void sink(CWE114_Process_Control_console__env_Runtime_load_333b anotherClass) throws Throwable {
        String data = anotherClass.mapSource.get("key1");

        /* POTENTIAL FLAW: Process Control */
        java.lang.Runtime.getRuntime().load(data);

    }

    public void good() throws Throwable {
        CWE114_Process_Control_console__env_Runtime_load_333b anotherClass = new CWE114_Process_Control_console__env_Runtime_load_333b();
        anotherClass.mapSource.put("key2", "value2");
        goodG2B(anotherClass);
    }

    private void goodG2B(CWE114_Process_Control_console__env_Runtime_load_333b anotherClass) throws Throwable {
        String data = anotherClass.mapSource.get("key2");

        java.lang.Runtime.getRuntime().load(data);

    }

}
