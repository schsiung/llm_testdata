/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE122_Heap_Based_Buffer_Overflow__c_CWE805_wchar_t_loop_84_goodG2B.cpp
Label Definition File: CWE122_Heap_Based_Buffer_Overflow__c_CWE805.string.label.xml
Template File: sources-sink-84_goodG2B.tmpl.cpp
*/
/*
 * @testsuite Juliet_Cpp_1.3
* @description
 * CWE: 122 Heap Based Buffer Overflow
 * BadSource:  Allocate using malloc() and set data pointer to a small buffer
 * GoodSource: Allocate using malloc() and set data pointer to a large buffer
 * Sinks: loop
 *    BadSink : Copy string to data using a loop
 * Flow Variant: 84 Data flow: data passed to class constructor and destructor by declaring the class object on the heap and deleting it after use
 *
 * */
#ifndef OMITGOOD

#include "std_testcase.h"
#include "CWE122_Heap_Based_Buffer_Overflow__c_CWE805_wchar_t_loop_84.h"

namespace CWE122_Heap_Based_Buffer_Overflow__c_CWE805_wchar_t_loop_84
{
CWE122_Heap_Based_Buffer_Overflow__c_CWE805_wchar_t_loop_84_goodG2B::CWE122_Heap_Based_Buffer_Overflow__c_CWE805_wchar_t_loop_84_goodG2B(wchar_t * dataCopy)
{
    data = dataCopy;
    /* FIX: Allocate and point data to a large buffer that is at least as large as the large buffer used in the sink */
    data = (wchar_t *)malloc(100*sizeof(wchar_t));
    if (data == NULL) {exit(-1);}
    data[0] = L'\0'; /* null terminate */
}

CWE122_Heap_Based_Buffer_Overflow__c_CWE805_wchar_t_loop_84_goodG2B::~CWE122_Heap_Based_Buffer_Overflow__c_CWE805_wchar_t_loop_84_goodG2B()
{
    {
        size_t i;
        wchar_t source[100];
        wmemset(source, L'C', 100-1); /* fill with L'C's */
        source[100-1] = L'\0'; /* null terminate */
        /* POTENTIAL FLAW: Possible buffer overflow if source is larger than data */
        for (i = 0; i < 100; i++)
        {
            data[i] = source[i];
        }
        data[100-1] = L'\0'; /* Ensure the destination buffer is null terminated */
        printWLine(data);
        free(data);
    }
}
}
#endif /* OMITGOOD */
