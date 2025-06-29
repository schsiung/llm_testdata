/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE1071_Empty_Code_Block__empty_for_15.c
Label Definition File: CWE1071_Empty_Code_Block.label.xml
Template File: point-flaw-15.tmpl.c
*/
/*
 * @testsuite Juliet_Cpp_1.3
* @description
 * CWE: 1071 Empty Code Block
 * Sinks: empty_for
 *    GoodSink: For statement contains code
 *    BadSink : An empty for statement has no effect
 * Flow Variant: 15 Control flow: switch(6)
 *
 * */

#include "std_testcase.h"

#ifndef OMITBAD

void CWE1071_Empty_Code_Block__empty_for_15_bad()
{
    switch(6)
    {
    case 6:
        /* FLAW: An empty for statement has no effect */
    {
        int i;
        for (i = 0; i < 10; i++)
        {
        }
    }
    printLine("Hello from bad()");
    break;
    default:
        /* INCIDENTAL: CWE 561 Dead Code, the code below will never run */
        printLine("Benign, fixed string");
        break;
    }
}

#endif /* OMITBAD */

#ifndef OMITGOOD

/* good1() changes the switch to switch(5) */
static void good1()
{
    switch(5)
    {
    case 6:
        /* INCIDENTAL: CWE 561 Dead Code, the code below will never run */
        printLine("Benign, fixed string");
        break;
    default:
        /* FIX: Do not include an empty for statement */
    {
        int i;
        for (i = 0; i < 10; i++)
        {
            printLine("Inside the for statement");
        }
    }
    printLine("Hello from good()");
    break;
    }
}

/* good2() reverses the blocks in the switch */
static void good2()
{
    switch(6)
    {
    case 6:
        /* FIX: Do not include an empty for statement */
    {
        int i;
        for (i = 0; i < 10; i++)
        {
            printLine("Inside the for statement");
        }
    }
    printLine("Hello from good()");
    break;
    default:
        /* INCIDENTAL: CWE 561 Dead Code, the code below will never run */
        printLine("Benign, fixed string");
        break;
    }
}

void CWE1071_Empty_Code_Block__empty_for_15_good()
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
    CWE1071_Empty_Code_Block__empty_for_15_good();
    printLine("Finished good()");
#endif /* OMITGOOD */
#ifndef OMITBAD
    printLine("Calling bad()...");
    CWE1071_Empty_Code_Block__empty_for_15_bad();
    printLine("Finished bad()");
#endif /* OMITBAD */
    return 0;
}

#endif
