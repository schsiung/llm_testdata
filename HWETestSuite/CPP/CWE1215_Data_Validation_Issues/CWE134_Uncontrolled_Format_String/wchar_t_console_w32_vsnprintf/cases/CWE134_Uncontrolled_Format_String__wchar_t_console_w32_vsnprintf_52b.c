/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE134_Uncontrolled_Format_String__wchar_t_console_w32_vsnprintf_52b.c
Label Definition File: CWE134_Uncontrolled_Format_String.vasinks.label.xml
Template File: sources-vasinks-52b.tmpl.c
*/
/*
 * @testsuite Juliet_Cpp_1.3
* @description
 * CWE: 134 Uncontrolled Format String
 * BadSource: console Read input from the console
 * GoodSource: Copy a fixed string into data
 * Sinks: w32_vsnprintf
 *    GoodSink: _vsnwprintf with a format string
 *    BadSink : _vsnwprintf without a format string
 * Flow Variant: 52 Data flow: data passed as an argument from one function to another to another in three different source files
 *
 * */

#include <stdarg.h>
#include "std_testcase.h"

#ifndef _WIN32
#include <wchar.h>
#endif

#ifndef OMITBAD

/* bad function declaration */
void CWE134_Uncontrolled_Format_String__wchar_t_console_w32_vsnprintf_52c_badSink(wchar_t * data);

void CWE134_Uncontrolled_Format_String__wchar_t_console_w32_vsnprintf_52b_badSink(wchar_t * data)
{
    CWE134_Uncontrolled_Format_String__wchar_t_console_w32_vsnprintf_52c_badSink(data);
}

#endif /* OMITBAD */

#ifndef OMITGOOD

/* goodG2B uses the GoodSource with the BadSink */
void CWE134_Uncontrolled_Format_String__wchar_t_console_w32_vsnprintf_52c_goodG2BSink(wchar_t * data);

void CWE134_Uncontrolled_Format_String__wchar_t_console_w32_vsnprintf_52b_goodG2BSink(wchar_t * data)
{
    CWE134_Uncontrolled_Format_String__wchar_t_console_w32_vsnprintf_52c_goodG2BSink(data);
}

/* goodB2G uses the BadSource with the GoodSink */
void CWE134_Uncontrolled_Format_String__wchar_t_console_w32_vsnprintf_52c_goodB2GSink(wchar_t * data);

void CWE134_Uncontrolled_Format_String__wchar_t_console_w32_vsnprintf_52b_goodB2GSink(wchar_t * data)
{
    CWE134_Uncontrolled_Format_String__wchar_t_console_w32_vsnprintf_52c_goodB2GSink(data);
}

#endif /* OMITGOOD */
