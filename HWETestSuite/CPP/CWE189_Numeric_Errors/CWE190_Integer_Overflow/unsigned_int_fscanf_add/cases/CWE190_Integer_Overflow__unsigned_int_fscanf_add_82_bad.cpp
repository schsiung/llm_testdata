/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE190_Integer_Overflow__unsigned_int_fscanf_add_82_bad.cpp
Label Definition File: CWE190_Integer_Overflow.label.xml
Template File: sources-sinks-82_bad.tmpl.cpp
*/
/*
 * @testsuite Juliet_Cpp_1.3
* @description
 * CWE: 190 Integer Overflow
 * BadSource: fscanf Read data from the console using fscanf()
 * GoodSource: Set data to a small, non-zero number (two)
 * Sinks: add
 *    GoodSink: Ensure there will not be an overflow before adding 1 to data
 *    BadSink : Add 1 to data, which can cause an overflow
 * Flow Variant: 82 Data flow: data passed in a parameter to an virtual method called via a pointer
 *
 * */
#ifndef OMITBAD

#include "std_testcase.h"
#include "CWE190_Integer_Overflow__unsigned_int_fscanf_add_82.h"

namespace CWE190_Integer_Overflow__unsigned_int_fscanf_add_82
{

void CWE190_Integer_Overflow__unsigned_int_fscanf_add_82_bad::action(unsigned int data)
{
    {
        /* POTENTIAL FLAW: Adding 1 to data could cause an overflow */
        unsigned int result = data + 1;
        printUnsignedLine(result);
    }
}

}
#endif /* OMITBAD */
