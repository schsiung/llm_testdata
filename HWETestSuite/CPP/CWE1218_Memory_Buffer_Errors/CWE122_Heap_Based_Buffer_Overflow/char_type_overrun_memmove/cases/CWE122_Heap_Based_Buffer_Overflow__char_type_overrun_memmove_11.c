/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE122_Heap_Based_Buffer_Overflow__char_type_overrun_memmove_11.c
Label Definition File: CWE122_Heap_Based_Buffer_Overflow.label.xml
Template File: point-flaw-11.tmpl.c
*/
/*
 * @testsuite Juliet_Cpp_1.3
* @description
 * CWE: 122 Heap Based Buffer Overflow
 * Sinks: type_overrun_memmove
 *    GoodSink: Perform the memmove() and prevent overwriting part of the structure
 *    BadSink : Overwrite part of the structure by incorrectly using the sizeof(struct) in memmove()
 * Flow Variant: 11 Control flow: if(globalReturnsTrue()) and if(globalReturnsFalse())
 *
 * */

#include "std_testcase.h"

#ifndef _WIN32
#include <wchar.h>
#endif

#define SRC_STR "0123456789abcdef0123456789abcde"

typedef struct _charVoid
{
    char charFirst[16];
    void * voidSecond;
    void * voidThird;
} charVoid;

#ifndef OMITBAD

void CWE122_Heap_Based_Buffer_Overflow__char_type_overrun_memmove_11_bad()
{
    if(globalReturnsTrue())
    {
        {
            charVoid * structCharVoid = (charVoid *)malloc(sizeof(charVoid));
            if (structCharVoid == NULL) {exit(-1);}
            structCharVoid->voidSecond = (void *)SRC_STR;
            /* Print the initial block pointed to by structCharVoid->voidSecond */
            printLine((char *)structCharVoid->voidSecond);
            /* FLAW: Use the sizeof(*structCharVoid) which will overwrite the pointer y */
            memmove(structCharVoid->charFirst, SRC_STR, sizeof(*structCharVoid));
            structCharVoid->charFirst[(sizeof(structCharVoid->charFirst)/sizeof(char))-1] = '\0'; /* null terminate the string */
            printLine((char *)structCharVoid->charFirst);
            printLine((char *)structCharVoid->voidSecond);
        }
    }
}

#endif /* OMITBAD */

#ifndef OMITGOOD

/* good1() uses if(globalReturnsFalse()) instead of if(globalReturnsTrue()) */
static void good1()
{
    if(globalReturnsFalse())
    {
        /* INCIDENTAL: CWE 561 Dead Code, the code below will never run */
        printLine("Benign, fixed string");
    }
    else
    {
        {
            charVoid * structCharVoid = (charVoid *)malloc(sizeof(charVoid));
            if (structCharVoid == NULL) {exit(-1);}
            structCharVoid->voidSecond = (void *)SRC_STR;
            /* Print the initial block pointed to by structCharVoid->voidSecond */
            printLine((char *)structCharVoid->voidSecond);
            /* FIX: Use the sizeof(structCharVoid->charFirst) to avoid overwriting the pointer y */
            memmove(structCharVoid->charFirst, SRC_STR, sizeof(structCharVoid->charFirst));
            structCharVoid->charFirst[(sizeof(structCharVoid->charFirst)/sizeof(char))-1] = '\0'; /* null terminate the string */
            printLine((char *)structCharVoid->charFirst);
            printLine((char *)structCharVoid->voidSecond);
        }
    }
}

/* good2() reverses the bodies in the if statement */
static void good2()
{
    if(globalReturnsTrue())
    {
        {
            charVoid * structCharVoid = (charVoid *)malloc(sizeof(charVoid));
            if (structCharVoid == NULL) {exit(-1);}
            structCharVoid->voidSecond = (void *)SRC_STR;
            /* Print the initial block pointed to by structCharVoid->voidSecond */
            printLine((char *)structCharVoid->voidSecond);
            /* FIX: Use the sizeof(structCharVoid->charFirst) to avoid overwriting the pointer y */
            memmove(structCharVoid->charFirst, SRC_STR, sizeof(structCharVoid->charFirst));
            structCharVoid->charFirst[(sizeof(structCharVoid->charFirst)/sizeof(char))-1] = '\0'; /* null terminate the string */
            printLine((char *)structCharVoid->charFirst);
            printLine((char *)structCharVoid->voidSecond);
        }
    }
}

void CWE122_Heap_Based_Buffer_Overflow__char_type_overrun_memmove_11_good()
{
    good1();
    good2();
}

#endif /* OMITGOOD */

/* Below is the main(). It is only used when building this testcase on
   its own for testing or for building a binary to use in testing binary
   analysis tools. It is not used when compiling all the testcases as one
   application, which is how source code analysis tools are tested. */

#ifdef INCLUDEMAIN

int main(int argc, char * argv[])
{
    /* seed randomness */
    srand( (unsigned)time(NULL) );
#ifndef OMITGOOD
    printLine("Calling good()...");
    CWE122_Heap_Based_Buffer_Overflow__char_type_overrun_memmove_11_good();
    printLine("Finished good()");
#endif /* OMITGOOD */
#ifndef OMITBAD
    printLine("Calling bad()...");
    CWE122_Heap_Based_Buffer_Overflow__char_type_overrun_memmove_11_bad();
    printLine("Finished bad()");
#endif /* OMITBAD */
    return 0;
}

#endif
