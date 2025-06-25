/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE95_Improper_Neutralization_of_Directives.spring_input.cases;

import org.apache.struts.taglib.bean.IncludeTag;
import org.springframework.beans.factory.annotation.Value;

import java.util.List;

/*
 * @description Spring注解@Value读取污染数据，污染数据解析成List进行传递。
 *
 * @cwe 95
 * @bad bad1,bad2
 * @tool fortify: Dangerous File Inclusion;secbrella: SecS_Dangerous_File_Inclusion
 * @author 方健尔 f00563108
 */
public class CWE95_Dangerous_File_Inclusion_spring__spring_input_includeTag_setHref_spring_05 {


    /* 通过@Value注解来读取污染数据方式1 */
    @Value("${password.list.ids:1,2,3}")
    private List<String> value1;

    /* 通过@Value注解来读取污染数据方式2 */
    @Value("#{'${password.list}'.split(',')}")
    private List<String> value2;

    private void bad1() {
        if (value1 != null) {
            this.badSourceSink(value1.get(0));
        }
    }

    private void bad2() {
        if (value2 != null) {
            this.badSourceSink(value2.get(0));
        }
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


        IncludeTag includeTag = new IncludeTag();
        /* POTENTIAL FLAW: Dangerous File Inclusion */
        includeTag.setHref(data);

    }
}
