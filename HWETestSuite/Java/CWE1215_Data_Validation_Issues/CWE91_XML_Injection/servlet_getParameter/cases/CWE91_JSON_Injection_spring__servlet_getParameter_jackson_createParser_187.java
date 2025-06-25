/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE91_XML_Injection.servlet_getParameter.cases;

import testcasesupport.IO;
import com.fasterxml.jackson.core.JsonFactory;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonToken;
import org.springframework.web.bind.annotation.*;
import java.io.IOException;
import java.util.concurrent.CountDownLatch;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/*
 * JSON Injection
 *
 * @cwe 91
 *
 * @bad badSink
 * @tool Fortify:JSON Injection;SecBrella:SecS_JSON_Injection;
 * @author 张自强 z30004299
 *
 */
@RestController
@RequestMapping("/sample")
public class CWE91_JSON_Injection_spring__servlet_getParameter_jackson_createParser_187 {


    @DeleteMapping("/bad")
    public void bad(HttpServletRequest request, HttpServletResponse response) {
        this.badSource(request, response);
    }

    @GetMapping("/bad1")
    public void bad1(HttpServletRequest request, HttpServletResponse response) {
        this.badSource(request, response);
    }

    @PatchMapping("/bad2")
    public void bad2(HttpServletRequest request, HttpServletResponse response) {
        this.badSource(request, response);
    }

    @PostMapping("/bad3")
    public void bad3(HttpServletRequest request, HttpServletResponse response) {
        this.badSource(request, response);
    }

    @PutMapping("/bad4")
    public void bad4(HttpServletRequest request, HttpServletResponse response) {
        this.badSource(request, response);
    }

    private void badSource(HttpServletRequest request, HttpServletResponse response) {
        String data = badSourceOne(request, response);

        int pool = 1;
        ExecutorService ex = Executors.newFixedThreadPool(pool);
        CountDownLatch countDownLatch = new CountDownLatch(pool);
        try {
            for (int i = 0; i < pool; i++) {
                RunnableTmp rt = new RunnableTmp(data, countDownLatch, request, response);
                ex.execute(rt);
            }

        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            ex.shutdown();
        }

        try {
            countDownLatch.await();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public String badSourceOne(HttpServletRequest request, HttpServletResponse response) {
        String data;

        data = ""; /* Initialize data */

        /* Read data from parameter */
        data = request.getParameter("name");

        return data;
    }

    class RunnableTmp implements Runnable {
        private String data;
        private CountDownLatch countDownLatch;
        private HttpServletRequest request;
        private HttpServletResponse response;

        public RunnableTmp(String data, CountDownLatch countDownLatch, HttpServletRequest request, HttpServletResponse response) {
            this.data = data;
            this.countDownLatch = countDownLatch;
            this.request = request;
            this.response = response;
        }

        @Override
        public void run() {
            try {
                badSink(this.data);
            } catch (Exception e) {
                e.printStackTrace();
            } finally {
                countDownLatch.countDown();
            }
        }

        private void badSink(String data) {
            JsonFactory factory = new JsonFactory();
            JsonParser parser = null;
            try {
                /* POTENTIAL FLAW: JSON Injection */
                parser = factory.createParser(data);
                while (!parser.isClosed()) {
                    JsonToken jsonToken = parser.nextToken();

                    IO.writeLine(jsonToken.toString());
                }
            } catch (IOException e) {
                IO.writeLine(e.getMessage());
            }
        }
    }
}
