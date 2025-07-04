/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE191_Integer_Underflow__int_min_sub_83_goodB2G.cpp
Label Definition File: CWE191_Integer_Underflow__int.label.xml
Template File: sources-sinks-83_goodB2G.tmpl.cpp
*/
/*
 * @testsuite Juliet_Cpp_1.3
* @description
 * CWE: 191 Integer Underflow
 * BadSource: min Set data to the minimum value for int
 * GoodSource: Set data to a small, non-zero number (negative two)
 * Sinks: sub
 *    GoodSink: Ensure there will not be an underflow before subtracting 1 from data
 *    BadSink : Subtract 1 from data, which can cause an Underflow
 * Flow Variant: 83 Data flow: data passed to class constructor and destructor by declaring the class object on the stack
 *
 * */
#ifndef OMITGOOD

#include "std_testcase.h"
#include "CWE191_Integer_Underflow__int_min_sub_83.h"

namespace CWE191_Integer_Underflow__int_min_sub_83
{
CWE191_Integer_Underflow__int_min_sub_83_goodB2G::CWE191_Integer_Underflow__int_min_sub_83_goodB2G(int dataCopy)
{
    data = dataCopy;
    /* POTENTIAL FLAW: Use the minimum value for this type */
    data = INT_MIN;
}

CWE191_Integer_Underflow__int_min_sub_83_goodB2G::~CWE191_Integer_Underflow__int_min_sub_83_goodB2G()
{
    /* FIX: Add a check to prevent an underflow from occurring */
    if (data > INT_MIN)
    {
        int result = data - 1;
        printIntLine(result);
    }
    else
    {
        printLine("data value is too large to perform subtraction.");
    }
}
}
#endif /* OMITGOOD */
