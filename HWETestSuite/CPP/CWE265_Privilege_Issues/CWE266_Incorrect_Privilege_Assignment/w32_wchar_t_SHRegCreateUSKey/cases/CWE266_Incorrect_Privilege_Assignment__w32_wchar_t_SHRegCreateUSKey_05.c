/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE266_Incorrect_Privilege_Assignment__w32_wchar_t_SHRegCreateUSKey_05.c
Label Definition File: CWE266_Incorrect_Privilege_Assignment__w32.label.xml
Template File: point-flaw-05.tmpl.c
*/
/*
 * @testsuite Juliet_Cpp_1.3
* @description
 * CWE: 266 Incorrect Privilege Assignment
 * Sinks: SHRegCreateUSKey
 *    GoodSink: Create a registry key using SHRegCreateUSKeyW() without excessive privileges
 *    BadSink : Create a registry key using SHRegCreateUSKeyW() with excessive privileges
 * Flow Variant: 05 Control flow: if(staticTrue) and if(staticFalse)
 *
 * */

#include "std_testcase.h"

#include <windows.h>
#pragma comment( lib, "shlwapi" )
#include <shlwapi.h>

/* The two variables below are not defined as "const", but are never
   assigned any other value, so a tool should be able to identify that
   reads of these will always return their initialized values. */
static int staticTrue = 1; /* true */
static int staticFalse = 0; /* false */

#ifndef OMITBAD

void CWE266_Incorrect_Privilege_Assignment__w32_wchar_t_SHRegCreateUSKey_05_bad()
{
    if(staticTrue)
    {
        {
            wchar_t * keyName = L"TEST\\TestKey";
            HUSKEY hKey = HKEY_CURRENT_USER;
            /* FLAW: Call SHRegCreateUSKeyW() with KEY_ALL_ACCESS as the 2nd parameter */
            if (SHRegCreateUSKeyW(
                        keyName,
                        KEY_ALL_ACCESS,
                        NULL,
                        &hKey,
                        SHREGSET_HKCU) != ERROR_SUCCESS)
            {
                printLine("Registry key could not be created");
            }
            else
            {
                printLine("Registry key created successfully");
                SHRegCloseUSKey(hKey);
            }
        }
    }
}

#endif /* OMITBAD */

#ifndef OMITGOOD

/* good1() uses if(staticFalse) instead of if(staticTrue) */
static void good1()
{
    if(staticFalse)
    {
        /* INCIDENTAL: CWE 561 Dead Code, the code below will never run */
        printLine("Benign, fixed string");
    }
    else
    {
        {
            wchar_t * keyName = L"TEST\\TestKey";
            HUSKEY hKey = HKEY_CURRENT_USER;
            /* FIX: Call SHRegCreateUSKeyW() without KEY_ALL_ACCESS as the 2nd parameter to limit access */
            if (SHRegCreateUSKeyW(
                        keyName,
                        KEY_WRITE,
                        NULL,
                        &hKey,
                        SHREGSET_HKCU) != ERROR_SUCCESS)
            {
                printLine("Registry key could not be created");
            }
            else
            {
                printLine("Registry key created successfully");
                SHRegCloseUSKey(hKey);
            }
        }
    }
}

/* good2() reverses the bodies in the if statement */
static void good2()
{
    if(staticTrue)
    {
        {
            wchar_t * keyName = L"TEST\\TestKey";
            HUSKEY hKey = HKEY_CURRENT_USER;
            /* FIX: Call SHRegCreateUSKeyW() without KEY_ALL_ACCESS as the 2nd parameter to limit access */
            if (SHRegCreateUSKeyW(
                        keyName,
                        KEY_WRITE,
                        NULL,
                        &hKey,
                        SHREGSET_HKCU) != ERROR_SUCCESS)
            {
                printLine("Registry key could not be created");
            }
            else
            {
                printLine("Registry key created successfully");
                SHRegCloseUSKey(hKey);
            }
        }
    }
}

void CWE266_Incorrect_Privilege_Assignment__w32_wchar_t_SHRegCreateUSKey_05_good()
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
    CWE266_Incorrect_Privilege_Assignment__w32_wchar_t_SHRegCreateUSKey_05_good();
    printLine("Finished good()");
#endif /* OMITGOOD */
#ifndef OMITBAD
    printLine("Calling bad()...");
    CWE266_Incorrect_Privilege_Assignment__w32_wchar_t_SHRegCreateUSKey_05_bad();
    printLine("Finished bad()");
#endif /* OMITBAD */
    return 0;
}

#endif
