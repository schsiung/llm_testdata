/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE563_Unused_Variable__unused_uninit_variable_int64_t_14.c
Label Definition File: CWE563_Unused_Variable__unused_uninit_variable.label.xml
Template File: source-sinks-14.tmpl.c
*/
/*
 * @testsuite Juliet_Cpp_1.3
* @description
 * CWE: 563 Unused Variable
 * BadSource:  Initialize data
 * Sinks:
 *    GoodSink: Initialize, then use data
 *    BadSink : Do nothing
 * Flow Variant: 14 Control flow: if(globalFive==5) and if(globalFive!=5)
 *
 * */

#include "std_testcase.h"

#include <wchar.h>

#ifndef OMITBAD

void CWE563_Unused_Variable__unused_uninit_variable_int64_t_14_bad()
{
    int64_t data;
    /* POTENTIAL FLAW: Do not initialize or use data */
    ; /* empty statement needed for some flow variants */
    if(globalFive==5)
    {
        /* FLAW: Do not use the variable */
        /* do nothing */
        ; /* empty statement needed for some flow variants */
    }
}

#endif /* OMITBAD */

#ifndef OMITGOOD

/* goodB2G1() - use badsource and goodsink by changing globalFive==5 to globalFive!=5 */
static void goodB2G1()
{
    int64_t data;
    /* POTENTIAL FLAW: Do not initialize or use data */
    ; /* empty statement needed for some flow variants */
    if(globalFive!=5)
    {
        /* INCIDENTAL: CWE 561 Dead Code, the code below will never run */
        printLine("Benign, fixed string");
    }
    else
    {
        /* FIX: Initialize then use data */
        data = 5LL;
        printLongLongLine(data);
    }
}

/* goodB2G2() - use badsource and goodsink by reversing statements in if  */
static void goodB2G2()
{
    int64_t data;
    /* POTENTIAL FLAW: Do not initialize or use data */
    ; /* empty statement needed for some flow variants */
    if(globalFive==5)
    {
        /* FIX: Initialize then use data */
        data = 5LL;
        printLongLongLine(data);
    }
}

void CWE563_Unused_Variable__unused_uninit_variable_int64_t_14_good()
{
    goodB2G1();
    goodB2G2();
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
    CWE563_Unused_Variable__unused_uninit_variable_int64_t_14_good();
    printLine("Finished good()");
#endif /* OMITGOOD */
#ifndef OMITBAD
    printLine("Calling bad()...");
    CWE563_Unused_Variable__unused_uninit_variable_int64_t_14_bad();
    printLine("Finished bad()");
#endif /* OMITBAD */
    return 0;
}

#endif
