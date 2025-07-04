/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE328_Reversible_One_Way_Hash__MD2_01.java
Label Definition File: CWE328_Reversible_One_Way_Hash.label.xml
Template File: point-flaw-01.tmpl.java
*/
/*
* @testsuite Juliet_Java_1.3
* @description
* CWE: 328 Reversible One Way Hash
* Sinks: MD2
*    GoodSink: SHA512
*    BadSink : MD2
* Flow Variant: 01 Baseline
*
* */

package testcases.CWE328_Reversible_One_Way_Hash;

import testcasesupport.*;

import java.security.MessageDigest;

public class CWE328_Reversible_One_Way_Hash__MD2_01 extends AbstractTestCase
{
    public void bad() throws Throwable
    {

        String input = "Test Input";

        /* FLAW: Insecure cryptographic hashing algorithm (MD2) */
        MessageDigest messageDigest = MessageDigest.getInstance("MD2");
        byte[] hashValue = messageDigest.digest(input.getBytes("UTF-8")); /* INCIDENTAL FLAW: Hard-coded input to hash algorithm */

        IO.writeLine(IO.toHex(hashValue));

    }

    public void good() throws Throwable
    {
        good1();
    }

    private void good1() throws Throwable
    {

        String input = "Test Input";

        /* FIX: Secure cryptographic hashing algorithm (SHA-512) */
        MessageDigest messageDigest = MessageDigest.getInstance("SHA-512");
        byte[] hashValue = messageDigest.digest(input.getBytes("UTF-8")); /* INCIDENTAL FLAW: Hard-coded input to hash algorithm */

        IO.writeLine(IO.toHex(hashValue));

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

