/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE191_Integer_Underflow__int64_t_rand_predec_42.c
Label Definition File: CWE191_Integer_Underflow.label.xml
Template File: sources-sinks-42.tmpl.c
*/
/*
 * @testsuite Juliet_Cpp_1.3
* @description
 * CWE: 191 Integer Underflow
 * BadSource: rand Set data to result of rand()
 * GoodSource: Set data to a small, non-zero number (negative two)
 * Sinks: decrement
 *    GoodSink: Ensure there will not be an underflow before decrementing data
 *    BadSink : Decrement data, which can cause an Underflow
 * Flow Variant: 42 Data flow: data returned from one function to another in the same source file
 *
 * */

#include "std_testcase.h"

#ifndef OMITBAD

static int64_t badSource(int64_t data)
{
    /* POTENTIAL FLAW: Use a random value */
    data = (int64_t)RAND64();
    return data;
}

void CWE191_Integer_Underflow__int64_t_rand_predec_42_bad()
{
    int64_t data;
    data = 0LL;
    data = badSource(data);
    {
        /* POTENTIAL FLAW: Decrementing data could cause an underflow */
        --data;
        int64_t result = data;
        printLongLongLine(result);
    }
}

#endif /* OMITBAD */

#ifndef OMITGOOD

/* goodG2B uses the GoodSource with the BadSink */
static int64_t goodG2BSource(int64_t data)
{
    /* FIX: Use a small, non-zero value that will not cause an underflow in the sinks */
    data = -2;
    return data;
}

static void goodG2B()
{
    int64_t data;
    data = 0LL;
    data = goodG2BSource(data);
    {
        /* POTENTIAL FLAW: Decrementing data could cause an underflow */
        --data;
        int64_t result = data;
        printLongLongLine(result);
    }
}

/* goodB2G uses the BadSource with the GoodSink */
static int64_t goodB2GSource(int64_t data)
{
    /* POTENTIAL FLAW: Use a random value */
    data = (int64_t)RAND64();
    return data;
}

static void goodB2G()
{
    int64_t data;
    data = 0LL;
    data = goodB2GSource(data);
    /* FIX: Add a check to prevent an underflow from occurring */
    if (data > LLONG_MIN)
    {
        --data;
        int64_t result = data;
        printLongLongLine(result);
    }
    else
    {
        printLine("data value is too large to perform arithmetic safely.");
    }
}

void CWE191_Integer_Underflow__int64_t_rand_predec_42_good()
{
    goodB2G();
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
    CWE191_Integer_Underflow__int64_t_rand_predec_42_good();
    printLine("Finished good()");
#endif /* OMITGOOD */
#ifndef OMITBAD
    printLine("Calling bad()...");
    CWE191_Integer_Underflow__int64_t_rand_predec_42_bad();
    printLine("Finished bad()");
#endif /* OMITBAD */
    return 0;
}

#endif
