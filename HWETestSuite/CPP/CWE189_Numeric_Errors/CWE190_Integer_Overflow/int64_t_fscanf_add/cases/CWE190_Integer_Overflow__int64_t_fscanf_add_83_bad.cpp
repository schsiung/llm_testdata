/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE190_Integer_Overflow__int64_t_fscanf_add_83_bad.cpp
Label Definition File: CWE190_Integer_Overflow.label.xml
Template File: sources-sinks-83_bad.tmpl.cpp
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
 * Flow Variant: 83 Data flow: data passed to class constructor and destructor by declaring the class object on the stack
 *
 * */
#ifndef OMITBAD

#include <inttypes.h>
#include "std_testcase.h"
#include "CWE190_Integer_Overflow__int64_t_fscanf_add_83.h"

namespace CWE190_Integer_Overflow__int64_t_fscanf_add_83
{
CWE190_Integer_Overflow__int64_t_fscanf_add_83_bad::CWE190_Integer_Overflow__int64_t_fscanf_add_83_bad(int64_t dataCopy)
{
    data = dataCopy;
    /* POTENTIAL FLAW: Use a value input from the console */
    fscanf (stdin, "%" SCNd64, &data);
}

CWE190_Integer_Overflow__int64_t_fscanf_add_83_bad::~CWE190_Integer_Overflow__int64_t_fscanf_add_83_bad()
{
    {
        /* POTENTIAL FLAW: Adding 1 to data could cause an overflow */
        int64_t result = data + 1;
        printLongLongLine(result);
    }
}
}
#endif /* OMITBAD */
