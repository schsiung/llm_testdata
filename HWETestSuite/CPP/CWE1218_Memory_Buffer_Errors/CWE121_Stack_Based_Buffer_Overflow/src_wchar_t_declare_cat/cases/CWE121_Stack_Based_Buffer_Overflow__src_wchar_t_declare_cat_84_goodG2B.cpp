/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE121_Stack_Based_Buffer_Overflow__src_wchar_t_declare_cat_84_goodG2B.cpp
Label Definition File: CWE121_Stack_Based_Buffer_Overflow__src.label.xml
Template File: sources-sink-84_goodG2B.tmpl.cpp
*/
/*
 * @testsuite Juliet_Cpp_1.3
* @description
 * CWE: 121 Stack Based Buffer Overflow
 * BadSource:  Initialize data as a large string
 * GoodSource: Initialize data as a small string
 * Sinks: cat
 *    BadSink : Copy data to string using wcscat
 * Flow Variant: 84 Data flow: data passed to class constructor and destructor by declaring the class object on the heap and deleting it after use
 *
 * */
#ifndef OMITGOOD

#include "std_testcase.h"
#include "CWE121_Stack_Based_Buffer_Overflow__src_wchar_t_declare_cat_84.h"

namespace CWE121_Stack_Based_Buffer_Overflow__src_wchar_t_declare_cat_84
{
CWE121_Stack_Based_Buffer_Overflow__src_wchar_t_declare_cat_84_goodG2B::CWE121_Stack_Based_Buffer_Overflow__src_wchar_t_declare_cat_84_goodG2B(wchar_t * dataCopy)
{
    data = dataCopy;
    /* FIX: Initialize data as a small buffer that as small or smaller than the small buffer used in the sink */
    wmemset(data, L'A', 50-1); /* fill with L'A's */
    data[50-1] = L'\0'; /* null terminate */
}

CWE121_Stack_Based_Buffer_Overflow__src_wchar_t_declare_cat_84_goodG2B::~CWE121_Stack_Based_Buffer_Overflow__src_wchar_t_declare_cat_84_goodG2B()
{
    {
        wchar_t dest[50] = L"";
        /* POTENTIAL FLAW: Possible buffer overflow if data is larger than sizeof(dest)-wcslen(dest)*/
        wcscat(dest, data);
        printWLine(data);
    }
}
}
#endif /* OMITGOOD */
