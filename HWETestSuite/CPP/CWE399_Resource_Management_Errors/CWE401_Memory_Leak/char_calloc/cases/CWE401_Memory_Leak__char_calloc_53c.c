/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE401_Memory_Leak__char_calloc_53c.c
Label Definition File: CWE401_Memory_Leak.c.label.xml
Template File: sources-sinks-53c.tmpl.c
*/
/*
 * @testsuite Juliet_Cpp_1.3
* @description
 * CWE: 401 Memory Leak
 * BadSource: calloc Allocate data using calloc()
 * GoodSource: Allocate data on the stack
 * Sinks:
 *    GoodSink: call free() on data
 *    BadSink : no deallocation of data
 * Flow Variant: 53 Data flow: data passed as an argument from one function through two others to a fourth; all four functions are in different source files
 *
 * */

#include "std_testcase.h"

#include <wchar.h>

#ifndef OMITBAD

/* bad function declaration */
void CWE401_Memory_Leak__char_calloc_53d_badSink(char * data);

void CWE401_Memory_Leak__char_calloc_53c_badSink(char * data)
{
    CWE401_Memory_Leak__char_calloc_53d_badSink(data);
}

#endif /* OMITBAD */

#ifndef OMITGOOD

/* goodG2B uses the GoodSource with the BadSink */
void CWE401_Memory_Leak__char_calloc_53d_goodG2BSink(char * data);

void CWE401_Memory_Leak__char_calloc_53c_goodG2BSink(char * data)
{
    CWE401_Memory_Leak__char_calloc_53d_goodG2BSink(data);
}

/* goodB2G uses the BadSource with the GoodSink */
void CWE401_Memory_Leak__char_calloc_53d_goodB2GSink(char * data);

void CWE401_Memory_Leak__char_calloc_53c_goodB2GSink(char * data)
{
    CWE401_Memory_Leak__char_calloc_53d_goodB2GSink(data);
}

#endif /* OMITGOOD */
