/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE1071_Empty_Code_Block__addition_13.c
Label Definition File: CWE1071_Empty_Code_Block.label.xml
Template File: point-flaw-13.tmpl.c
*/
/*
 * @testsuite Juliet_Cpp_1.3
* @description
 * CWE: 1071 Empty Code Block
 * Sinks: addition
 *    GoodSink: Adding two ints and storing the result
 *    BadSink : Adding two ints but not storing the result has no effect
 * Flow Variant: 13 Control flow: if(GLOBAL_CONST_FIVE==5) and if(GLOBAL_CONST_FIVE!=5)
 *
 * */

#include "std_testcase.h"

#ifndef OMITBAD

void CWE1071_Empty_Code_Block__addition_13_bad()
{
    if(GLOBAL_CONST_FIVE==5)
    {
        {
            int intOne = 1, intTwo = 1, intSum = 0;
            printIntLine(intSum);
            /* FLAW: the statement has no effect */
            intOne + intTwo; /* This generates a compiler warning, but we expect it to */
            printIntLine(intSum);
        }
    }
}

#endif /* OMITBAD */

#ifndef OMITGOOD

/* good1() uses if(GLOBAL_CONST_FIVE!=5) instead of if(GLOBAL_CONST_FIVE==5) */
static void good1()
{
    if(GLOBAL_CONST_FIVE!=5)
    {
        /* INCIDENTAL: CWE 561 Dead Code, the code below will never run */
        printLine("Benign, fixed string");
    }
    else
    {
        {
            int intOne = 1, intTwo = 1, intSum = 0;
            printIntLine(intSum);
            /* FIX: Do not include a statement that has no effect */
            intSum = intOne + intTwo;
            printIntLine(intSum);
        }
    }
}

/* good2() reverses the bodies in the if statement */
static void good2()
{
    if(GLOBAL_CONST_FIVE==5)
    {
        {
            int intOne = 1, intTwo = 1, intSum = 0;
            printIntLine(intSum);
            /* FIX: Do not include a statement that has no effect */
            intSum = intOne + intTwo;
            printIntLine(intSum);
        }
    }
}

void CWE1071_Empty_Code_Block__addition_13_good()
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
    CWE1071_Empty_Code_Block__addition_13_good();
    printLine("Finished good()");
#endif /* OMITGOOD */
#ifndef OMITBAD
    printLine("Calling bad()...");
    CWE1071_Empty_Code_Block__addition_13_bad();
    printLine("Finished bad()");
#endif /* OMITBAD */
    return 0;
}

#endif
