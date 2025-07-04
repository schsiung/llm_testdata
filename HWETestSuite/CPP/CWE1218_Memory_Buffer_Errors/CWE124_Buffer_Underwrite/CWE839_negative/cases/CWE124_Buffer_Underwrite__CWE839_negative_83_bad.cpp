/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE124_Buffer_Underwrite__CWE839_negative_83_bad.cpp
Label Definition File: CWE124_Buffer_Underwrite__CWE839.label.xml
Template File: sources-sinks-83_bad.tmpl.cpp
*/
/*
 * @testsuite Juliet_Cpp_1.3
* @description
 * CWE: 124 Buffer Underwrite
 * BadSource: negative Negative index value
 * GoodSource: Non-negative but less than 10
 * Sinks:
 *    GoodSink: Ensure the array index is valid
 *    BadSink : Improperly check the array index by not checking the lower bound
 * Flow Variant: 83 Data flow: data passed to class constructor and destructor by declaring the class object on the stack
 *
 * */
#ifndef OMITBAD

#include "std_testcase.h"
#include "CWE124_Buffer_Underwrite__CWE839_negative_83.h"

namespace CWE124_Buffer_Underwrite__CWE839_negative_83
{
CWE124_Buffer_Underwrite__CWE839_negative_83_bad::CWE124_Buffer_Underwrite__CWE839_negative_83_bad(int dataCopy)
{
    data = dataCopy;
    /* POTENTIAL FLAW: Use an invalid index */
    data = -5;
}

CWE124_Buffer_Underwrite__CWE839_negative_83_bad::~CWE124_Buffer_Underwrite__CWE839_negative_83_bad()
{
    {
        int i;
        int buffer[10] = { 0 };
        /* POTENTIAL FLAW: Attempt to access a negative index of the array
        * This code does not check to see if the array index is negative */
        if (data < 10)
        {
            buffer[data] = 1;
            /* Print the array values */
            for(i = 0; i < 10; i++)
            {
                printIntLine(buffer[i]);
            }
        }
        else
        {
            printLine("ERROR: Array index is negative.");
        }
    }
}
}
#endif /* OMITBAD */
