/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE1071_Empty_Code_Block__semicolon_04.c
Label Definition File: CWE1071_Empty_Code_Block.label.xml
Template File: point-flaw-04.tmpl.c
*/
/*
 * @testsuite Juliet_Cpp_1.3
* @description
 * CWE: 1071 Empty Code Block
 * Sinks: semicolon
 *    GoodSink: Removed statement that has no effect
 *    BadSink : A statement that has no effect
 * Flow Variant: 04 Control flow: if(STATIC_CONST_TRUE) and if(STATIC_CONST_FALSE)
 *
 * */

#include "std_testcase.h"

/* The two variables below are declared "const", so a tool should
   be able to identify that reads of these will always return their
   initialized values. */
static const int STATIC_CONST_TRUE = 1; /* true */
static const int STATIC_CONST_FALSE = 0; /* false */

#ifndef OMITBAD

void CWE1071_Empty_Code_Block__semicolon_04_bad()
{
    if(STATIC_CONST_TRUE)
    {
        /* FLAW: the statement has no effect */
        ;
        printLine("Hello from bad()");
    }
}

#endif /* OMITBAD */

#ifndef OMITGOOD

/* good1() uses if(STATIC_CONST_FALSE) instead of if(STATIC_CONST_TRUE) */
static void good1()
{
    if(STATIC_CONST_FALSE)
    {
        /* INCIDENTAL: CWE 561 Dead Code, the code below will never run */
        printLine("Benign, fixed string");
    }
    else
    {
        /* FIX: Do not include a statement that has no effect */
        printLine("Hello from good()");
    }
}

/* good2() reverses the bodies in the if statement */
static void good2()
{
    if(STATIC_CONST_TRUE)
    {
        /* FIX: Do not include a statement that has no effect */
        printLine("Hello from good()");
    }
}

void CWE1071_Empty_Code_Block__semicolon_04_good()
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
    CWE1071_Empty_Code_Block__semicolon_04_good();
    printLine("Finished good()");
#endif /* OMITGOOD */
#ifndef OMITBAD
    printLine("Calling bad()...");
    CWE1071_Empty_Code_Block__semicolon_04_bad();
    printLine("Finished bad()");
#endif /* OMITBAD */
    return 0;
}

#endif
