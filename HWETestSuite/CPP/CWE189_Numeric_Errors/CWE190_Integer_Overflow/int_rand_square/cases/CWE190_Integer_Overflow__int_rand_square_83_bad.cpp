/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE190_Integer_Overflow__int_rand_square_83_bad.cpp
Label Definition File: CWE190_Integer_Overflow__int.label.xml
Template File: sources-sinks-83_bad.tmpl.cpp
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
 * Flow Variant: 83 Data flow: data passed to class constructor and destructor by declaring the class object on the stack
 *
 * */
#ifndef OMITBAD

#include "std_testcase.h"
#include "CWE190_Integer_Overflow__int_rand_square_83.h"

#include <math.h>

namespace CWE190_Integer_Overflow__int_rand_square_83
{
CWE190_Integer_Overflow__int_rand_square_83_bad::CWE190_Integer_Overflow__int_rand_square_83_bad(int dataCopy)
{
    data = dataCopy;
    /* POTENTIAL FLAW: Set data to a random value */
    data = RAND32();
}

CWE190_Integer_Overflow__int_rand_square_83_bad::~CWE190_Integer_Overflow__int_rand_square_83_bad()
{
    {
        /* POTENTIAL FLAW: if (data*data) > INT_MAX, this will overflow */
        int result = data * data;
        printIntLine(result);
    }
}
}
#endif /* OMITBAD */
