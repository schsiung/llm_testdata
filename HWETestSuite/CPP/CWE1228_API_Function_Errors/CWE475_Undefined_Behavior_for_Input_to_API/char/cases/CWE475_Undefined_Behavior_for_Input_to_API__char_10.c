/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE475_Undefined_Behavior_for_Input_to_API__char_10.c
Label Definition File: CWE475_Undefined_Behavior_for_Input_to_API.label.xml
Template File: point-flaw-10.tmpl.c
*/
/*
 * @testsuite Juliet_Cpp_1.3
* @description
 * CWE: 475 Undefined Behavior for Input to API
 * Sinks:
 *    GoodSink: Copy overlapping memory regions using memmove()
 *    BadSink : Copy overlapping memory regions using memcpy()
 * Flow Variant: 10 Control flow: if(globalTrue) and if(globalFalse)
 *
 * */

#include "std_testcase.h"

#include <wchar.h>

#ifndef OMITBAD

void CWE475_Undefined_Behavior_for_Input_to_API__char_10_bad()
{
    if(globalTrue)
    {
        {
            char dataBuffer[100] = "";
            char * data = dataBuffer;
            strcpy(data, "abcdefghijklmnopqrstuvwxyz");
            /* FLAW: Copy overlapping memory regions using memcpy() for which the result is undefined */
            memcpy(data + 6, data + 4, 10*sizeof(char));
            printLine(data);
        }
    }
}

#endif /* OMITBAD */

#ifndef OMITGOOD

/* good1() uses if(globalFalse) instead of if(globalTrue) */
static void good1()
{
    if(globalFalse)
    {
        /* INCIDENTAL: CWE 561 Dead Code, the code below will never run */
        printLine("Benign, fixed string");
    }
    else
    {
        {
            char dataBuffer[100] = "";
            char * data = dataBuffer;
            strcpy(data, "abcdefghijklmnopqrstuvwxyz");
            /* FIX: Copy overlapping memory regions using memmove() */
            memmove(data + 6, data + 4, 10*sizeof(char));
            printLine(data);
        }
    }
}

/* good2() reverses the bodies in the if statement */
static void good2()
{
    if(globalTrue)
    {
        {
            char dataBuffer[100] = "";
            char * data = dataBuffer;
            strcpy(data, "abcdefghijklmnopqrstuvwxyz");
            /* FIX: Copy overlapping memory regions using memmove() */
            memmove(data + 6, data + 4, 10*sizeof(char));
            printLine(data);
        }
    }
}

void CWE475_Undefined_Behavior_for_Input_to_API__char_10_good()
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
    CWE475_Undefined_Behavior_for_Input_to_API__char_10_good();
    printLine("Finished good()");
#endif /* OMITGOOD */
#ifndef OMITBAD
    printLine("Calling bad()...");
    CWE475_Undefined_Behavior_for_Input_to_API__char_10_bad();
    printLine("Finished bad()");
#endif /* OMITBAD */
    return 0;
}

#endif
