/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE122_Heap_Based_Buffer_Overflow__c_CWE806_char_loop_83_goodG2B.cpp
Label Definition File: CWE122_Heap_Based_Buffer_Overflow__c_CWE806.label.xml
Template File: sources-sink-83_goodG2B.tmpl.cpp
*/
/*
 * @testsuite Juliet_Cpp_1.3
* @description
 * CWE: 122 Heap Based Buffer Overflow
 * BadSource:  Initialize data as a large string
 * GoodSource: Initialize data as a small string
 * Sinks: loop
 *    BadSink : Copy data to string using a loop
 * Flow Variant: 83 Data flow: data passed to class constructor and destructor by declaring the class object on the stack
 *
 * */
#ifndef OMITGOOD

#include "std_testcase.h"
#include "CWE122_Heap_Based_Buffer_Overflow__c_CWE806_char_loop_83.h"

namespace CWE122_Heap_Based_Buffer_Overflow__c_CWE806_char_loop_83
{
CWE122_Heap_Based_Buffer_Overflow__c_CWE806_char_loop_83_goodG2B::CWE122_Heap_Based_Buffer_Overflow__c_CWE806_char_loop_83_goodG2B(char * dataCopy)
{
    data = dataCopy;
    /* FIX: Initialize data as a small buffer that as small or smaller than the small buffer used in the sink */
    memset(data, 'A', 50-1); /* fill with 'A's */
    data[50-1] = '\0'; /* null terminate */
}

CWE122_Heap_Based_Buffer_Overflow__c_CWE806_char_loop_83_goodG2B::~CWE122_Heap_Based_Buffer_Overflow__c_CWE806_char_loop_83_goodG2B()
{
    {
        char dest[50] = "";
        size_t i, dataLen;
        dataLen = strlen(data);
        /* POTENTIAL FLAW: Possible buffer overflow if data is larger than dest */
        for (i = 0; i < dataLen; i++)
        {
            dest[i] = data[i];
        }
        dest[50-1] = '\0'; /* Ensure the destination buffer is null terminated */
        printLine(data);
        free(data);
    }
}
}
#endif /* OMITGOOD */
