/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE134_Uncontrolled_Format_String__wchar_t_console_vprintf_84_goodG2B.cpp
Label Definition File: CWE134_Uncontrolled_Format_String.vasinks.label.xml
Template File: sources-vasinks-84_goodG2B.tmpl.cpp
*/
/*
 * @testsuite Juliet_Cpp_1.3
* @description
 * CWE: 134 Uncontrolled Format String
 * BadSource: console Read input from the console
 * GoodSource: Copy a fixed string into data
 * Sinks: vprintf
 *    GoodSink: vwprintf with a format string
 *    BadSink : vwprintf without a format string
 * Flow Variant: 84 Data flow: data passed to class constructor and destructor by declaring the class object on the heap and deleting it after use
 *
 * */
#ifndef OMITGOOD

#include <stdarg.h>
#include "std_testcase.h"
#include "CWE134_Uncontrolled_Format_String__wchar_t_console_vprintf_84.h"

namespace CWE134_Uncontrolled_Format_String__wchar_t_console_vprintf_84
{
CWE134_Uncontrolled_Format_String__wchar_t_console_vprintf_84_goodG2B::CWE134_Uncontrolled_Format_String__wchar_t_console_vprintf_84_goodG2B(wchar_t * dataCopy)
{
    data = dataCopy;
    /* FIX: Use a fixed string that does not contain a format specifier */
    wcscpy(data, L"fixedstringtest");
}

static void goodG2BVaSink(wchar_t * data, ...)
{
    {
        va_list args;
        va_start(args, data);
        /* POTENTIAL FLAW: Do not specify the format allowing a possible format string vulnerability */
        vwprintf(data, args);
        va_end(args);
    }
}

CWE134_Uncontrolled_Format_String__wchar_t_console_vprintf_84_goodG2B::~CWE134_Uncontrolled_Format_String__wchar_t_console_vprintf_84_goodG2B()
{
    goodG2BVaSink(data, data);
}
}
#endif /* OMITGOOD */
