/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE191_Integer_Underflow__unsigned_int_rand_sub_83_bad.cpp
Label Definition File: CWE191_Integer_Underflow.label.xml
Template File: sources-sinks-83_bad.tmpl.cpp
*/
/*
 * @testsuite Juliet_Cpp_1.3
* @description
 * CWE: 191 Integer Underflow
 * BadSource: rand Set data to result of rand()
 * GoodSource: Set data to a small, non-zero number (negative two)
 * Sinks: sub
 *    GoodSink: Ensure there will not be an underflow before subtracting 1 from data
 *    BadSink : Subtract 1 from data, which can cause an Underflow
 * Flow Variant: 83 Data flow: data passed to class constructor and destructor by declaring the class object on the stack
 *
 * */
#ifndef OMITBAD

#include "std_testcase.h"
#include "CWE191_Integer_Underflow__unsigned_int_rand_sub_83.h"

namespace CWE191_Integer_Underflow__unsigned_int_rand_sub_83
{
CWE191_Integer_Underflow__unsigned_int_rand_sub_83_bad::CWE191_Integer_Underflow__unsigned_int_rand_sub_83_bad(unsigned int dataCopy)
{
    data = dataCopy;
    /* POTENTIAL FLAW: Use a random value */
    data = (unsigned int)RAND32();
}

CWE191_Integer_Underflow__unsigned_int_rand_sub_83_bad::~CWE191_Integer_Underflow__unsigned_int_rand_sub_83_bad()
{
    {
        /* POTENTIAL FLAW: Subtracting 1 from data could cause an underflow */
        unsigned int result = data - 1;
        printUnsignedLine(result);
    }
}
}
#endif /* OMITBAD */
