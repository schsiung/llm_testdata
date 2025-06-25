/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE94_Improper_Control_of_Generation_of_Code.env_ognl.cases;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.InputStream;
import java.util.Properties;

/*
 * @description 类的静态变量是一个Properties，通过方法的load导入了外部污染数据，在另一个类中通过getProperty获取污染数据爆发的场景。
 *
 * @cwe 94
 * @tool fortify: OGNL Expression Injection: Double Evaluation;secbrella: SecS_OGNL_Expression_Injection;secbrella: OGNL_Expression_Injection;
 * @author 方健尔 f00563108
 */
public class CWE94_OGNL_Expression_Injection_ParseDouble_console__env_ognl_parseExpressions_310b {

    private static Properties props = new Properties();

    public static void init(String configFilePath) {
        try (InputStream is = new FileInputStream(configFilePath)) {
            props.load(is);
        } catch (FileNotFoundException ignored) {
            System.out.println("file not found " + ignored.getMessage());
        } catch (Exception e) {
            System.out.println("Read " + configFilePath + " failed. " + e.getMessage());
            throw new RuntimeException(e);
        }
    }

    public static String getProperty(String key) {
        return props.getProperty(key);
    }
}

