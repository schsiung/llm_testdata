/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE190_Integer_Overflow__unsigned_int_max_add_68a.c
Label Definition File: CWE190_Integer_Overflow.label.xml
Template File: sources-sinks-68a.tmpl.c
*/
/*
 * @testsuite Juliet_Cpp_1.3
* @description
 * CWE: 190 Integer Overflow
 * BadSource: max Set data to the max value for unsigned int
 * GoodSource: Set data to a small, non-zero number (two)
 * Sinks: add
 *    GoodSink: Ensure there will not be an overflow before adding 1 to data
 *    BadSink : Add 1 to data, which can cause an overflow
 * Flow Variant: 68 Data flow: data passed as a global variable from one function to another in different source files
 *
 * */

#include "std_testcase.h"

unsigned int CWE190_Integer_Overflow__unsigned_int_max_add_68_badData;
unsigned int CWE190_Integer_Overflow__unsigned_int_max_add_68_goodG2BData;
unsigned int CWE190_Integer_Overflow__unsigned_int_max_add_68_goodB2GData;

#ifndef OMITBAD

/* bad function declaration */
void CWE190_Integer_Overflow__unsigned_int_max_add_68b_badSink();

void CWE190_Integer_Overflow__unsigned_int_max_add_68_bad()
{
    unsigned int data;
    data = 0;
    /* POTENTIAL FLAW: Use the maximum size of the data type */
    data = UINT_MAX;
    CWE190_Integer_Overflow__unsigned_int_max_add_68_badData = data;
    CWE190_Integer_Overflow__unsigned_int_max_add_68b_badSink();
}

#endif /* OMITBAD */

#ifndef OMITGOOD

/* good function declarations */
void CWE190_Integer_Overflow__unsigned_int_max_add_68b_goodG2BSink();
void CWE190_Integer_Overflow__unsigned_int_max_add_68b_goodB2GSink();

/* goodG2B uses the GoodSource with the BadSink */
static void goodG2B()
{
    unsigned int data;
    data = 0;
    /* FIX: Use a small, non-zero value that will not cause an overflow in the sinks */
    data = 2;
    CWE190_Integer_Overflow__unsigned_int_max_add_68_goodG2BData = data;
    CWE190_Integer_Overflow__unsigned_int_max_add_68b_goodG2BSink();
}

/* goodB2G uses the BadSource with the GoodSink */
static void goodB2G()
{
    unsigned int data;
    data = 0;
    /* POTENTIAL FLAW: Use the maximum size of the data type */
    data = UINT_MAX;
    CWE190_Integer_Overflow__unsigned_int_max_add_68_goodB2GData = data;
    CWE190_Integer_Overflow__unsigned_int_max_add_68b_goodB2GSink();
}

void CWE190_Integer_Overflow__unsigned_int_max_add_68_good()
{
    goodG2B();
    goodB2G();
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
    CWE190_Integer_Overflow__unsigned_int_max_add_68_good();
    printLine("Finished good()");
#endif /* OMITGOOD */
#ifndef OMITBAD
    printLine("Calling bad()...");
    CWE190_Integer_Overflow__unsigned_int_max_add_68_bad();
    printLine("Finished bad()");
#endif /* OMITBAD */
    return 0;
}

#endif
