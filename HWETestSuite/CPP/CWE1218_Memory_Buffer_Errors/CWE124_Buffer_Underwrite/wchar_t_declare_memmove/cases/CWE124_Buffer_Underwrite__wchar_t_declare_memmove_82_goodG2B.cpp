/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE124_Buffer_Underwrite__wchar_t_declare_memmove_82_goodG2B.cpp
Label Definition File: CWE124_Buffer_Underwrite.stack.label.xml
Template File: sources-sink-82_goodG2B.tmpl.cpp
*/
/*
 * @testsuite Juliet_Cpp_1.3
* @description
 * CWE: 124 Buffer Underwrite
 * BadSource:  Set data pointer to before the allocated memory buffer
 * GoodSource: Set data pointer to the allocated memory buffer
 * Sinks: memmove
 *    BadSink : Copy string to data using memmove
 * Flow Variant: 82 Data flow: data passed in a parameter to an virtual method called via a pointer
 *
 * */
#ifndef OMITGOOD

#include "std_testcase.h"
#include "CWE124_Buffer_Underwrite__wchar_t_declare_memmove_82.h"

namespace CWE124_Buffer_Underwrite__wchar_t_declare_memmove_82
{

void CWE124_Buffer_Underwrite__wchar_t_declare_memmove_82_goodG2B::action(wchar_t * data)
{
    {
        wchar_t source[100];
        wmemset(source, L'C', 100-1); /* fill with 'C's */
        source[100-1] = L'\0'; /* null terminate */
        /* POTENTIAL FLAW: Possibly copying data to memory before the destination buffer */
        memmove(data, source, 100*sizeof(wchar_t));
        /* Ensure the destination buffer is null terminated */
        data[100-1] = L'\0';
        printWLine(data);
    }
}

}
#endif /* OMITGOOD */
