/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE1071_Empty_Code_Block__empty_for_14.c
Label Definition File: CWE1071_Empty_Code_Block.label.xml
Template File: point-flaw-14.tmpl.c
*/
/*
 * @testsuite Juliet_Cpp_1.3
* @description
 * CWE: 1071 Empty Code Block
 * Sinks: empty_for
 *    GoodSink: For statement contains code
 *    BadSink : An empty for statement has no effect
 * Flow Variant: 14 Control flow: if(globalFive==5) and if(globalFive!=5)
 *
 * */

#include "std_testcase.h"

#ifndef OMITBAD

void CWE1071_Empty_Code_Block__empty_for_14_bad()
{
    if(globalFive==5)
    {
        /* FLAW: An empty for statement has no effect */
        {
            int i;
            for (i = 0; i < 10; i++)
            {
            }
        }
        printLine("Hello from bad()");
    }
}

#endif /* OMITBAD */

#ifndef OMITGOOD

/* good1() uses if(globalFive!=5) instead of if(globalFive==5) */
static void good1()
{
    if(globalFive!=5)
    {
        /* INCIDENTAL: CWE 561 Dead Code, the code below will never run */
        printLine("Benign, fixed string");
    }
    else
    {
        /* FIX: Do not include an empty for statement */
        {
            int i;
            for (i = 0; i < 10; i++)
            {
                printLine("Inside the for statement");
            }
        }
        printLine("Hello from good()");
    }
}

/* good2() reverses the bodies in the if statement */
static void good2()
{
    if(globalFive==5)
    {
        /* FIX: Do not include an empty for statement */
        {
            int i;
            for (i = 0; i < 10; i++)
            {
                printLine("Inside the for statement");
            }
        }
        printLine("Hello from good()");
    }
}

void CWE1071_Empty_Code_Block__empty_for_14_good()
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
    CWE1071_Empty_Code_Block__empty_for_14_good();
    printLine("Finished good()");
#endif /* OMITGOOD */
#ifndef OMITBAD
    printLine("Calling bad()...");
    CWE1071_Empty_Code_Block__empty_for_14_bad();
    printLine("Finished bad()");
#endif /* OMITBAD */
    return 0;
}

#endif
