/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE121_Stack_Based_Buffer_Overflow__CWE805_int64_t_alloca_memcpy_67b.c
Label Definition File: CWE121_Stack_Based_Buffer_Overflow__CWE805.label.xml
Template File: sources-sink-67b.tmpl.c
*/
/*
 * @testsuite Juliet_Cpp_1.3
* @description
 * CWE: 121 Stack Based Buffer Overflow
 * BadSource:  Set data pointer to the bad buffer
 * GoodSource: Set data pointer to the good buffer
 * Sinks: memcpy
 *    BadSink : Copy int64_t array to data using memcpy
 * Flow Variant: 67 Data flow: data passed in a struct from one function to another in different source files
 *
 * */

#include "std_testcase.h"

typedef struct _CWE121_Stack_Based_Buffer_Overflow__CWE805_int64_t_alloca_memcpy_67_structType
{
    int64_t * structFirst;
} CWE121_Stack_Based_Buffer_Overflow__CWE805_int64_t_alloca_memcpy_67_structType;

#ifndef OMITBAD

void CWE121_Stack_Based_Buffer_Overflow__CWE805_int64_t_alloca_memcpy_67b_badSink(CWE121_Stack_Based_Buffer_Overflow__CWE805_int64_t_alloca_memcpy_67_structType myStruct)
{
    int64_t * data = myStruct.structFirst;
    {
        int64_t source[100] = {0}; /* fill with 0's */
        /* POTENTIAL FLAW: Possible buffer overflow if data < 100 */
        memcpy(data, source, 100*sizeof(int64_t));
        printLongLongLine(data[0]);
    }
}

#endif /* OMITBAD */

#ifndef OMITGOOD

/* goodG2B uses the GoodSource with the BadSink */
void CWE121_Stack_Based_Buffer_Overflow__CWE805_int64_t_alloca_memcpy_67b_goodG2BSink(CWE121_Stack_Based_Buffer_Overflow__CWE805_int64_t_alloca_memcpy_67_structType myStruct)
{
    int64_t * data = myStruct.structFirst;
    {
        int64_t source[100] = {0}; /* fill with 0's */
        /* POTENTIAL FLAW: Possible buffer overflow if data < 100 */
        memcpy(data, source, 100*sizeof(int64_t));
        printLongLongLine(data[0]);
    }
}

#endif /* OMITGOOD */
