/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE91_XML_Injection.XMLInjection.cases;

import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.stream.StreamResult;
import javax.xml.transform.stream.StreamSource;
import java.io.FileOutputStream;

/**
 *
 * @cwe 91
 * @bad XsltTransBadCase01;XsltTransBadCase02;XsltTransBadCase03;XsltTransBadCase04
 * @tool Fortify:XML Injection;SecBrella:SecS_XML_Injection;
 * @author 张自强 z30004299
 */
public class CWE91_XML_Injection__XMLInjection_8 {

    // transformer of StreamSource without setFeature
    public static void XsltTransBadCase01(String src, String dst, String xslt) {
        TransformerFactory tf = TransformerFactory.newInstance();
        try {

            // 转换器工厂设置黑名单，禁用一些不安全的方法，类似XXE防护
            // tf.setFeature("http://javax.xml.XMLConstants/feature/secure-processing",
            // true);
            // 获取转换器对象实例

            /* POTENTIAL FLAW:XSLT是一种样式转换标记语言，可以将XML数据档转换为另外的XML或其它格式，如HTML网页，纯文字。因为XSLT的功能十分强大，可以导致任意代码执行，当使用TransformerFactory转换XML格式数据的时候，需要添加安全策略禁止不安全的XSLT代码执行。*/
            Transformer transformer = tf.newTransformer(new StreamSource(xslt));
            // 进行转换
            transformer.transform(new StreamSource(src), new StreamResult(new FileOutputStream(dst)));
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    // two transformers, one has setFeatures while another does not
    public static void XsltTransBadCase02(String src, String dst, String xslt) {
        TransformerFactory tf1 = TransformerFactory.newInstance();
        TransformerFactory tf2 = TransformerFactory.newInstance();
        try {
            // 转换器工厂设置黑名单，禁用一些不安全的方法，类似XXE防护
            tf1.setFeature("http://javax.xml.XMLConstants/feature/secure-processing", true);
            // 获取转换器对象实例
            Transformer transformer1 = tf1.newTransformer(new StreamSource(xslt));

            /* POTENTIAL FLAW:XSLT是一种样式转换标记语言，可以将XML数据档转换为另外的XML或其它格式，如HTML网页，纯文字。因为XSLT的功能十分强大，可以导致任意代码执行，当使用TransformerFactory转换XML格式数据的时候，需要添加安全策略禁止不安全的XSLT代码执行。*/
            Transformer transformer2 = tf2.newTransformer(new StreamSource(xslt));
            // 进行转换
            transformer1.transform(new StreamSource(src), new StreamResult(new FileOutputStream(dst)));
            transformer2.transform(new StreamSource(src), new StreamResult(new FileOutputStream(dst)));
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    // create transformer before executing setFeature
    public static void XsltTransBadCase03(String src, String dst, String xslt) {
        TransformerFactory tf = TransformerFactory.newInstance();
        try {
            // 获取转换器对象实例
            /* POTENTIAL FLAW:XSLT是一种样式转换标记语言，可以将XML数据档转换为另外的XML或其它格式，如HTML网页，纯文字。因为XSLT的功能十分强大，可以导致任意代码执行，当使用TransformerFactory转换XML格式数据的时候，需要添加安全策略禁止不安全的XSLT代码执行。*/
            Transformer transformer = tf.newTransformer(new StreamSource(xslt));
            // 转换器工厂设置黑名单，禁用一些不安全的方法，类似XXE防护
            tf.setFeature("http://javax.xml.XMLConstants/feature/secure-processing", true);
            // 进行转换
            transformer.transform(new StreamSource(src), new StreamResult(new FileOutputStream(dst)));
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    // another way of initialize the transformer
    public static void XsltTransBadCase04(String src, String dst, String xslt) {
        TransformerFactory tf = TransformerFactory.newInstance();
        try {

            // 获取转换器对象实例
            StreamSource source = new StreamSource(xslt);
            /* POTENTIAL FLAW:XSLT是一种样式转换标记语言，可以将XML数据档转换为另外的XML或其它格式，如HTML网页，纯文字。因为XSLT的功能十分强大，可以导致任意代码执行，当使用TransformerFactory转换XML格式数据的时候，需要添加安全策略禁止不安全的XSLT代码执行。*/
            Transformer transformer = tf.newTransformer(source);
            // 进行转换
            transformer.transform(new StreamSource(src), new StreamResult(new FileOutputStream(dst)));
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
