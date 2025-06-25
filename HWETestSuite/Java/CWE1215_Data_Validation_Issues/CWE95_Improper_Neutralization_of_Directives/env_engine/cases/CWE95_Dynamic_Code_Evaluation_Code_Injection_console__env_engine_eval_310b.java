/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE95_Improper_Neutralization_of_Directives.env_engine.cases;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.InputStream;
import java.util.Properties;

/*
 * @description 类的静态变量是一个Properties，通过方法的load导入了外部污染数据，在另一个类中通过getProperty获取污染数据爆发的场景。
 *
 * @cwe 95
 * @tool fortify: Dynamic Code Evaluation: Code Injection;secbrella: SecS_Dynamic_Code_Evaluation;secbrella: Eval_Injection;
 * @author 方健尔 f00563108
 */
public class CWE95_Dynamic_Code_Evaluation_Code_Injection_console__env_engine_eval_310b {

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

