/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE190_Integer_Overflow__int64_t_rand_square_83_bad.cpp
Label Definition File: CWE190_Integer_Overflow.label.xml
Template File: sources-sinks-83_bad.tmpl.cpp
*/
/*
 * @testsuite Juliet_Cpp_1.3
* @description
 * CWE: 190 Integer Overflow
 * BadSource: rand Set data to result of rand()
 * GoodSource: Set data to a small, non-zero number (two)
 * Sinks: square
 *    GoodSink: Ensure there will not be an overflow before squaring data
 *    BadSink : Square data, which can lead to overflow
 * Flow Variant: 83 Data flow: data passed to class constructor and destructor by declaring the class object on the stack
 *
 * */
#ifndef OMITBAD

#include "std_testcase.h"
#include "CWE190_Integer_Overflow__int64_t_rand_square_83.h"

#include <math.h>

namespace CWE190_Integer_Overflow__int64_t_rand_square_83
{
CWE190_Integer_Overflow__int64_t_rand_square_83_bad::CWE190_Integer_Overflow__int64_t_rand_square_83_bad(int64_t dataCopy)
{
    data = dataCopy;
    /* POTENTIAL FLAW: Use a random value */
    data = (int64_t)RAND64();
}

CWE190_Integer_Overflow__int64_t_rand_square_83_bad::~CWE190_Integer_Overflow__int64_t_rand_square_83_bad()
{
    {
        /* POTENTIAL FLAW: if (data*data) > LLONG_MAX, this will overflow */
        int64_t result = data * data;
        printLongLongLine(result);
    }
}
}
#endif /* OMITBAD */
