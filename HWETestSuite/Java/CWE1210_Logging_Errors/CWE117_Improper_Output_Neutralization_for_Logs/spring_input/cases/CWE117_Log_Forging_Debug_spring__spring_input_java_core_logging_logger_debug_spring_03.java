/**
* @testsuite baihu
*/
package CWE1210_Logging_Errors.CWE117_Improper_Output_Neutralization_for_Logs.spring_input.cases;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/*
 * @description Spring五种请求方式[DeleteMapping、GetMapping、PatchMapping、PostMapping、PutMapping]的污染数据入参场景。
 *
 * @cwe 117
 * @bad bad,bad1,bad2,bad3,bad4
 * @tool fortify: Log Forging (debug);secbrella: SecS_Log_Forging;secbrella: Log_Forging;_Debug
 * @author 方健尔 f00563108
 */
@RestController
@RequestMapping("/sample")
public class CWE117_Log_Forging_Debug_spring__spring_input_java_core_logging_logger_debug_spring_03 {
    public static final Logger LOGGER = LoggerFactory.getLogger("LogInjectionDebugTestCase");


    @DeleteMapping("/bad")
    public String bad(ParamData paramData) {
        badSourceSink(paramData.getData());

        return "success";
    }

    @GetMapping("/bad1")
    public String bad1(ParamData paramData) {
        badSourceSink(paramData.getData());

        return "success";
    }

    @PatchMapping("/bad2")
    public String bad2(ParamData paramData) {
        badSourceSink(paramData.getData());

        return "success";
    }

    @PostMapping("/bad3")
    public String bad3(ParamData paramData) {
        badSourceSink(paramData.getData());

        return "success";
    }

    @PutMapping("/bad4")
    public String bad4(ParamData paramData) {
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


        /* POTENTIAL FLAW: log injection debug */
        LOGGER.debug(data);

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
