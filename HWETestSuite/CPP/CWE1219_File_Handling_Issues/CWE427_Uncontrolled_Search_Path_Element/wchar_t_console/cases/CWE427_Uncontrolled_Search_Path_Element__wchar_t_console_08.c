/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE427_Uncontrolled_Search_Path_Element__wchar_t_console_08.c
Label Definition File: CWE427_Uncontrolled_Search_Path_Element.label.xml
Template File: sources-sink-08.tmpl.c
*/
/*
 * @testsuite Juliet_Cpp_1.3
* @description
 * CWE: 427 Uncontrolled Search Path Element
 * BadSource: console Read input from the console
 * GoodSource: Use a hardcoded path
 * Sink:
 *    BadSink : Set the environment variable
 * Flow Variant: 08 Control flow: if(staticReturnsTrue()) and if(staticReturnsFalse())
 *
 * */

#include "std_testcase.h"

#include <wchar.h>
#ifdef _WIN32
#define NEW_PATH L"%SystemRoot%\\system32"
#define PUTENV _wputenv
#else
#define NEW_PATH L"/bin"
#define PUTENV putenv
#endif

/* The two function below always return the same value, so a tool
 * should be able to identify that calls to the functions will always
 * return a fixed value.
 */
static int staticReturnsTrue()
{
    return 1;
}

static int staticReturnsFalse()
{
    return 0;
}

#ifndef OMITBAD

void CWE427_Uncontrolled_Search_Path_Element__wchar_t_console_08_bad()
{
    wchar_t * data;
    wchar_t dataBuffer[250] = L"PATH=";
    data = dataBuffer;
    if(staticReturnsTrue())
    {
        {
            /* Read input from the console */
            size_t dataLen = wcslen(data);
            /* if there is room in data, read into it from the console */
            if (250-dataLen > 1)
            {
                /* POTENTIAL FLAW: Read data from the console */
                if (fgetws(data+dataLen, (int)(250-dataLen), stdin) != NULL)
                {
                    /* The next few lines remove the carriage return from the string that is
                     * inserted by fgetws() */
                    dataLen = wcslen(data);
                    if (dataLen > 0 && data[dataLen-1] == L'\n')
                    {
                        data[dataLen-1] = L'\0';
                    }
                }
                else
                {
                    printLine("fgetws() failed");
                    /* Restore NUL terminator if fgetws fails */
                    data[dataLen] = L'\0';
                }
            }
        }
    }
    /* POTENTIAL FLAW: Set a new environment variable with a path that is possibly insecure */
    PUTENV(data);
}

#endif /* OMITBAD */

#ifndef OMITGOOD

/* goodG2B1() - use goodsource and badsink by changing the staticReturnsTrue() to staticReturnsFalse() */
static void goodG2B1()
{
    wchar_t * data;
    wchar_t dataBuffer[250] = L"PATH=";
    data = dataBuffer;
    if(staticReturnsFalse())
    {
        /* INCIDENTAL: CWE 561 Dead Code, the code below will never run */
        printLine("Benign, fixed string");
    }
    else
    {
        /* FIX: Set the path as the "system" path */
        wcscat(data, NEW_PATH);
    }
    /* POTENTIAL FLAW: Set a new environment variable with a path that is possibly insecure */
    PUTENV(data);
}

/* goodG2B2() - use goodsource and badsink by reversing the blocks in the if statement */
static void goodG2B2()
{
    wchar_t * data;
    wchar_t dataBuffer[250] = L"PATH=";
    data = dataBuffer;
    if(staticReturnsTrue())
    {
        /* FIX: Set the path as the "system" path */
        wcscat(data, NEW_PATH);
    }
    /* POTENTIAL FLAW: Set a new environment variable with a path that is possibly insecure */
    PUTENV(data);
}

void CWE427_Uncontrolled_Search_Path_Element__wchar_t_console_08_good()
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
    CWE427_Uncontrolled_Search_Path_Element__wchar_t_console_08_good();
    printLine("Finished good()");
#endif /* OMITGOOD */
#ifndef OMITBAD
    printLine("Calling bad()...");
    CWE427_Uncontrolled_Search_Path_Element__wchar_t_console_08_bad();
    printLine("Finished bad()");
#endif /* OMITBAD */
    return 0;
}

#endif
