/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE190_Integer_Overflow__int_rand_square_84_goodB2G.cpp
Label Definition File: CWE190_Integer_Overflow__int.label.xml
Template File: sources-sinks-84_goodB2G.tmpl.cpp
*/
/*
 * @testsuite Juliet_Cpp_1.3
* @description
 * CWE: 190 Integer Overflow
 * BadSource: rand Set data to result of rand(), which may be zero
 * GoodSource: Set data to a small, non-zero number (two)
 * Sinks: square
 *    GoodSink: Ensure there will not be an overflow before squaring data
 *    BadSink : Square data, which can lead to overflow
 * Flow Variant: 84 Data flow: data passed to class constructor and destructor by declaring the class object on the heap and deleting it after use
 *
 * */
#ifndef OMITGOOD

#include "std_testcase.h"
#include "CWE190_Integer_Overflow__int_rand_square_84.h"

#include <math.h>

namespace CWE190_Integer_Overflow__int_rand_square_84
{
CWE190_Integer_Overflow__int_rand_square_84_goodB2G::CWE190_Integer_Overflow__int_rand_square_84_goodB2G(int dataCopy)
{
    data = dataCopy;
    /* POTENTIAL FLAW: Set data to a random value */
    data = RAND32();
}

CWE190_Integer_Overflow__int_rand_square_84_goodB2G::~CWE190_Integer_Overflow__int_rand_square_84_goodB2G()
{
    /* FIX: Add a check to prevent an overflow from occurring */
    if (data > INT_MIN && abs(data) < (long)sqrt((double)INT_MAX))
    {
        int result = data * data;
        printIntLine(result);
    }
    else
    {
        printLine("data value is too large to perform arithmetic safely.");
    }
}
}
#endif /* OMITGOOD */
