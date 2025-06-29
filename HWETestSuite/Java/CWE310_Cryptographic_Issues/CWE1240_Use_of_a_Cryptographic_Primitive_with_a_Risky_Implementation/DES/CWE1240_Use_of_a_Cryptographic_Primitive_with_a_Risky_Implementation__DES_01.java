/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE1240_Use_of_a_Cryptographic_Primitive_with_a_Risky_Implementation__DES_01.java
Label Definition File: CWE1240_Use_of_a_Cryptographic_Primitive_with_a_Risky_Implementation.label.xml
Template File: point-flaw-01.tmpl.java
*/
/*
* @testsuite Juliet_Java_1.3
* @description
* CWE: 1240 Use of a Cryptographic Primitive with a Risky Implementation
* Sinks: DES
*    GoodSink: use AES
*    BadSink : use DES
* Flow Variant: 01 Baseline
*
* */

package testcases.CWE1240_Use_of_a_Cryptographic_Primitive_with_a_Risky_Implementation;

import testcasesupport.*;

import javax.crypto.Cipher;
import javax.crypto.KeyGenerator;
import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;

public class CWE1240_Use_of_a_Cryptographic_Primitive_with_a_Risky_Implementation__DES_01 extends AbstractTestCase
{
    public void bad() throws Throwable
    {

        final String CIPHER_INPUT = "ABCDEFG123456";

        KeyGenerator keyGenerator = KeyGenerator.getInstance("DES");

        /* Perform initialization of KeyGenerator */
        keyGenerator.init(56);

        SecretKey secretKey = keyGenerator.generateKey();
        byte[] byteKey = secretKey.getEncoded();

        /* FLAW: Use a weak crypto algorithm, DES */
        SecretKeySpec secretKeySpec = new SecretKeySpec(byteKey, "DES");

        Cipher desCipher = Cipher.getInstance("DES");
        desCipher.init(Cipher.ENCRYPT_MODE, secretKeySpec);

        byte[] encrypted = desCipher.doFinal(CIPHER_INPUT.getBytes("UTF-8"));

        IO.writeLine(IO.toHex(encrypted));

    }

    public void good() throws Throwable
    {
        good1();
    }

    private void good1() throws Throwable
    {

        final String CIPHER_INPUT = "ABCDEFG123456";

        KeyGenerator keyGenerator = KeyGenerator.getInstance("AES");

        /* Perform initialization of KeyGenerator */
        keyGenerator.init(128);

        SecretKey secretKey = keyGenerator.generateKey();
        byte[] byteKey = secretKey.getEncoded();

        /* FIX: Use a stronger crypto algorithm, AES */
        SecretKeySpec secretKeySpec = new SecretKeySpec(byteKey, "AES");

        Cipher aesCipher = Cipher.getInstance("AES");
        aesCipher.init(Cipher.ENCRYPT_MODE, secretKeySpec);

        byte[] encrypted = aesCipher.doFinal(CIPHER_INPUT.getBytes("UTF-8"));

        IO.writeLine(IO.toHex(encrypted));

    }

    /* Below is the main(). It is only used when building this testcase on
     * its own for testing or for building a binary to use in testing binary
     * analysis tools. It is not used when compiling all the testcases as one
     * application, which is how source code analysis tools are tested.
     */
    public static void main(String[] args) throws ClassNotFoundException,
           InstantiationException, IllegalAccessException
    {
        mainFromParent(args);
    }
}

