/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE253_Incorrect_Check_of_Function_Return_Value__wchar_t_scanf_01.c
Label Definition File: CWE253_Incorrect_Check_of_Function_Return_Value.label.xml
Template File: point-flaw-01.tmpl.c
*/
/*
 * @testsuite Juliet_Cpp_1.3
* @description
 * CWE: 253 Incorrect Check of Return Value
 * Sinks: scanf
 *    GoodSink: Correctly check if wscanf() failed
 *    BadSink : Incorrectly check if wscanf() failed
 * Flow Variant: 01 Baseline
 *
 * */

#include "std_testcase.h"

#ifndef _WIN32
#include <wchar.h>
#endif

#ifndef OMITBAD

void CWE253_Incorrect_Check_of_Function_Return_Value__wchar_t_scanf_01_bad()
{
    {
        /* By initializing dataBuffer, we ensure this will not be the
         * CWE 690 (Unchecked Return Value To NULL Pointer) flaw for fgetws() and other variants */
        wchar_t dataBuffer[100] = L"";
        wchar_t * data = dataBuffer;
        /* FLAW: wscanf() might fail, in which case the return value will be EOF (-1),
         * but we are checking to see if the return value is 0 */
        if (wscanf(L"%99s\0", data) == 0)
        {
            printLine("wscanf failed!");
        }
    }
}

#endif /* OMITBAD */

#ifndef OMITGOOD

static void good1()
{
    {
        /* By initializing dataBuffer, we ensure this will not be the
         * CWE 690 (Unchecked Return Value To NULL Pointer) flaw for fgetws() and other variants */
        wchar_t dataBuffer[100] = L"";
        wchar_t * data = dataBuffer;
        /* FIX: check for the correct return value */
        if (wscanf(L"%99s\0", data) == EOF)
        {
            printLine("wscanf failed!");
        }
    }
}

void CWE253_Incorrect_Check_of_Function_Return_Value__wchar_t_scanf_01_good()
{
    good1();
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
    CWE253_Incorrect_Check_of_Function_Return_Value__wchar_t_scanf_01_good();
    printLine("Finished good()");
#endif /* OMITGOOD */
#ifndef OMITBAD
    printLine("Calling bad()...");
    CWE253_Incorrect_Check_of_Function_Return_Value__wchar_t_scanf_01_bad();
    printLine("Finished bad()");
#endif /* OMITBAD */
    return 0;
}

#endif
