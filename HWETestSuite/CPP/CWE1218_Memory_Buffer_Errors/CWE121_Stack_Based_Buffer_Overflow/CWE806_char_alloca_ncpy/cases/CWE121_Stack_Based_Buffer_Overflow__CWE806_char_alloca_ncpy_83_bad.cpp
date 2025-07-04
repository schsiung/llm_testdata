/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE121_Stack_Based_Buffer_Overflow__CWE806_char_alloca_ncpy_83_bad.cpp
Label Definition File: CWE121_Stack_Based_Buffer_Overflow__CWE806.label.xml
Template File: sources-sink-83_bad.tmpl.cpp
*/
/*
 * @testsuite Juliet_Cpp_1.3
* @description
 * CWE: 121 Stack Based Buffer Overflow
 * BadSource:  Initialize data as a large string
 * GoodSource: Initialize data as a small string
 * Sinks: ncpy
 *    BadSink : Copy data to string using strncpy
 * Flow Variant: 83 Data flow: data passed to class constructor and destructor by declaring the class object on the stack
 *
 * */
#ifndef OMITBAD

#include "std_testcase.h"
#include "CWE121_Stack_Based_Buffer_Overflow__CWE806_char_alloca_ncpy_83.h"

namespace CWE121_Stack_Based_Buffer_Overflow__CWE806_char_alloca_ncpy_83
{
CWE121_Stack_Based_Buffer_Overflow__CWE806_char_alloca_ncpy_83_bad::CWE121_Stack_Based_Buffer_Overflow__CWE806_char_alloca_ncpy_83_bad(char * dataCopy)
{
    data = dataCopy;
    /* FLAW: Initialize data as a large buffer that is larger than the small buffer used in the sink */
    memset(data, 'A', 100-1); /* fill with 'A's */
    data[100-1] = '\0'; /* null terminate */
}

CWE121_Stack_Based_Buffer_Overflow__CWE806_char_alloca_ncpy_83_bad::~CWE121_Stack_Based_Buffer_Overflow__CWE806_char_alloca_ncpy_83_bad()
{
    {
        char dest[50] = "";
        /* POTENTIAL FLAW: Possible buffer overflow if data is larger than dest */
        strncpy(dest, data, strlen(data));
        dest[50-1] = '\0'; /* Ensure the destination buffer is null terminated */
        printLine(data);
    }
}
}
#endif /* OMITBAD */
