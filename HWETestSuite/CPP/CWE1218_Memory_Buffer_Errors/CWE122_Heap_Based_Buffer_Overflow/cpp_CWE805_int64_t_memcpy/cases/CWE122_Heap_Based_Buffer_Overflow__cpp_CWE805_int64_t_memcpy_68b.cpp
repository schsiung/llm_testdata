/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE122_Heap_Based_Buffer_Overflow__cpp_CWE805_int64_t_memcpy_68b.cpp
Label Definition File: CWE122_Heap_Based_Buffer_Overflow__cpp_CWE805.label.xml
Template File: sources-sink-68b.tmpl.cpp
*/
/*
 * @testsuite Juliet_Cpp_1.3
* @description
 * CWE: 122 Heap Based Buffer Overflow
 * BadSource:  Allocate using new[] and set data pointer to a small buffer
 * GoodSource: Allocate using new[] and set data pointer to a large buffer
 * Sink: memcpy
 *    BadSink : Copy int64_t array to data using memcpy
 * Flow Variant: 68 Data flow: data passed as a global variable from one function to another in different source files
 *
 * */

#include "std_testcase.h"

extern int64_t * CWE122_Heap_Based_Buffer_Overflow__cpp_CWE805_int64_t_memcpy_68_badData;
extern int64_t * CWE122_Heap_Based_Buffer_Overflow__cpp_CWE805_int64_t_memcpy_68_goodG2BData;

namespace CWE122_Heap_Based_Buffer_Overflow__cpp_CWE805_int64_t_memcpy_68
{

/* all the sinks are the same, we just want to know where the hit originated if a tool flags one */

#ifndef OMITBAD

void badSink()
{
    int64_t * data = CWE122_Heap_Based_Buffer_Overflow__cpp_CWE805_int64_t_memcpy_68_badData;
    {
        int64_t source[100] = {0}; /* fill with 0's */
        /* POTENTIAL FLAW: Possible buffer overflow if data < 100 */
        memcpy(data, source, 100*sizeof(int64_t));
        printLongLongLine(data[0]);
        delete [] data;
    }
}

#endif /* OMITBAD */

#ifndef OMITGOOD

/* goodG2B uses the GoodSource with the BadSink */
void goodG2BSink()
{
    int64_t * data = CWE122_Heap_Based_Buffer_Overflow__cpp_CWE805_int64_t_memcpy_68_goodG2BData;
    {
        int64_t source[100] = {0}; /* fill with 0's */
        /* POTENTIAL FLAW: Possible buffer overflow if data < 100 */
        memcpy(data, source, 100*sizeof(int64_t));
        printLongLongLine(data[0]);
        delete [] data;
    }
}

#endif /* OMITGOOD */

} /* close namespace */
