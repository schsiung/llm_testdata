/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE266_Incorrect_Privilege_Assignment__w32_wchar_t_RegCreateKeyEx_04.c
Label Definition File: CWE266_Incorrect_Privilege_Assignment__w32.label.xml
Template File: point-flaw-04.tmpl.c
*/
/*
 * @testsuite Juliet_Cpp_1.3
* @description
 * CWE: 266 Incorrect Privilege Assignment
 * Sinks: RegCreateKeyEx
 *    GoodSink: Create a registry key using RegCreateKeyExW() without excessive privileges
 *    BadSink : Create a registry key using RegCreateKeyExW() with excessive privileges
 * Flow Variant: 04 Control flow: if(STATIC_CONST_TRUE) and if(STATIC_CONST_FALSE)
 *
 * */

#include "std_testcase.h"

#include <windows.h>
#pragma comment( lib, "advapi32" )

/* The two variables below are declared "const", so a tool should
   be able to identify that reads of these will always return their
   initialized values. */
static const int STATIC_CONST_TRUE = 1; /* true */
static const int STATIC_CONST_FALSE = 0; /* false */

#ifndef OMITBAD

void CWE266_Incorrect_Privilege_Assignment__w32_wchar_t_RegCreateKeyEx_04_bad()
{
    if(STATIC_CONST_TRUE)
    {
        {
            wchar_t * keyName = L"TEST\\TestKey";
            HKEY hKey;
            /* FLAW: Call RegCreateKeyExW() with KEY_ALL_ACCESS as the 6th parameter */
            if (RegCreateKeyExW(
                        HKEY_CURRENT_USER,
                        keyName,
                        0,
                        NULL,
                        REG_OPTION_NON_VOLATILE,
                        KEY_ALL_ACCESS,
                        NULL,
                        &hKey,
                        NULL) != ERROR_SUCCESS)
            {
                printLine("Registry key could not be created");
            }
            else
            {
                printLine("Registry key created successfully");
                RegCloseKey(hKey);
            }
        }
    }
}

#endif /* OMITBAD */

#ifndef OMITGOOD

/* good1() uses if(STATIC_CONST_FALSE) instead of if(STATIC_CONST_TRUE) */
static void good1()
{
    if(STATIC_CONST_FALSE)
    {
        /* INCIDENTAL: CWE 561 Dead Code, the code below will never run */
        printLine("Benign, fixed string");
    }
    else
    {
        {
            wchar_t * keyName = L"TEST\\TestKey";
            HKEY hKey;
            /* FIX: Call RegCreateKeyExW() without KEY_ALL_ACCESS as the 6th parameter to limit access */
            if (RegCreateKeyExW(
                        HKEY_CURRENT_USER,
                        keyName,
                        0,
                        NULL,
                        REG_OPTION_NON_VOLATILE,
                        KEY_WRITE,
                        NULL,
                        &hKey,
                        NULL) != ERROR_SUCCESS)
            {
                printLine("Registry key could not be created");
            }
            else
            {
                printLine("Registry key created successfully");
                RegCloseKey(hKey);
            }
        }
    }
}

/* good2() reverses the bodies in the if statement */
static void good2()
{
    if(STATIC_CONST_TRUE)
    {
        {
            wchar_t * keyName = L"TEST\\TestKey";
            HKEY hKey;
            /* FIX: Call RegCreateKeyExW() without KEY_ALL_ACCESS as the 6th parameter to limit access */
            if (RegCreateKeyExW(
                        HKEY_CURRENT_USER,
                        keyName,
                        0,
                        NULL,
                        REG_OPTION_NON_VOLATILE,
                        KEY_WRITE,
                        NULL,
                        &hKey,
                        NULL) != ERROR_SUCCESS)
            {
                printLine("Registry key could not be created");
            }
            else
            {
                printLine("Registry key created successfully");
                RegCloseKey(hKey);
            }
        }
    }
}

void CWE266_Incorrect_Privilege_Assignment__w32_wchar_t_RegCreateKeyEx_04_good()
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
    CWE266_Incorrect_Privilege_Assignment__w32_wchar_t_RegCreateKeyEx_04_good();
    printLine("Finished good()");
#endif /* OMITGOOD */
#ifndef OMITBAD
    printLine("Calling bad()...");
    CWE266_Incorrect_Privilege_Assignment__w32_wchar_t_RegCreateKeyEx_04_bad();
    printLine("Finished bad()");
#endif /* OMITBAD */
    return 0;
}

#endif
