/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE252_Unchecked_Return_Value__wchar_t_fwrite_11.c
Label Definition File: CWE252_Unchecked_Return_Value.label.xml
Template File: point-flaw-11.tmpl.c
*/
/*
 * @testsuite Juliet_Cpp_1.3
* @description
 * CWE: 252 Unchecked Return Value
 * Sinks: fwrite
 *    GoodSink: Check if fwrite() fails
 *    BadSink : Do not check if fwrite() fails
 * Flow Variant: 11 Control flow: if(globalReturnsTrue()) and if(globalReturnsFalse())
 *
 * */

#include "std_testcase.h"

#ifndef _WIN32
#include <wchar.h>
#endif

#ifndef OMITBAD

void CWE252_Unchecked_Return_Value__wchar_t_fwrite_11_bad()
{
    if(globalReturnsTrue())
    {
        /* FLAW: Do not check the return value */
        fwrite((wchar_t *)L"string", sizeof(wchar_t), wcslen(L"string"), stdout);
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
        /* FIX: check the return value */
        if (fwrite((wchar_t *)L"string", sizeof(wchar_t), wcslen(L"string"), stdout) != wcslen(L"string"))
        {
            printLine("fwrite failed!");
        }
    }
}

/* good2() reverses the bodies in the if statement */
static void good2()
{
    if(globalReturnsTrue())
    {
        /* FIX: check the return value */
        if (fwrite((wchar_t *)L"string", sizeof(wchar_t), wcslen(L"string"), stdout) != wcslen(L"string"))
        {
            printLine("fwrite failed!");
        }
    }
}

void CWE252_Unchecked_Return_Value__wchar_t_fwrite_11_good()
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
    CWE252_Unchecked_Return_Value__wchar_t_fwrite_11_good();
    printLine("Finished good()");
#endif /* OMITGOOD */
#ifndef OMITBAD
    printLine("Calling bad()...");
    CWE252_Unchecked_Return_Value__wchar_t_fwrite_11_bad();
    printLine("Finished bad()");
#endif /* OMITBAD */
    return 0;
}

#endif
