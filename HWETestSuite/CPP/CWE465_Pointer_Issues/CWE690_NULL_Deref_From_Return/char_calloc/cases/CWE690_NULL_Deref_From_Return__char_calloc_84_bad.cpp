/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE690_NULL_Deref_From_Return__char_calloc_84_bad.cpp
Label Definition File: CWE690_NULL_Deref_From_Return.free.label.xml
Template File: source-sinks-84_bad.tmpl.cpp
*/
/*
 * @testsuite Juliet_Cpp_1.3
* @description
 * CWE: 690 Unchecked Return Value To NULL Pointer
 * BadSource: calloc Allocate data using calloc()
 * Sinks:
 *    GoodSink: Check to see if the data allocation failed and if not, use data
 *    BadSink : Don't check for NULL and use data
 * Flow Variant: 84 Data flow: data passed to class constructor and destructor by declaring the class object on the heap and deleting it after use
 *
 * */
#ifndef OMITBAD

#include "std_testcase.h"
#include "CWE690_NULL_Deref_From_Return__char_calloc_84.h"

namespace CWE690_NULL_Deref_From_Return__char_calloc_84
{
CWE690_NULL_Deref_From_Return__char_calloc_84_bad::CWE690_NULL_Deref_From_Return__char_calloc_84_bad(char * dataCopy)
{
    data = dataCopy;
    /* POTENTIAL FLAW: Allocate memory without checking if the memory allocation function failed */
    data = (char *)calloc(20, sizeof(char));
}

CWE690_NULL_Deref_From_Return__char_calloc_84_bad::~CWE690_NULL_Deref_From_Return__char_calloc_84_bad()
{
    /* FLAW: Initialize memory buffer without checking to see if the memory allocation function failed */
    strcpy(data, "Initialize");
    printLine(data);
    free(data);
}
}
#endif /* OMITBAD */
