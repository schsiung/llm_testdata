/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE20_Improper_Input_Validation.servlet_cookie;

import testcasesupport.IO;

import javax.crypto.SecretKey;
import javax.crypto.SecretKeyFactory;
import javax.crypto.spec.PBEKeySpec;
import javax.crypto.spec.SecretKeySpec;
import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.FileInputStream;
import java.io.IOException;
import java.security.NoSuchAlgorithmException;
import java.security.spec.InvalidKeySpecException;
import java.util.Properties;

/*
 * @description Servlet最简单的通过HttpServletRequest、HttpServletResponse入参传递污染数据。
 *
 * @cwe 320
 * @bad doGet
 * @tool fortify: Weak Encryption: User-Controlled Key Size;secbrella: SecS_Weak_Encryption/SecJ_Weak_Encryption_Insufficient_Key_Size
 * @author 董镇山 d00305016
 */
public class CWE320_Weak_Encryption_User_Controlled_Key_Size_servlet__servlet_cookie_SecretKeySpec_servlet_01 extends HttpServlet {


    @Override
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request, response);
    }

    @Override
    public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String data;

        data = ""; /* Initialize data */

        /* Read data from cookies */
        {
            Cookie cookieSources[] = request.getCookies();
            if (cookieSources != null) {
                data = cookieSources[0].getValue();
            }
        }


        String password = "";
        Properties prop = new Properties();
        try {
            prop.load(new FileInputStream("config.properties"));
            String keySize = prop.getProperty("keySize");
            PBEKeySpec spec = new PBEKeySpec(password.toCharArray(), new byte[10], 1, Integer.parseInt(keySize));
            SecretKeyFactory factory = SecretKeyFactory.getInstance("AES");
            SecretKey secretKey = factory.generateSecret(spec);

            /* POTENTIAL FLAW: Weak Encryption User Controlled Key Size。*/
            SecretKeySpec secret = new SecretKeySpec(secretKey.getEncoded(), 0, Integer.parseInt(data), "AES");
        } catch (IOException e) {
            IO.writeLine(e.getMessage());
        } catch (NoSuchAlgorithmException e) {
            IO.writeLine(e.getMessage());
        } catch (InvalidKeySpecException e) {
            IO.writeLine(e.getMessage());
        }

    }
}

