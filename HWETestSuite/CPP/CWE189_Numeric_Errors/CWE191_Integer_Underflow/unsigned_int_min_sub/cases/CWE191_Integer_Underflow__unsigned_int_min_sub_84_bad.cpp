/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE191_Integer_Underflow__unsigned_int_min_sub_84_bad.cpp
Label Definition File: CWE191_Integer_Underflow.label.xml
Template File: sources-sinks-84_bad.tmpl.cpp
*/
/*
 * @testsuite Juliet_Cpp_1.3
* @description
 * CWE: 191 Integer Underflow
 * BadSource: min Set data to the min value for unsigned int
 * GoodSource: Set data to a small, non-zero number (negative two)
 * Sinks: sub
 *    GoodSink: Ensure there will not be an underflow before subtracting 1 from data
 *    BadSink : Subtract 1 from data, which can cause an Underflow
 * Flow Variant: 84 Data flow: data passed to class constructor and destructor by declaring the class object on the heap and deleting it after use
 *
 * */
#ifndef OMITBAD

#include "std_testcase.h"
#include "CWE191_Integer_Underflow__unsigned_int_min_sub_84.h"

namespace CWE191_Integer_Underflow__unsigned_int_min_sub_84
{
CWE191_Integer_Underflow__unsigned_int_min_sub_84_bad::CWE191_Integer_Underflow__unsigned_int_min_sub_84_bad(unsigned int dataCopy)
{
    data = dataCopy;
    /* POTENTIAL FLAW: Use the minimum size of the data type */
    data = 0;
}

CWE191_Integer_Underflow__unsigned_int_min_sub_84_bad::~CWE191_Integer_Underflow__unsigned_int_min_sub_84_bad()
{
    {
        /* POTENTIAL FLAW: Subtracting 1 from data could cause an underflow */
        unsigned int result = data - 1;
        printUnsignedLine(result);
    }
}
}
#endif /* OMITBAD */
