/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE134_Uncontrolled_Format_String__wchar_t_file_snprintf_63b.c
Label Definition File: CWE134_Uncontrolled_Format_String.label.xml
Template File: sources-sinks-63b.tmpl.c
*/
/*
 * @testsuite Juliet_Cpp_1.3
* @description
 * CWE: 134 Uncontrolled Format String
 * BadSource: file Read input from a file
 * GoodSource: Copy a fixed string into data
 * Sinks: swprintf
 *    GoodSink: snwprintf with "%s" as the third argument and data as the fourth
 *    BadSink : snwprintf with data as the third argument
 * Flow Variant: 63 Data flow: pointer to data passed from one function to another in different source files
 *
 * */

#include "std_testcase.h"

#ifndef _WIN32
#include <wchar.h>
#endif

#ifdef _WIN32
#define FILENAME "C:\\temp\\file.txt"
#else
#define FILENAME "/tmp/file.txt"
#endif

#ifdef _WIN32
#define SNPRINTF _snwprintf
#else
#define SNPRINTF swprintf
#endif

#ifndef OMITBAD

void CWE134_Uncontrolled_Format_String__wchar_t_file_snprintf_63b_badSink(wchar_t * * dataPtr)
{
    wchar_t * data = *dataPtr;
    {
        wchar_t dest[100] = L"";
        /* POTENTIAL FLAW: Do not specify the format allowing a possible format string vulnerability */
        SNPRINTF(dest, 100-1, data);
        printWLine(dest);
    }
}

#endif /* OMITBAD */

#ifndef OMITGOOD

/* goodG2B uses the GoodSource with the BadSink */
void CWE134_Uncontrolled_Format_String__wchar_t_file_snprintf_63b_goodG2BSink(wchar_t * * dataPtr)
{
    wchar_t * data = *dataPtr;
    {
        wchar_t dest[100] = L"";
        /* POTENTIAL FLAW: Do not specify the format allowing a possible format string vulnerability */
        SNPRINTF(dest, 100-1, data);
        printWLine(dest);
    }
}

/* goodB2G uses the BadSource with the GoodSink */
void CWE134_Uncontrolled_Format_String__wchar_t_file_snprintf_63b_goodB2GSink(wchar_t * * dataPtr)
{
    wchar_t * data = *dataPtr;
    {
        wchar_t dest[100] = L"";
        /* FIX: Specify the format disallowing a format string vulnerability */
        SNPRINTF(dest, 100-1, L"%s", data);
        printWLine(dest);
    }
}

#endif /* OMITGOOD */
