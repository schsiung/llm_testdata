/*
 * @testsuite Juliet_Java_1.3
* @description statement always evaluates to false
 * 
 * */
package testcases.CWE570_Expression_Always_False;

import testcasesupport.AbstractTestCase;
import testcasesupport.IO;

public class CWE570_Expression_Always_False__false_01 extends AbstractTestCase 
{
    public void bad()
    {
        /* FLAW: always evaluates to false */
        if (false)
        {
            IO.writeLine("never prints");
        }
    }
    
    public void good()
    {
        good1();
    }
    
    private void good1()
    {
        /* FIX: may evaluate to true or false */
        if( IO.staticReturnsTrueOrFalse() )
        {
            IO.writeLine("sometimes prints");
        }
    }

    /* Below is the main(). It is only used when building this testcase on 
     * its own for testing or for building a binary to use in testing binary 
     * analysis tools. It is not used when compiling all the testcases as one 
     * application, which is how source code analysis tools are tested. 
	 */ 
    public static void main(String[] args) 
            throws ClassNotFoundException, InstantiationException, IllegalAccessException 
    {
        mainFromParent(args);
    }
}
