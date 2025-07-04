/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE190_Integer_Overflow__int64_t_max_multiply_84_goodB2G.cpp
Label Definition File: CWE190_Integer_Overflow.label.xml
Template File: sources-sinks-84_goodB2G.tmpl.cpp
*/
/*
 * @testsuite Juliet_Cpp_1.3
* @description
 * CWE: 190 Integer Overflow
 * BadSource: max Set data to the max value for int64_t
 * GoodSource: Set data to a small, non-zero number (two)
 * Sinks: multiply
 *    GoodSink: Ensure there will not be an overflow before multiplying data by 2
 *    BadSink : If data is positive, multiply by 2, which can cause an overflow
 * Flow Variant: 84 Data flow: data passed to class constructor and destructor by declaring the class object on the heap and deleting it after use
 *
 * */
#ifndef OMITGOOD

#include "std_testcase.h"
#include "CWE190_Integer_Overflow__int64_t_max_multiply_84.h"

namespace CWE190_Integer_Overflow__int64_t_max_multiply_84
{
CWE190_Integer_Overflow__int64_t_max_multiply_84_goodB2G::CWE190_Integer_Overflow__int64_t_max_multiply_84_goodB2G(int64_t dataCopy)
{
    data = dataCopy;
    /* POTENTIAL FLAW: Use the maximum size of the data type */
    data = LLONG_MAX;
}

CWE190_Integer_Overflow__int64_t_max_multiply_84_goodB2G::~CWE190_Integer_Overflow__int64_t_max_multiply_84_goodB2G()
{
    if(data > 0) /* ensure we won't have an underflow */
    {
        /* FIX: Add a check to prevent an overflow from occurring */
        if (data < (LLONG_MAX/2))
        {
            int64_t result = data * 2;
            printLongLongLine(result);
        }
        else
        {
            printLine("data value is too large to perform arithmetic safely.");
        }
    }
}
}
#endif /* OMITGOOD */
