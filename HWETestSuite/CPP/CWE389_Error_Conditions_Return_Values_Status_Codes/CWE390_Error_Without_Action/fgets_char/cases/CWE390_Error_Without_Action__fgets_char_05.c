/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE390_Error_Without_Action__fgets_char_05.c
Label Definition File: CWE390_Error_Without_Action__fgets.label.xml
Template File: point-flaw-05.tmpl.c
*/
/*
 * @testsuite Juliet_Cpp_1.3
* @description
 * CWE: 390 Detection of Error Condition Without Action
 * Sinks:
 *    GoodSink: Check if fgets() failed and handle errors properly
 *    BadSink : Check to see if fgets() failed, but do nothing about it
 * Flow Variant: 05 Control flow: if(staticTrue) and if(staticFalse)
 *
 * */

#include "std_testcase.h"

/* The two variables below are not defined as "const", but are never
   assigned any other value, so a tool should be able to identify that
   reads of these will always return their initialized values. */
static int staticTrue = 1; /* true */
static int staticFalse = 0; /* false */

#ifndef OMITBAD

void CWE390_Error_Without_Action__fgets_char_05_bad()
{
    if(staticTrue)
    {
        {
            /* By initializing dataBuffer, we ensure this will not be the
             * CWE 690 (Unchecked Return Value To NULL Pointer) flaw for fgets() */
            char dataBuffer[100] = "";
            char * data = dataBuffer;
            printLine("Please enter a string: ");
            /* FLAW: check the return value, but do nothing if there is an error */
            if (fgets(data, 100, stdin) == NULL)
            {
                /* do nothing */
            }
            printLine(data);
        }
    }
}

#endif /* OMITBAD */

#ifndef OMITGOOD

/* good1() uses if(staticFalse) instead of if(staticTrue) */
static void good1()
{
    if(staticFalse)
    {
        /* INCIDENTAL: CWE 561 Dead Code, the code below will never run */
        printLine("Benign, fixed string");
    }
    else
    {
        {
            /* By initializing dataBuffer, we ensure this will not be the
             * CWE 690 (Unchecked Return Value To NULL Pointer) flaw for fgets() */
            char dataBuffer[100] = "";
            char * data = dataBuffer;
            printLine("Please enter a string: ");
            /* FIX: check the return value and handle errors properly */
            if (fgets(data, 100, stdin) == NULL)
            {
                printLine("fgets failed!");
                exit(1);
            }
            printLine(data);
        }
    }
}

/* good2() reverses the bodies in the if statement */
static void good2()
{
    if(staticTrue)
    {
        {
            /* By initializing dataBuffer, we ensure this will not be the
             * CWE 690 (Unchecked Return Value To NULL Pointer) flaw for fgets() */
            char dataBuffer[100] = "";
            char * data = dataBuffer;
            printLine("Please enter a string: ");
            /* FIX: check the return value and handle errors properly */
            if (fgets(data, 100, stdin) == NULL)
            {
                printLine("fgets failed!");
                exit(1);
            }
            printLine(data);
        }
    }
}

void CWE390_Error_Without_Action__fgets_char_05_good()
{
    good1();
    good2();
}

#endif /* OMITGOOD */

/* Below is the main(). It is only used when building this testcase on
   its own for testing or for building a binary to use in testing binary
   analysis tools. It is not used when compiling all the testcases as one
   application, which is how source code analysis tools are tested. */

#ifdef INCLUDEMAIN

int main(int argc, char * argv[])
{
    /* seed randomness */
    srand( (unsigned)time(NULL) );
#ifndef OMITGOOD
    printLine("Calling good()...");
    CWE390_Error_Without_Action__fgets_char_05_good();
    printLine("Finished good()");
#endif /* OMITGOOD */
#ifndef OMITBAD
    printLine("Calling bad()...");
    CWE390_Error_Without_Action__fgets_char_05_bad();
    printLine("Finished bad()");
#endif /* OMITBAD */
    return 0;
}

#endif
