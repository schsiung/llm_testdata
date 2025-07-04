/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE191_Integer_Underflow__short_rand_multiply_61a.c
Label Definition File: CWE191_Integer_Underflow.label.xml
Template File: sources-sinks-61a.tmpl.c
*/
/*
 * @testsuite Juliet_Cpp_1.3
* @description
 * CWE: 191 Integer Underflow
 * BadSource: rand Set data to result of rand()
 * GoodSource: Set data to a small, non-zero number (negative two)
 * Sinks: multiply
 *    GoodSink: Ensure there will not be an underflow before multiplying data by 2
 *    BadSink : If data is negative, multiply by 2, which can cause an underflow
 * Flow Variant: 61 Data flow: data returned from one function to another in different source files
 *
 * */

#include "std_testcase.h"

#ifndef OMITBAD

/* bad function declaration */
short CWE191_Integer_Underflow__short_rand_multiply_61b_badSource(short data);

void CWE191_Integer_Underflow__short_rand_multiply_61_bad()
{
    short data;
    data = 0;
    data = CWE191_Integer_Underflow__short_rand_multiply_61b_badSource(data);
    if(data < 0) /* ensure we won't have an overflow */
    {
        /* POTENTIAL FLAW: if (data * 2) < SHRT_MIN, this will underflow */
        short result = data * 2;
        printIntLine(result);
    }
}

#endif /* OMITBAD */

#ifndef OMITGOOD

/* goodG2B uses the GoodSource with the BadSink */
short CWE191_Integer_Underflow__short_rand_multiply_61b_goodG2BSource(short data);

static void goodG2B()
{
    short data;
    data = 0;
    data = CWE191_Integer_Underflow__short_rand_multiply_61b_goodG2BSource(data);
    if(data < 0) /* ensure we won't have an overflow */
    {
        /* POTENTIAL FLAW: if (data * 2) < SHRT_MIN, this will underflow */
        short result = data * 2;
        printIntLine(result);
    }
}

/* goodB2G uses the BadSource with the GoodSink */
short CWE191_Integer_Underflow__short_rand_multiply_61b_goodB2GSource(short data);

static void goodB2G()
{
    short data;
    data = 0;
    data = CWE191_Integer_Underflow__short_rand_multiply_61b_goodB2GSource(data);
    if(data < 0) /* ensure we won't have an overflow */
    {
        /* FIX: Add a check to prevent an underflow from occurring */
        if (data > (SHRT_MIN/2))
        {
            short result = data * 2;
            printIntLine(result);
        }
        else
        {
            printLine("data value is too small to perform multiplication.");
        }
    }
}

void CWE191_Integer_Underflow__short_rand_multiply_61_good()
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
    CWE191_Integer_Underflow__short_rand_multiply_61_good();
    printLine("Finished good()");
#endif /* OMITGOOD */
#ifndef OMITBAD
    printLine("Calling bad()...");
    CWE191_Integer_Underflow__short_rand_multiply_61_bad();
    printLine("Finished bad()");
#endif /* OMITBAD */
    return 0;
}

#endif
