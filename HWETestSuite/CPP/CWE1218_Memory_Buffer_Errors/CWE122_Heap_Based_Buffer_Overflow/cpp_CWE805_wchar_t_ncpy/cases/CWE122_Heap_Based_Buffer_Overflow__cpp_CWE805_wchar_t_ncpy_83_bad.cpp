/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE122_Heap_Based_Buffer_Overflow__cpp_CWE805_wchar_t_ncpy_83_bad.cpp
Label Definition File: CWE122_Heap_Based_Buffer_Overflow__cpp_CWE805.string.label.xml
Template File: sources-sink-83_bad.tmpl.cpp
*/
/*
 * @testsuite Juliet_Cpp_1.3
* @description
 * CWE: 122 Heap Based Buffer Overflow
 * BadSource:  Allocate using new[] and set data pointer to a small buffer
 * GoodSource: Allocate using new[] and set data pointer to a large buffer
 * Sinks: ncpy
 *    BadSink : Copy string to data using wcsncpy
 * Flow Variant: 83 Data flow: data passed to class constructor and destructor by declaring the class object on the stack
 *
 * */
#ifndef OMITBAD

#include "std_testcase.h"
#include "CWE122_Heap_Based_Buffer_Overflow__cpp_CWE805_wchar_t_ncpy_83.h"

namespace CWE122_Heap_Based_Buffer_Overflow__cpp_CWE805_wchar_t_ncpy_83
{
CWE122_Heap_Based_Buffer_Overflow__cpp_CWE805_wchar_t_ncpy_83_bad::CWE122_Heap_Based_Buffer_Overflow__cpp_CWE805_wchar_t_ncpy_83_bad(wchar_t * dataCopy)
{
    data = dataCopy;
    /* FLAW: Allocate using new[] and point data to a small buffer that is smaller than the large buffer used in the sinks */
    data = new wchar_t[50];
    data[0] = L'\0'; /* null terminate */
}

CWE122_Heap_Based_Buffer_Overflow__cpp_CWE805_wchar_t_ncpy_83_bad::~CWE122_Heap_Based_Buffer_Overflow__cpp_CWE805_wchar_t_ncpy_83_bad()
{
    {
        wchar_t source[100];
        wmemset(source, L'C', 100-1); /* fill with L'C's */
        source[100-1] = L'\0'; /* null terminate */
        /* POTENTIAL FLAW: Possible buffer overflow if source is larger than data */
        wcsncpy(data, source, 100-1);
        data[100-1] = L'\0'; /* Ensure the destination buffer is null terminated */
        printWLine(data);
        delete [] data;
    }
}
}
#endif /* OMITBAD */
