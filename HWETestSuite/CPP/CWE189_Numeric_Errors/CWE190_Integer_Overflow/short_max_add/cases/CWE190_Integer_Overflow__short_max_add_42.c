/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE190_Integer_Overflow__short_max_add_42.c
Label Definition File: CWE190_Integer_Overflow.label.xml
Template File: sources-sinks-42.tmpl.c
*/
/*
 * @testsuite Juliet_Cpp_1.3
* @description
 * CWE: 190 Integer Overflow
 * BadSource: max Set data to the max value for short
 * GoodSource: Set data to a small, non-zero number (two)
 * Sinks: add
 *    GoodSink: Ensure there will not be an overflow before adding 1 to data
 *    BadSink : Add 1 to data, which can cause an overflow
 * Flow Variant: 42 Data flow: data returned from one function to another in the same source file
 *
 * */

#include "std_testcase.h"

#ifndef OMITBAD

static short badSource(short data)
{
    /* POTENTIAL FLAW: Use the maximum size of the data type */
    data = SHRT_MAX;
    return data;
}

void CWE190_Integer_Overflow__short_max_add_42_bad()
{
    short data;
    data = 0;
    data = badSource(data);
    {
        /* POTENTIAL FLAW: Adding 1 to data could cause an overflow */
        short result = data + 1;
        printIntLine(result);
    }
}

#endif /* OMITBAD */

#ifndef OMITGOOD

/* goodG2B uses the GoodSource with the BadSink */
static short goodG2BSource(short data)
{
    /* FIX: Use a small, non-zero value that will not cause an overflow in the sinks */
    data = 2;
    return data;
}

static void goodG2B()
{
    short data;
    data = 0;
    data = goodG2BSource(data);
    {
        /* POTENTIAL FLAW: Adding 1 to data could cause an overflow */
        short result = data + 1;
        printIntLine(result);
    }
}

/* goodB2G uses the BadSource with the GoodSink */
static short goodB2GSource(short data)
{
    /* POTENTIAL FLAW: Use the maximum size of the data type */
    data = SHRT_MAX;
    return data;
}

static void goodB2G()
{
    short data;
    data = 0;
    data = goodB2GSource(data);
    /* FIX: Add a check to prevent an overflow from occurring */
    if (data < SHRT_MAX)
    {
        short result = data + 1;
        printIntLine(result);
    }
    else
    {
        printLine("data value is too large to perform arithmetic safely.");
    }
}

void CWE190_Integer_Overflow__short_max_add_42_good()
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
    CWE190_Integer_Overflow__short_max_add_42_good();
    printLine("Finished good()");
#endif /* OMITGOOD */
#ifndef OMITBAD
    printLine("Calling bad()...");
    CWE190_Integer_Overflow__short_max_add_42_bad();
    printLine("Finished bad()");
#endif /* OMITBAD */
    return 0;
}

#endif
