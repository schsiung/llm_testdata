/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE126_Buffer_Overread__new_wchar_t_memcpy_84_goodG2B.cpp
Label Definition File: CWE126_Buffer_Overread__new.label.xml
Template File: sources-sink-84_goodG2B.tmpl.cpp
*/
/*
 * @testsuite Juliet_Cpp_1.3
* @description
 * CWE: 126 Buffer Over-read
 * BadSource:  Use a small buffer
 * GoodSource: Use a large buffer
 * Sinks: memcpy
 *    BadSink : Copy data to string using memcpy
 * Flow Variant: 84 Data flow: data passed to class constructor and destructor by declaring the class object on the heap and deleting it after use
 *
 * */
#ifndef OMITGOOD

#include "std_testcase.h"
#include "CWE126_Buffer_Overread__new_wchar_t_memcpy_84.h"

namespace CWE126_Buffer_Overread__new_wchar_t_memcpy_84
{
CWE126_Buffer_Overread__new_wchar_t_memcpy_84_goodG2B::CWE126_Buffer_Overread__new_wchar_t_memcpy_84_goodG2B(wchar_t * dataCopy)
{
    data = dataCopy;
    /* FIX: Use a large buffer */
    data = new wchar_t[100];
    wmemset(data, L'A', 100-1); /* fill with 'A's */
    data[100-1] = L'\0'; /* null terminate */
}

CWE126_Buffer_Overread__new_wchar_t_memcpy_84_goodG2B::~CWE126_Buffer_Overread__new_wchar_t_memcpy_84_goodG2B()
{
    {
        wchar_t dest[100];
        wmemset(dest, L'C', 100-1);
        dest[100-1] = L'\0'; /* null terminate */
        /* POTENTIAL FLAW: using memcpy with the length of the dest where data
         * could be smaller than dest causing buffer overread */
        memcpy(dest, data, wcslen(dest)*sizeof(wchar_t));
        dest[100-1] = L'\0';
        printWLine(dest);
        delete [] data;
    }
}
}
#endif /* OMITGOOD */
