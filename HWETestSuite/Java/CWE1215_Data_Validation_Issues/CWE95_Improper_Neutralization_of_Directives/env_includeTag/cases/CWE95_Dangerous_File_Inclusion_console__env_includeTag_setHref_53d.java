/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE95_Improper_Neutralization_of_Directives.env_includeTag.cases;

import org.apache.struts.taglib.bean.IncludeTag;

/*
 * @description 数据流sink点爆发方法，其中的source点通过同一包下四个不同类的方法的参数传递。
 *
 * @cwe 95
 * @tool fortify: Dangerous File Inclusion;secbrella: SecS_Dangerous_File_Inclusion
 * @author 董镇山 d00305016
 */
public class CWE95_Dangerous_File_Inclusion_console__env_includeTag_setHref_53d {


    public void badSink(String data) throws Throwable {

        IncludeTag includeTag = new IncludeTag();
        /* POTENTIAL FLAW: Dangerous File Inclusion */
        includeTag.setHref(data);

    }

    public void goodG2BSink(String data) throws Throwable {

        IncludeTag includeTag = new IncludeTag();
        includeTag.setHref(data);

    }
}
