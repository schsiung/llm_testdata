/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE1071_Empty_Code_Block__empty_else_07.c
Label Definition File: CWE1071_Empty_Code_Block.label.xml
Template File: point-flaw-07.tmpl.c
*/
/*
 * @testsuite Juliet_Cpp_1.3
* @description
 * CWE: 1071 Empty Code Block
 * Sinks: empty_else
 *    GoodSink: Else statement contains code
 *    BadSink : An empty else statement has no effect
 * Flow Variant: 07 Control flow: if(staticFive==5) and if(staticFive!=5)
 *
 * */

#include "std_testcase.h"

/* The variable below is not declared "const", but is never assigned
   any other value so a tool should be able to identify that reads of
   this will always give its initialized value. */
static int staticFive = 5;

#ifndef OMITBAD

void CWE1071_Empty_Code_Block__empty_else_07_bad()
{
    if(staticFive==5)
    {
        /* FLAW: An empty else statement has no effect */
        {
            int x;
            x = (rand() % 3);
            if (x == 0)
            {
                printLine("Inside the else statement");
            }
            else
            {
            }
        }
        printLine("Hello from bad()");
    }
}

#endif /* OMITBAD */

#ifndef OMITGOOD

/* good1() uses if(staticFive!=5) instead of if(staticFive==5) */
static void good1()
{
    if(staticFive!=5)
    {
        /* INCIDENTAL: CWE 561 Dead Code, the code below will never run */
        printLine("Benign, fixed string");
    }
    else
    {
        /* FIX: Do not include an empty else statement */
        {
            int x;
            x = (rand() % 3);
            if (x == 0)
            {
                printLine("Inside the if statement");
            }
            else
            {
                printLine("Inside the else statement");
            }
        }
        printLine("Hello from good()");
    }
}

/* good2() reverses the bodies in the if statement */
static void good2()
{
    if(staticFive==5)
    {
        /* FIX: Do not include an empty else statement */
        {
            int x;
            x = (rand() % 3);
            if (x == 0)
            {
                printLine("Inside the if statement");
            }
            else
            {
                printLine("Inside the else statement");
            }
        }
        printLine("Hello from good()");
    }
}

void CWE1071_Empty_Code_Block__empty_else_07_good()
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
    CWE1071_Empty_Code_Block__empty_else_07_good();
    printLine("Finished good()");
#endif /* OMITGOOD */
#ifndef OMITBAD
    printLine("Calling bad()...");
    CWE1071_Empty_Code_Block__empty_else_07_bad();
    printLine("Finished bad()");
#endif /* OMITBAD */
    return 0;
}

#endif
