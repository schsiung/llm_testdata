/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE191_Integer_Underflow__char_fscanf_sub_22a.c
Label Definition File: CWE191_Integer_Underflow.label.xml
Template File: sources-sinks-22a.tmpl.c
*/
/*
 * @testsuite Juliet_Cpp_1.3
* @description
 * CWE: 191 Integer Underflow
 * BadSource: fscanf Read data from the console using fscanf()
 * GoodSource: Set data to a small, non-zero number (negative two)
 * Sinks: sub
 *    GoodSink: Ensure there will not be an underflow before subtracting 1 from data
 *    BadSink : Subtract 1 from data, which can cause an Underflow
 * Flow Variant: 22 Control flow: Flow controlled by value of a global variable. Sink functions are in a separate file from sources.
 *
 * */

#include "std_testcase.h"

#ifndef OMITBAD

/* The global variable below is used to drive control flow in the sink function */
int CWE191_Integer_Underflow__char_fscanf_sub_22_badGlobal = 0;

void CWE191_Integer_Underflow__char_fscanf_sub_22_badSink(char data);

void CWE191_Integer_Underflow__char_fscanf_sub_22_bad()
{
    char data;
    data = ' ';
    /* POTENTIAL FLAW: Use a value input from the console */
    fscanf (stdin, "%c", &data);
    CWE191_Integer_Underflow__char_fscanf_sub_22_badGlobal = 1; /* true */
    CWE191_Integer_Underflow__char_fscanf_sub_22_badSink(data);
}

#endif /* OMITBAD */

#ifndef OMITGOOD

/* The global variables below are used to drive control flow in the sink functions. */
int CWE191_Integer_Underflow__char_fscanf_sub_22_goodB2G1Global = 0;
int CWE191_Integer_Underflow__char_fscanf_sub_22_goodB2G2Global = 0;
int CWE191_Integer_Underflow__char_fscanf_sub_22_goodG2BGlobal = 0;

/* goodB2G1() - use badsource and goodsink by setting the static variable to false instead of true */
void CWE191_Integer_Underflow__char_fscanf_sub_22_goodB2G1Sink(char data);

static void goodB2G1()
{
    char data;
    data = ' ';
    /* POTENTIAL FLAW: Use a value input from the console */
    fscanf (stdin, "%c", &data);
    CWE191_Integer_Underflow__char_fscanf_sub_22_goodB2G1Global = 0; /* false */
    CWE191_Integer_Underflow__char_fscanf_sub_22_goodB2G1Sink(data);
}

/* goodB2G2() - use badsource and goodsink by reversing the blocks in the if in the sink function */
void CWE191_Integer_Underflow__char_fscanf_sub_22_goodB2G2Sink(char data);

static void goodB2G2()
{
    char data;
    data = ' ';
    /* POTENTIAL FLAW: Use a value input from the console */
    fscanf (stdin, "%c", &data);
    CWE191_Integer_Underflow__char_fscanf_sub_22_goodB2G2Global = 1; /* true */
    CWE191_Integer_Underflow__char_fscanf_sub_22_goodB2G2Sink(data);
}

/* goodG2B() - use goodsource and badsink */
void CWE191_Integer_Underflow__char_fscanf_sub_22_goodG2BSink(char data);

static void goodG2B()
{
    char data;
    data = ' ';
    /* FIX: Use a small, non-zero value that will not cause an underflow in the sinks */
    data = -2;
    CWE191_Integer_Underflow__char_fscanf_sub_22_goodG2BGlobal = 1; /* true */
    CWE191_Integer_Underflow__char_fscanf_sub_22_goodG2BSink(data);
}

void CWE191_Integer_Underflow__char_fscanf_sub_22_good()
{
    goodB2G1();
    goodB2G2();
    goodG2B();
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
    CWE191_Integer_Underflow__char_fscanf_sub_22_good();
    printLine("Finished good()");
#endif /* OMITGOOD */
#ifndef OMITBAD
    printLine("Calling bad()...");
    CWE191_Integer_Underflow__char_fscanf_sub_22_bad();
    printLine("Finished bad()");
#endif /* OMITBAD */
    return 0;
}

#endif
