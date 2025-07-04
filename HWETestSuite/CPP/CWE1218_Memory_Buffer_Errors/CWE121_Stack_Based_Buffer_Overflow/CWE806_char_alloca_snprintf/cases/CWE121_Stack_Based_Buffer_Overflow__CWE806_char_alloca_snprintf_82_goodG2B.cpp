/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE121_Stack_Based_Buffer_Overflow__CWE806_char_alloca_snprintf_82_goodG2B.cpp
Label Definition File: CWE121_Stack_Based_Buffer_Overflow__CWE806.label.xml
Template File: sources-sink-82_goodG2B.tmpl.cpp
*/
/*
 * @testsuite Juliet_Cpp_1.3
* @description
 * CWE: 121 Stack Based Buffer Overflow
 * BadSource:  Initialize data as a large string
 * GoodSource: Initialize data as a small string
 * Sinks: snprintf
 *    BadSink : Copy data to string using snprintf
 * Flow Variant: 82 Data flow: data passed in a parameter to an virtual method called via a pointer
 *
 * */
#ifndef OMITGOOD

#include "std_testcase.h"
#include "CWE121_Stack_Based_Buffer_Overflow__CWE806_char_alloca_snprintf_82.h"

#ifdef _WIN32
#define SNPRINTF _snprintf
#else
#define SNPRINTF snprintf
#endif

namespace CWE121_Stack_Based_Buffer_Overflow__CWE806_char_alloca_snprintf_82
{

void CWE121_Stack_Based_Buffer_Overflow__CWE806_char_alloca_snprintf_82_goodG2B::action(char * data)
{
    {
        char dest[50] = "";
        /* POTENTIAL FLAW: Possible buffer overflow if data is larger than dest */
        SNPRINTF(dest, strlen(data), "%s", data);
        printLine(data);
    }
}

}
#endif /* OMITGOOD */
