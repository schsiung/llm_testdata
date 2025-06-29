/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE124_Buffer_Underwrite__new_wchar_t_memmove_84_goodG2B.cpp
Label Definition File: CWE124_Buffer_Underwrite__new.label.xml
Template File: sources-sink-84_goodG2B.tmpl.cpp
*/
/*
 * @testsuite Juliet_Cpp_1.3
* @description
 * CWE: 124 Buffer Underwrite
 * BadSource:  Set data pointer to before the allocated memory buffer
 * GoodSource: Set data pointer to the allocated memory buffer
 * Sinks: memmove
 *    BadSink : Copy string to data using memmove
 * Flow Variant: 84 Data flow: data passed to class constructor and destructor by declaring the class object on the heap and deleting it after use
 *
 * */
#ifndef OMITGOOD

#include "std_testcase.h"
#include "CWE124_Buffer_Underwrite__new_wchar_t_memmove_84.h"

namespace CWE124_Buffer_Underwrite__new_wchar_t_memmove_84
{
CWE124_Buffer_Underwrite__new_wchar_t_memmove_84_goodG2B::CWE124_Buffer_Underwrite__new_wchar_t_memmove_84_goodG2B(wchar_t * dataCopy)
{
    data = dataCopy;
    {
        wchar_t * dataBuffer = new wchar_t[100];
        wmemset(dataBuffer, L'A', 100-1);
        dataBuffer[100-1] = L'\0';
        /* FIX: Set data pointer to the allocated memory buffer */
        data = dataBuffer;
    }
}

CWE124_Buffer_Underwrite__new_wchar_t_memmove_84_goodG2B::~CWE124_Buffer_Underwrite__new_wchar_t_memmove_84_goodG2B()
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
        /* INCIDENTAL CWE-401: Memory Leak - data may not point to location
         * returned by new [] so can't safely call delete [] on it */
    }
}
}
#endif /* OMITGOOD */
