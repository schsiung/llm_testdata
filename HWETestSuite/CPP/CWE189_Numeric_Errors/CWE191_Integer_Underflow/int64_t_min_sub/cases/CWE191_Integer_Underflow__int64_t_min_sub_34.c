/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE191_Integer_Underflow__int64_t_min_sub_34.c
Label Definition File: CWE191_Integer_Underflow.label.xml
Template File: sources-sinks-34.tmpl.c
*/
/*
 * @testsuite Juliet_Cpp_1.3
* @description
 * CWE: 191 Integer Underflow
 * BadSource: min Set data to the min value for int64_t
 * GoodSource: Set data to a small, non-zero number (negative two)
 * Sinks: sub
 *    GoodSink: Ensure there will not be an underflow before subtracting 1 from data
 *    BadSink : Subtract 1 from data, which can cause an Underflow
 * Flow Variant: 34 Data flow: use of a union containing two methods of accessing the same data (within the same function)
 *
 * */

#include "std_testcase.h"

typedef union
{
    int64_t unionFirst;
    int64_t unionSecond;
} CWE191_Integer_Underflow__int64_t_min_sub_34_unionType;

#ifndef OMITBAD

void CWE191_Integer_Underflow__int64_t_min_sub_34_bad()
{
    int64_t data;
    CWE191_Integer_Underflow__int64_t_min_sub_34_unionType myUnion;
    data = 0LL;
    /* POTENTIAL FLAW: Use the minimum size of the data type */
    data = LLONG_MIN;
    myUnion.unionFirst = data;
    {
        int64_t data = myUnion.unionSecond;
        {
            /* POTENTIAL FLAW: Subtracting 1 from data could cause an underflow */
            int64_t result = data - 1;
            printLongLongLine(result);
        }
    }
}

#endif /* OMITBAD */

#ifndef OMITGOOD

/* goodG2B() uses the GoodSource with the BadSink */
static void goodG2B()
{
    int64_t data;
    CWE191_Integer_Underflow__int64_t_min_sub_34_unionType myUnion;
    data = 0LL;
    /* FIX: Use a small, non-zero value that will not cause an underflow in the sinks */
    data = -2;
    myUnion.unionFirst = data;
    {
        int64_t data = myUnion.unionSecond;
        {
            /* POTENTIAL FLAW: Subtracting 1 from data could cause an underflow */
            int64_t result = data - 1;
            printLongLongLine(result);
        }
    }
}

/* goodB2G() uses the BadSource with the GoodSink */
static void goodB2G()
{
    int64_t data;
    CWE191_Integer_Underflow__int64_t_min_sub_34_unionType myUnion;
    data = 0LL;
    /* POTENTIAL FLAW: Use the minimum size of the data type */
    data = LLONG_MIN;
    myUnion.unionFirst = data;
    {
        int64_t data = myUnion.unionSecond;
        /* FIX: Add a check to prevent an underflow from occurring */
        if (data > LLONG_MIN)
        {
            int64_t result = data - 1;
            printLongLongLine(result);
        }
        else
        {
            printLine("data value is too large to perform subtraction.");
        }
    }
}

void CWE191_Integer_Underflow__int64_t_min_sub_34_good()
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
    CWE191_Integer_Underflow__int64_t_min_sub_34_good();
    printLine("Finished good()");
#endif /* OMITGOOD */
#ifndef OMITBAD
    printLine("Calling bad()...");
    CWE191_Integer_Underflow__int64_t_min_sub_34_bad();
    printLine("Finished bad()");
#endif /* OMITBAD */
    return 0;
}

#endif
