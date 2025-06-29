/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE127_Buffer_Underread__CWE839_fscanf_22a.c
Label Definition File: CWE127_Buffer_Underread__CWE839.label.xml
Template File: sources-sinks-22a.tmpl.c
*/
/*
 * @testsuite Juliet_Cpp_1.3
* @description
 * CWE: 127 Buffer Underread
 * BadSource: fscanf Read data from the console using fscanf()
 * GoodSource: Non-negative but less than 10
 * Sinks:
 *    GoodSink: Ensure the array index is valid
 *    BadSink : Improperly check the array index by not checking to see if the value is negative
 * Flow Variant: 22 Control flow: Flow controlled by value of a global variable. Sink functions are in a separate file from sources.
 *
 * */

#include "std_testcase.h"

#ifndef OMITBAD

/* The global variable below is used to drive control flow in the sink function */
int CWE127_Buffer_Underread__CWE839_fscanf_22_badGlobal = 0;

void CWE127_Buffer_Underread__CWE839_fscanf_22_badSink(int data);

void CWE127_Buffer_Underread__CWE839_fscanf_22_bad()
{
    int data;
    /* Initialize data */
    data = -1;
    /* POTENTIAL FLAW: Read data from the console using fscanf() */
    fscanf(stdin, "%d", &data);
    CWE127_Buffer_Underread__CWE839_fscanf_22_badGlobal = 1; /* true */
    CWE127_Buffer_Underread__CWE839_fscanf_22_badSink(data);
}

#endif /* OMITBAD */

#ifndef OMITGOOD

/* The global variables below are used to drive control flow in the sink functions. */
int CWE127_Buffer_Underread__CWE839_fscanf_22_goodB2G1Global = 0;
int CWE127_Buffer_Underread__CWE839_fscanf_22_goodB2G2Global = 0;
int CWE127_Buffer_Underread__CWE839_fscanf_22_goodG2BGlobal = 0;

/* goodB2G1() - use badsource and goodsink by setting the static variable to false instead of true */
void CWE127_Buffer_Underread__CWE839_fscanf_22_goodB2G1Sink(int data);

static void goodB2G1()
{
    int data;
    /* Initialize data */
    data = -1;
    /* POTENTIAL FLAW: Read data from the console using fscanf() */
    fscanf(stdin, "%d", &data);
    CWE127_Buffer_Underread__CWE839_fscanf_22_goodB2G1Global = 0; /* false */
    CWE127_Buffer_Underread__CWE839_fscanf_22_goodB2G1Sink(data);
}

/* goodB2G2() - use badsource and goodsink by reversing the blocks in the if in the sink function */
void CWE127_Buffer_Underread__CWE839_fscanf_22_goodB2G2Sink(int data);

static void goodB2G2()
{
    int data;
    /* Initialize data */
    data = -1;
    /* POTENTIAL FLAW: Read data from the console using fscanf() */
    fscanf(stdin, "%d", &data);
    CWE127_Buffer_Underread__CWE839_fscanf_22_goodB2G2Global = 1; /* true */
    CWE127_Buffer_Underread__CWE839_fscanf_22_goodB2G2Sink(data);
}

/* goodG2B() - use goodsource and badsink */
void CWE127_Buffer_Underread__CWE839_fscanf_22_goodG2BSink(int data);

static void goodG2B()
{
    int data;
    /* Initialize data */
    data = -1;
    /* FIX: Use a value greater than 0, but less than 10 to avoid attempting to
     * access an index of the array in the sink that is out-of-bounds */
    data = 7;
    CWE127_Buffer_Underread__CWE839_fscanf_22_goodG2BGlobal = 1; /* true */
    CWE127_Buffer_Underread__CWE839_fscanf_22_goodG2BSink(data);
}

void CWE127_Buffer_Underread__CWE839_fscanf_22_good()
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
    CWE127_Buffer_Underread__CWE839_fscanf_22_good();
    printLine("Finished good()");
#endif /* OMITGOOD */
#ifndef OMITBAD
    printLine("Calling bad()...");
    CWE127_Buffer_Underread__CWE839_fscanf_22_bad();
    printLine("Finished bad()");
#endif /* OMITBAD */
    return 0;
}

#endif
