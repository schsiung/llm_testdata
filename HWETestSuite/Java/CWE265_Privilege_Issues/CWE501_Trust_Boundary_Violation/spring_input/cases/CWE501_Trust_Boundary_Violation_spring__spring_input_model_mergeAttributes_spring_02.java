/**
* @testsuite baihu
*/
package CWE265_Privilege_Issues.CWE501_Trust_Boundary_Violation.spring_input.cases;

import org.springframework.ui.ConcurrentModel;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

/*
 * @description Spring最简单的@Requestmapping注解方法Object入参作为污染数据。
 *
 * @cwe 501
 * @bad bad
 * @tool fortify: Trust Boundary Violation;secbrella: SecS_Trust_Boundary_Violation;secbrella: Trust_Boundary_Violation;
 * @author 方健尔 f00563108
 */
@RestController
@RequestMapping("/sample")
public class CWE501_Trust_Boundary_Violation_spring__spring_input_model_mergeAttributes_spring_02 {


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


        Model model = new ConcurrentModel();
        Map map = new HashMap();
        map.put("data", data);
        /* POTENTIAL FLAW: Trust Boundary Violation */
        model.mergeAttributes(map);

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
