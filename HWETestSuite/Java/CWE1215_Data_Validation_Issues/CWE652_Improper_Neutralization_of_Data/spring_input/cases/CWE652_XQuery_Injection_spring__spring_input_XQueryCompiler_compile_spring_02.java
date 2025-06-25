/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE652_Improper_Neutralization_of_Data.spring_input.cases;

import testcasesupport.IO;
import net.sf.saxon.s9api.Processor;
import net.sf.saxon.s9api.SaxonApiException;
import net.sf.saxon.s9api.XQueryCompiler;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/*
 * @description Spring最简单的@Requestmapping注解方法Object入参作为污染数据。
 *
 * @cwe 652
 * @bad bad
 * @tool fortify: XQuery Injection;secbrella: SecS_XQuery_Injection
 * @author 方健尔 f00563108
 */
@RestController
@RequestMapping("/sample")
public class CWE652_XQuery_Injection_spring__spring_input_XQueryCompiler_compile_spring_02 {


    @RequestMapping("/bad")
    public String bad(ParamData paramData) {
        badSourceSink(paramData.getData());

        return "success";
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


        Processor proc = new Processor(false);
        XQueryCompiler comp = proc.newXQueryCompiler();
        try {
            /* POTENTIAL FLAW: XQuery Injection */
            comp.compile(data);
        } catch (SaxonApiException e) {
            IO.writeLine(e.getMessage());
        }

    }

    class ParamData {
        private Integer id;
        private String name;
        private Integer age;
        private String sex;
        private String addr;
        private String passWord;
        private String data;

        public String getData() {
            return data;
        }

        public void setData(String data) {
            this.data = data;
        }

        public Integer getId() {
            return id;
        }

        public void setId(Integer id) {
            this.id = id;
        }

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public Integer getAge() {
            return age;
        }

        public void setAge(Integer age) {
            this.age = age;
        }

        public String getSex() {
            return sex;
        }

        public void setSex(String sex) {
            this.sex = sex;
        }

        public String getAddr() {
            return addr;
        }

        public void setAddr(String addr) {
            this.addr = addr;
        }

        public String getPassWord() {
            return passWord;
        }

        public void setPassWord(String passWord) {
            this.passWord = passWord;
        }
    }

}
