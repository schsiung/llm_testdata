/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE122_Heap_Based_Buffer_Overflow__cpp_CWE806_char_memcpy_81_goodG2B.cpp
Label Definition File: CWE122_Heap_Based_Buffer_Overflow__cpp_CWE806.label.xml
Template File: sources-sink-81_goodG2B.tmpl.cpp
*/
/*
 * @testsuite Juliet_Cpp_1.3
* @description
 * CWE: 122 Heap Based Buffer Overflow
 * BadSource:  Initialize data as a large string
 * GoodSource: Initialize data as a small string
 * Sinks: memcpy
 *    BadSink : Copy data to string using memcpy
 * Flow Variant: 81 Data flow: data passed in a parameter to an virtual method called via a reference
 *
 * */
#ifndef OMITGOOD

#include "std_testcase.h"
#include "CWE122_Heap_Based_Buffer_Overflow__cpp_CWE806_char_memcpy_81.h"

namespace CWE122_Heap_Based_Buffer_Overflow__cpp_CWE806_char_memcpy_81
{

void CWE122_Heap_Based_Buffer_Overflow__cpp_CWE806_char_memcpy_81_goodG2B::action(char * data) const
{
    {
        char dest[50] = "";
        /* POTENTIAL FLAW: Possible buffer overflow if data is larger than dest */
        memcpy(dest, data, strlen(data)*sizeof(char));
        dest[50-1] = '\0'; /* Ensure the destination buffer is null terminated */
        printLine(data);
        delete [] data;
    }
}

}
#endif /* OMITGOOD */
