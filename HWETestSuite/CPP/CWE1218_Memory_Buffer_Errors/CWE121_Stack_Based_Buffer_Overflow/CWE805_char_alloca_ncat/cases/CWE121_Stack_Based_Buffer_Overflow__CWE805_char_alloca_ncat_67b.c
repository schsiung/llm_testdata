/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE121_Stack_Based_Buffer_Overflow__CWE805_char_alloca_ncat_67b.c
Label Definition File: CWE121_Stack_Based_Buffer_Overflow__CWE805.string.label.xml
Template File: sources-sink-67b.tmpl.c
*/
/*
 * @testsuite Juliet_Cpp_1.3
* @description
 * CWE: 121 Stack Based Buffer Overflow
 * BadSource:  Set data pointer to the bad buffer
 * GoodSource: Set data pointer to the good buffer
 * Sinks: ncat
 *    BadSink : Copy string to data using strncat
 * Flow Variant: 67 Data flow: data passed in a struct from one function to another in different source files
 *
 * */

#include "std_testcase.h"

#include <wchar.h>

typedef struct _CWE121_Stack_Based_Buffer_Overflow__CWE805_char_alloca_ncat_67_structType
{
    char * structFirst;
} CWE121_Stack_Based_Buffer_Overflow__CWE805_char_alloca_ncat_67_structType;

#ifndef OMITBAD

void CWE121_Stack_Based_Buffer_Overflow__CWE805_char_alloca_ncat_67b_badSink(CWE121_Stack_Based_Buffer_Overflow__CWE805_char_alloca_ncat_67_structType myStruct)
{
    char * data = myStruct.structFirst;
    {
        char source[100];
        memset(source, 'C', 100-1); /* fill with 'C's */
        source[100-1] = '\0'; /* null terminate */
        /* POTENTIAL FLAW: Possible buffer overflow if the sizeof(data)-strlen(data) is less than the length of source */
        strncat(data, source, 100);
        printLine(data);
    }
}

#endif /* OMITBAD */

#ifndef OMITGOOD

/* goodG2B uses the GoodSource with the BadSink */
void CWE121_Stack_Based_Buffer_Overflow__CWE805_char_alloca_ncat_67b_goodG2BSink(CWE121_Stack_Based_Buffer_Overflow__CWE805_char_alloca_ncat_67_structType myStruct)
{
    char * data = myStruct.structFirst;
    {
        char source[100];
        memset(source, 'C', 100-1); /* fill with 'C's */
        source[100-1] = '\0'; /* null terminate */
        /* POTENTIAL FLAW: Possible buffer overflow if the sizeof(data)-strlen(data) is less than the length of source */
        strncat(data, source, 100);
        printLine(data);
    }
}

#endif /* OMITGOOD */
