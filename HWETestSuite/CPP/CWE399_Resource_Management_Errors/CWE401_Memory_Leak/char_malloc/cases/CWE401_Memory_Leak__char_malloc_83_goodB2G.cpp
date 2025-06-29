/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE401_Memory_Leak__char_malloc_83_goodB2G.cpp
Label Definition File: CWE401_Memory_Leak.c.label.xml
Template File: sources-sinks-83_goodB2G.tmpl.cpp
*/
/*
 * @testsuite Juliet_Cpp_1.3
* @description
 * CWE: 401 Memory Leak
 * BadSource: malloc Allocate data using malloc()
 * GoodSource: Allocate data on the stack
 * Sinks:
 *    GoodSink: call free() on data
 *    BadSink : no deallocation of data
 * Flow Variant: 83 Data flow: data passed to class constructor and destructor by declaring the class object on the stack
 *
 * */
#ifndef OMITGOOD

#include "std_testcase.h"
#include "CWE401_Memory_Leak__char_malloc_83.h"

namespace CWE401_Memory_Leak__char_malloc_83
{
CWE401_Memory_Leak__char_malloc_83_goodB2G::CWE401_Memory_Leak__char_malloc_83_goodB2G(char * dataCopy)
{
    data = dataCopy;
    /* POTENTIAL FLAW: Allocate memory on the heap */
    data = (char *)malloc(100*sizeof(char));
    if (data == NULL) {exit(-1);}
    /* Initialize and make use of data */
    strcpy(data, "A String");
    printLine(data);
}

CWE401_Memory_Leak__char_malloc_83_goodB2G::~CWE401_Memory_Leak__char_malloc_83_goodB2G()
{
    /* FIX: Deallocate memory */
    free(data);
}
}
#endif /* OMITGOOD */
