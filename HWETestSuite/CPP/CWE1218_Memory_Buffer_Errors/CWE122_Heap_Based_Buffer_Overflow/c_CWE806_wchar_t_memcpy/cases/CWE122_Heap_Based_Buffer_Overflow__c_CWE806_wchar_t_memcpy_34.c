/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE122_Heap_Based_Buffer_Overflow__c_CWE806_wchar_t_memcpy_34.c
Label Definition File: CWE122_Heap_Based_Buffer_Overflow__c_CWE806.label.xml
Template File: sources-sink-34.tmpl.c
*/
/*
 * @testsuite Juliet_Cpp_1.3
* @description
 * CWE: 122 Heap Based Buffer Overflow
 * BadSource:  Initialize data as a large string
 * GoodSource: Initialize data as a small string
 * Sinks: memcpy
 *    BadSink : Copy data to string using memcpy
 * Flow Variant: 34 Data flow: use of a union containing two methods of accessing the same data (within the same function)
 *
 * */

#include "std_testcase.h"

#include <wchar.h>

typedef union
{
    wchar_t * unionFirst;
    wchar_t * unionSecond;
} CWE122_Heap_Based_Buffer_Overflow__c_CWE806_wchar_t_memcpy_34_unionType;

#ifndef OMITBAD

void CWE122_Heap_Based_Buffer_Overflow__c_CWE806_wchar_t_memcpy_34_bad()
{
    wchar_t * data;
    CWE122_Heap_Based_Buffer_Overflow__c_CWE806_wchar_t_memcpy_34_unionType myUnion;
    data = (wchar_t *)malloc(100*sizeof(wchar_t));
    if (data == NULL) {exit(-1);}
    /* FLAW: Initialize data as a large buffer that is larger than the small buffer used in the sink */
    wmemset(data, L'A', 100-1); /* fill with L'A's */
    data[100-1] = L'\0'; /* null terminate */
    myUnion.unionFirst = data;
    {
        wchar_t * data = myUnion.unionSecond;
        {
            wchar_t dest[50] = L"";
            /* POTENTIAL FLAW: Possible buffer overflow if data is larger than dest */
            memcpy(dest, data, wcslen(data)*sizeof(wchar_t));
            dest[50-1] = L'\0'; /* Ensure the destination buffer is null terminated */
            printWLine(data);
            free(data);
        }
    }
}

#endif /* OMITBAD */

#ifndef OMITGOOD

/* goodG2B() uses the GoodSource with the BadSink */
static void goodG2B()
{
    wchar_t * data;
    CWE122_Heap_Based_Buffer_Overflow__c_CWE806_wchar_t_memcpy_34_unionType myUnion;
    data = (wchar_t *)malloc(100*sizeof(wchar_t));
    if (data == NULL) {exit(-1);}
    /* FIX: Initialize data as a small buffer that as small or smaller than the small buffer used in the sink */
    wmemset(data, L'A', 50-1); /* fill with L'A's */
    data[50-1] = L'\0'; /* null terminate */
    myUnion.unionFirst = data;
    {
        wchar_t * data = myUnion.unionSecond;
        {
            wchar_t dest[50] = L"";
            /* POTENTIAL FLAW: Possible buffer overflow if data is larger than dest */
            memcpy(dest, data, wcslen(data)*sizeof(wchar_t));
            dest[50-1] = L'\0'; /* Ensure the destination buffer is null terminated */
            printWLine(data);
            free(data);
        }
    }
}

void CWE122_Heap_Based_Buffer_Overflow__c_CWE806_wchar_t_memcpy_34_good()
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
    CWE122_Heap_Based_Buffer_Overflow__c_CWE806_wchar_t_memcpy_34_good();
    printLine("Finished good()");
#endif /* OMITGOOD */
#ifndef OMITBAD
    printLine("Calling bad()...");
    CWE122_Heap_Based_Buffer_Overflow__c_CWE806_wchar_t_memcpy_34_bad();
    printLine("Finished bad()");
#endif /* OMITBAD */
    return 0;
}

#endif
