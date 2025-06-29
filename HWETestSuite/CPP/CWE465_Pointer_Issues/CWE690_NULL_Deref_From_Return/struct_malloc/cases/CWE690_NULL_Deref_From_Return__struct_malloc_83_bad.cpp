/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE690_NULL_Deref_From_Return__struct_malloc_83_bad.cpp
Label Definition File: CWE690_NULL_Deref_From_Return.free.label.xml
Template File: source-sinks-83_bad.tmpl.cpp
*/
/*
 * @testsuite Juliet_Cpp_1.3
* @description
 * CWE: 690 Unchecked Return Value To NULL Pointer
 * BadSource: malloc Allocate data using malloc()
 * Sinks:
 *    GoodSink: Check to see if the data allocation failed and if not, use data
 *    BadSink : Don't check for NULL and use data
 * Flow Variant: 83 Data flow: data passed to class constructor and destructor by declaring the class object on the stack
 *
 * */
#ifndef OMITBAD

#include "std_testcase.h"
#include "CWE690_NULL_Deref_From_Return__struct_malloc_83.h"

namespace CWE690_NULL_Deref_From_Return__struct_malloc_83
{
CWE690_NULL_Deref_From_Return__struct_malloc_83_bad::CWE690_NULL_Deref_From_Return__struct_malloc_83_bad(twoIntsStruct * dataCopy)
{
    data = dataCopy;
    /* POTENTIAL FLAW: Allocate memory without checking if the memory allocation function failed */
    data = (twoIntsStruct *)malloc(1*sizeof(twoIntsStruct));
}

CWE690_NULL_Deref_From_Return__struct_malloc_83_bad::~CWE690_NULL_Deref_From_Return__struct_malloc_83_bad()
{
    /* FLAW: Initialize memory buffer without checking to see if the memory allocation function failed */
    data[0].intOne = 1;
    data[0].intTwo = 1;
    printStructLine(&data[0]);
    free(data);
}
}
#endif /* OMITBAD */
