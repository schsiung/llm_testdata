/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE676_Use_of_Potentially_Dangerous_Function__basic_03.cpp
Label Definition File: CWE676_Use_of_Potentially_Dangerous_Function__basic.label.xml
Template File: point-flaw-03.tmpl.cpp
*/
/*
 * @testsuite Juliet_Cpp_1.3
* @description
 * CWE: 676 Use of Potentially Dangerous Function
 * Sinks:
 *    GoodSink: Use cin after specifying the length of the input
 *    BadSink : Use cin without specifying the length of the input
 * Flow Variant: 03 Control flow: if(5==5) and if(5!=5)
 *
 * */

#include "std_testcase.h"

#include <iostream>

using namespace std;

#define CHAR_BUFFER_SIZE 10

namespace CWE676_Use_of_Potentially_Dangerous_Function__basic_03
{

#ifndef OMITBAD

void bad()
{
    if(5==5)
    {
        {
            char charBuffer[CHAR_BUFFER_SIZE];
            /* FLAW: using cin in an inherently dangerous fashion */
            /* INCIDENTAL CWE120 Buffer Overflow since cin extraction is unbounded. */
            cin >> charBuffer;
            charBuffer[CHAR_BUFFER_SIZE-1] = '\0';
            printLine(charBuffer);
        }
    }
}

#endif /* OMITBAD */

#ifndef OMITGOOD

/* good1() uses if(5!=5) instead of if(5==5) */
static void good1()
{
    if(5!=5)
    {
        /* INCIDENTAL: CWE 561 Dead Code, the code below will never run */
        printLine("Benign, fixed string");
    }
    else
    {
        {
            char charBuffer[CHAR_BUFFER_SIZE];
            /* FIX: Use cin after specifying the length of the input */
            cin.width(CHAR_BUFFER_SIZE);
            cin >> charBuffer;
            charBuffer[CHAR_BUFFER_SIZE-1] = '\0';
            printLine(charBuffer);
        }
    }
}

/* good2() reverses the bodies in the if statement */
static void good2()
{
    if(5==5)
    {
        {
            char charBuffer[CHAR_BUFFER_SIZE];
            /* FIX: Use cin after specifying the length of the input */
            cin.width(CHAR_BUFFER_SIZE);
            cin >> charBuffer;
            charBuffer[CHAR_BUFFER_SIZE-1] = '\0';
            printLine(charBuffer);
        }
    }
}

void good()
{
    good1();
    good2();
}

#endif /* OMITGOOD */

} /* close namespace */

/* Below is the main(). It is only used when building this testcase on
   its own for testing or for building a binary to use in testing binary
   analysis tools. It is not used when compiling all the testcases as one
   application, which is how source code analysis tools are tested. */

#ifdef INCLUDEMAIN

using namespace CWE676_Use_of_Potentially_Dangerous_Function__basic_03; /* so that we can use good and bad easily */

int main(int argc, char * argv[])
{
    /* seed randomness */
    srand( (unsigned)time(NULL) );
#ifndef OMITGOOD
    printLine("Calling good()...");
    good();
    printLine("Finished good()");
#endif /* OMITGOOD */
#ifndef OMITBAD
    printLine("Calling bad()...");
    bad();
    printLine("Finished bad()");
#endif /* OMITBAD */
    return 0;
}

#endif
