/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE126_Buffer_Overread__malloc_char_memmove_15.c
Label Definition File: CWE126_Buffer_Overread__malloc.label.xml
Template File: sources-sink-15.tmpl.c
*/
/*
 * @testsuite Juliet_Cpp_1.3
* @description
 * CWE: 126 Buffer Over-read
 * BadSource:  Use a small buffer
 * GoodSource: Use a large buffer
 * Sink: memmove
 *    BadSink : Copy data to string using memmove
 * Flow Variant: 15 Control flow: switch(6)
 *
 * */

#include "std_testcase.h"

#include <wchar.h>

#ifndef OMITBAD

void CWE126_Buffer_Overread__malloc_char_memmove_15_bad()
{
    char * data;
    data = NULL;
    switch(6)
    {
    case 6:
        /* FLAW: Use a small buffer */
        data = (char *)malloc(50*sizeof(char));
        if (data == NULL) {exit(-1);}
        memset(data, 'A', 50-1); /* fill with 'A's */
        data[50-1] = '\0'; /* null terminate */
        break;
    default:
        /* INCIDENTAL: CWE 561 Dead Code, the code below will never run */
        printLine("Benign, fixed string");
        break;
    }
    {
        char dest[100];
        memset(dest, 'C', 100-1);
        dest[100-1] = '\0'; /* null terminate */
        /* POTENTIAL FLAW: using memmove with the length of the dest where data
         * could be smaller than dest causing buffer overread */
        memmove(dest, data, strlen(dest)*sizeof(char));
        dest[100-1] = '\0';
        printLine(dest);
        free(data);
    }
}

#endif /* OMITBAD */

#ifndef OMITGOOD

/* goodG2B1() - use goodsource and badsink by changing the switch to switch(5) */
static void goodG2B1()
{
    char * data;
    data = NULL;
    switch(5)
    {
    case 6:
        /* INCIDENTAL: CWE 561 Dead Code, the code below will never run */
        printLine("Benign, fixed string");
        break;
    default:
        /* FIX: Use a large buffer */
        data = (char *)malloc(100*sizeof(char));
        if (data == NULL) {exit(-1);}
        memset(data, 'A', 100-1); /* fill with 'A's */
        data[100-1] = '\0'; /* null terminate */
        break;
    }
    {
        char dest[100];
        memset(dest, 'C', 100-1);
        dest[100-1] = '\0'; /* null terminate */
        /* POTENTIAL FLAW: using memmove with the length of the dest where data
         * could be smaller than dest causing buffer overread */
        memmove(dest, data, strlen(dest)*sizeof(char));
        dest[100-1] = '\0';
        printLine(dest);
        free(data);
    }
}

/* goodG2B2() - use goodsource and badsink by reversing the blocks in the switch */
static void goodG2B2()
{
    char * data;
    data = NULL;
    switch(6)
    {
    case 6:
        /* FIX: Use a large buffer */
        data = (char *)malloc(100*sizeof(char));
        if (data == NULL) {exit(-1);}
        memset(data, 'A', 100-1); /* fill with 'A's */
        data[100-1] = '\0'; /* null terminate */
        break;
    default:
        /* INCIDENTAL: CWE 561 Dead Code, the code below will never run */
        printLine("Benign, fixed string");
        break;
    }
    {
        char dest[100];
        memset(dest, 'C', 100-1);
        dest[100-1] = '\0'; /* null terminate */
        /* POTENTIAL FLAW: using memmove with the length of the dest where data
         * could be smaller than dest causing buffer overread */
        memmove(dest, data, strlen(dest)*sizeof(char));
        dest[100-1] = '\0';
        printLine(dest);
        free(data);
    }
}

void CWE126_Buffer_Overread__malloc_char_memmove_15_good()
{
    goodG2B1();
    goodG2B2();
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
    CWE126_Buffer_Overread__malloc_char_memmove_15_good();
    printLine("Finished good()");
#endif /* OMITGOOD */
#ifndef OMITBAD
    printLine("Calling bad()...");
    CWE126_Buffer_Overread__malloc_char_memmove_15_bad();
    printLine("Finished bad()");
#endif /* OMITBAD */
    return 0;
}

#endif
