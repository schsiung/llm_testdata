/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE134_Uncontrolled_Format_String__wchar_t_environment_printf_61a.c
Label Definition File: CWE134_Uncontrolled_Format_String.label.xml
Template File: sources-sinks-61a.tmpl.c
*/
/*
 * @testsuite Juliet_Cpp_1.3
* @description
 * CWE: 134 Uncontrolled Format String
 * BadSource: environment Read input from an environment variable
 * GoodSource: Copy a fixed string into data
 * Sinks: printf
 *    GoodSink: wprintf with "%s" as the first argument and data as the second
 *    BadSink : wprintf with only data as an argument
 * Flow Variant: 61 Data flow: data returned from one function to another in different source files
 *
 * */

#include "std_testcase.h"

#ifndef _WIN32
#include <wchar.h>
#endif

#define ENV_VARIABLE L"ADD"

#ifdef _WIN32
#define GETENV _wgetenv
#else
#define GETENV getenv
#endif

#ifndef OMITBAD

/* bad function declaration */
wchar_t * CWE134_Uncontrolled_Format_String__wchar_t_environment_printf_61b_badSource(wchar_t * data);

void CWE134_Uncontrolled_Format_String__wchar_t_environment_printf_61_bad()
{
    wchar_t * data;
    wchar_t dataBuffer[100] = L"";
    data = dataBuffer;
    data = CWE134_Uncontrolled_Format_String__wchar_t_environment_printf_61b_badSource(data);
    /* POTENTIAL FLAW: Do not specify the format allowing a possible format string vulnerability */
    wprintf(data);
}

#endif /* OMITBAD */

#ifndef OMITGOOD

/* goodG2B uses the GoodSource with the BadSink */
wchar_t * CWE134_Uncontrolled_Format_String__wchar_t_environment_printf_61b_goodG2BSource(wchar_t * data);

static void goodG2B()
{
    wchar_t * data;
    wchar_t dataBuffer[100] = L"";
    data = dataBuffer;
    data = CWE134_Uncontrolled_Format_String__wchar_t_environment_printf_61b_goodG2BSource(data);
    /* POTENTIAL FLAW: Do not specify the format allowing a possible format string vulnerability */
    wprintf(data);
}

/* goodB2G uses the BadSource with the GoodSink */
wchar_t * CWE134_Uncontrolled_Format_String__wchar_t_environment_printf_61b_goodB2GSource(wchar_t * data);

static void goodB2G()
{
    wchar_t * data;
    wchar_t dataBuffer[100] = L"";
    data = dataBuffer;
    data = CWE134_Uncontrolled_Format_String__wchar_t_environment_printf_61b_goodB2GSource(data);
    /* FIX: Specify the format disallowing a format string vulnerability */
    wprintf(L"%s\n", data);
}

void CWE134_Uncontrolled_Format_String__wchar_t_environment_printf_61_good()
{
    goodG2B();
    goodB2G();
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
    CWE134_Uncontrolled_Format_String__wchar_t_environment_printf_61_good();
    printLine("Finished good()");
#endif /* OMITGOOD */
#ifndef OMITBAD
    printLine("Calling bad()...");
    CWE134_Uncontrolled_Format_String__wchar_t_environment_printf_61_bad();
    printLine("Finished bad()");
#endif /* OMITBAD */
    return 0;
}

#endif
