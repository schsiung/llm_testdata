/**
* @testsuite baihu
*/
package CWE1217_User_Session_Errors.CWE918_Server_Side_Request_Forgery.spring_input.cases;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.net.URI;
import java.net.URISyntaxException;

/*
 * @description Spring最简单的@Requestmapping注解方法Object入参作为污染数据。
 *
 * @cwe 918
 * @bad bad
 * @tool fortify: Server-Side Request Forgery;secbrella: SecS_Server_Side_Request_Forgery
 * @author 方健尔 f00563108
 */
@RestController
@RequestMapping("/sample")
public class CWE918_Server_Side_Request_Forgery_spring__spring_input_RestTemplate_put_spring_02 {


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


        RestTemplate restTemplate = new RestTemplate();
        try {
            /* POTENTIAL FLAW: Server-Side Request Forgery */
            restTemplate.put(new URI(data), null);
        } catch (URISyntaxException e) {
            e.printStackTrace();
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
