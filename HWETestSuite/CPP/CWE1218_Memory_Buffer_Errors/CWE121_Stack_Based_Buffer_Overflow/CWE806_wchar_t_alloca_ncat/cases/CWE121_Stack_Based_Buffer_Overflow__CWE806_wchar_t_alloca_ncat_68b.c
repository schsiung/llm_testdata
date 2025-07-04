/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE121_Stack_Based_Buffer_Overflow__CWE806_wchar_t_alloca_ncat_68b.c
Label Definition File: CWE121_Stack_Based_Buffer_Overflow__CWE806.label.xml
Template File: sources-sink-68b.tmpl.c
*/
/*
 * @testsuite Juliet_Cpp_1.3
* @description
 * CWE: 121 Stack Based Buffer Overflow
 * BadSource:  Initialize data as a large string
 * GoodSource: Initialize data as a small string
 * Sink: ncat
 *    BadSink : Copy data to string using wcsncat
 * Flow Variant: 68 Data flow: data passed as a global variable from one function to another in different source files
 *
 * */

#include "std_testcase.h"

#include <wchar.h>

extern wchar_t * CWE121_Stack_Based_Buffer_Overflow__CWE806_wchar_t_alloca_ncat_68_badData;
extern wchar_t * CWE121_Stack_Based_Buffer_Overflow__CWE806_wchar_t_alloca_ncat_68_goodG2BData;

/* all the sinks are the same, we just want to know where the hit originated if a tool flags one */

#ifndef OMITBAD

void CWE121_Stack_Based_Buffer_Overflow__CWE806_wchar_t_alloca_ncat_68b_badSink()
{
    wchar_t * data = CWE121_Stack_Based_Buffer_Overflow__CWE806_wchar_t_alloca_ncat_68_badData;
    {
        wchar_t dest[50] = L"";
        /* POTENTIAL FLAW: Possible buffer overflow if data is larger than sizeof(dest)-wcslen(dest)*/
        wcsncat(dest, data, wcslen(data));
        dest[50-1] = L'\0'; /* Ensure the destination buffer is null terminated */
        printWLine(data);
    }
}

#endif /* OMITBAD */

#ifndef OMITGOOD

/* goodG2B uses the GoodSource with the BadSink */
void CWE121_Stack_Based_Buffer_Overflow__CWE806_wchar_t_alloca_ncat_68b_goodG2BSink()
{
    wchar_t * data = CWE121_Stack_Based_Buffer_Overflow__CWE806_wchar_t_alloca_ncat_68_goodG2BData;
    {
        wchar_t dest[50] = L"";
        /* POTENTIAL FLAW: Possible buffer overflow if data is larger than sizeof(dest)-wcslen(dest)*/
        wcsncat(dest, data, wcslen(data));
        dest[50-1] = L'\0'; /* Ensure the destination buffer is null terminated */
        printWLine(data);
    }
}

#endif /* OMITGOOD */
