/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE122_Heap_Based_Buffer_Overflow__cpp_dest_char_cpy_83_goodG2B.cpp
Label Definition File: CWE122_Heap_Based_Buffer_Overflow__cpp_dest.label.xml
Template File: sources-sink-83_goodG2B.tmpl.cpp
*/
/*
 * @testsuite Juliet_Cpp_1.3
* @description
 * CWE: 122 Heap Based Buffer Overflow
 * BadSource:  Allocate using new[] and set data pointer to a small buffer
 * GoodSource: Allocate using new[] and set data pointer to a large buffer
 * Sinks: cpy
 *    BadSink : Copy string to data using strcpy
 * Flow Variant: 83 Data flow: data passed to class constructor and destructor by declaring the class object on the stack
 *
 * */
#ifndef OMITGOOD

#include "std_testcase.h"
#include "CWE122_Heap_Based_Buffer_Overflow__cpp_dest_char_cpy_83.h"

namespace CWE122_Heap_Based_Buffer_Overflow__cpp_dest_char_cpy_83
{
CWE122_Heap_Based_Buffer_Overflow__cpp_dest_char_cpy_83_goodG2B::CWE122_Heap_Based_Buffer_Overflow__cpp_dest_char_cpy_83_goodG2B(char * dataCopy)
{
    data = dataCopy;
    /* FIX: Allocate using new[] and point data to a large buffer that is at least as large as the large buffer used in the sink */
    data = new char[100];
    data[0] = '\0'; /* null terminate */
}

CWE122_Heap_Based_Buffer_Overflow__cpp_dest_char_cpy_83_goodG2B::~CWE122_Heap_Based_Buffer_Overflow__cpp_dest_char_cpy_83_goodG2B()
{
    {
        char source[100];
        memset(source, 'C', 100-1); /* fill with 'C's */
        source[100-1] = '\0'; /* null terminate */
        /* POTENTIAL FLAW: Possible buffer overflow if source is larger than data */
        strcpy(data, source);
        printLine(data);
        delete [] data;
    }
}
}
#endif /* OMITGOOD */
