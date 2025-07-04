/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE252_Unchecked_Return_Value__wchar_t_putc_01.c
Label Definition File: CWE252_Unchecked_Return_Value.label.xml
Template File: point-flaw-01.tmpl.c
*/
/*
 * @testsuite Juliet_Cpp_1.3
* @description
 * CWE: 252 Unchecked Return Value
 * Sinks: putc
 *    GoodSink: Check if putwc() fails
 *    BadSink : Do not check if putwc() fails
 * Flow Variant: 01 Baseline
 *
 * */

#include "std_testcase.h"

#ifndef _WIN32
#include <wchar.h>
#endif

#ifndef OMITBAD

void CWE252_Unchecked_Return_Value__wchar_t_putc_01_bad()
{
    /* FLAW: Do not check the return value */
    putwc((wchar_t)L'A', stdout);
}

#endif /* OMITBAD */

#ifndef OMITGOOD

static void good1()
{
    /* FIX: check the return value */
    if (putwc((wchar_t)L'A', stdout) == WEOF)
    {
        printLine("putwc failed!");
    }
}

void CWE252_Unchecked_Return_Value__wchar_t_putc_01_good()
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
    CWE252_Unchecked_Return_Value__wchar_t_putc_01_good();
    printLine("Finished good()");
#endif /* OMITGOOD */
#ifndef OMITBAD
    printLine("Calling bad()...");
    CWE252_Unchecked_Return_Value__wchar_t_putc_01_bad();
    printLine("Finished bad()");
#endif /* OMITBAD */
    return 0;
}

#endif
