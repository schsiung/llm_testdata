/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE127_Buffer_Underread__wchar_t_alloca_memcpy_67a.c
Label Definition File: CWE127_Buffer_Underread.stack.label.xml
Template File: sources-sink-67a.tmpl.c
*/
/*
 * @testsuite Juliet_Cpp_1.3
* @description
 * CWE: 127 Buffer Under-read
 * BadSource:  Set data pointer to before the allocated memory buffer
 * GoodSource: Set data pointer to the allocated memory buffer
 * Sinks: memcpy
 *    BadSink : Copy data to string using memcpy
 * Flow Variant: 67 Data flow: data passed in a struct from one function to another in different source files
 *
 * */

#include "std_testcase.h"

#include <wchar.h>

typedef struct _CWE127_Buffer_Underread__wchar_t_alloca_memcpy_67_structType
{
    wchar_t * structFirst;
} CWE127_Buffer_Underread__wchar_t_alloca_memcpy_67_structType;

#ifndef OMITBAD

/* bad function declaration */
void CWE127_Buffer_Underread__wchar_t_alloca_memcpy_67b_badSink(CWE127_Buffer_Underread__wchar_t_alloca_memcpy_67_structType myStruct);

void CWE127_Buffer_Underread__wchar_t_alloca_memcpy_67_bad()
{
    wchar_t * data;
    CWE127_Buffer_Underread__wchar_t_alloca_memcpy_67_structType myStruct;
    wchar_t * dataBuffer = (wchar_t *)ALLOCA(100*sizeof(wchar_t));
    wmemset(dataBuffer, L'A', 100-1);
    dataBuffer[100-1] = L'\0';
    /* FLAW: Set data pointer to before the allocated memory buffer */
    data = dataBuffer - 8;
    myStruct.structFirst = data;
    CWE127_Buffer_Underread__wchar_t_alloca_memcpy_67b_badSink(myStruct);
}

#endif /* OMITBAD */

#ifndef OMITGOOD

/* goodG2B uses the GoodSource with the BadSink */
void CWE127_Buffer_Underread__wchar_t_alloca_memcpy_67b_goodG2BSink(CWE127_Buffer_Underread__wchar_t_alloca_memcpy_67_structType myStruct);

static void goodG2B()
{
    wchar_t * data;
    CWE127_Buffer_Underread__wchar_t_alloca_memcpy_67_structType myStruct;
    wchar_t * dataBuffer = (wchar_t *)ALLOCA(100*sizeof(wchar_t));
    wmemset(dataBuffer, L'A', 100-1);
    dataBuffer[100-1] = L'\0';
    /* FIX: Set data pointer to the allocated memory buffer */
    data = dataBuffer;
    myStruct.structFirst = data;
    CWE127_Buffer_Underread__wchar_t_alloca_memcpy_67b_goodG2BSink(myStruct);
}

void CWE127_Buffer_Underread__wchar_t_alloca_memcpy_67_good()
{
    goodG2B();
}

#endif /* OMITGOOD */

/* Below is the main(). It is only used when building this testcase on
 * its own for testing or for building a binary to use in testing binary
 * analysis tools. It is not used when compiling all the testcases as one
 * application, which is how source code analysis tools are tested.
 */

#ifdef INCLUDEMAIN

int main(int argc, char * argv[])
{
    /* seed randomness */
    srand( (unsigned)time(NULL) );
#ifndef OMITGOOD
    printLine("Calling good()...");
    CWE127_Buffer_Underread__wchar_t_alloca_memcpy_67_good();
    printLine("Finished good()");
#endif /* OMITGOOD */
#ifndef OMITBAD
    printLine("Calling bad()...");
    CWE127_Buffer_Underread__wchar_t_alloca_memcpy_67_bad();
    printLine("Finished bad()");
#endif /* OMITBAD */
    return 0;
}

#endif
