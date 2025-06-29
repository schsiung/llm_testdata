/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE134_Uncontrolled_Format_String__wchar_t_console_fprintf_83_goodB2G.cpp
Label Definition File: CWE134_Uncontrolled_Format_String.label.xml
Template File: sources-sinks-83_goodB2G.tmpl.cpp
*/
/*
 * @testsuite Juliet_Cpp_1.3
* @description
 * CWE: 134 Uncontrolled Format String
 * BadSource: console Read input from the console
 * GoodSource: Copy a fixed string into data
 * Sinks: fprintf
 *    GoodSink: fwprintf with "%s" as the second argument and data as the third
 *    BadSink : fwprintf with data as the second argument
 * Flow Variant: 83 Data flow: data passed to class constructor and destructor by declaring the class object on the stack
 *
 * */
#ifndef OMITGOOD

#include "std_testcase.h"
#include "CWE134_Uncontrolled_Format_String__wchar_t_console_fprintf_83.h"

namespace CWE134_Uncontrolled_Format_String__wchar_t_console_fprintf_83
{
CWE134_Uncontrolled_Format_String__wchar_t_console_fprintf_83_goodB2G::CWE134_Uncontrolled_Format_String__wchar_t_console_fprintf_83_goodB2G(wchar_t * dataCopy)
{
    data = dataCopy;
    {
        /* Read input from the console */
        size_t dataLen = wcslen(data);
        /* if there is room in data, read into it from the console */
        if (100-dataLen > 1)
        {
            /* POTENTIAL FLAW: Read data from the console */
            if (fgetws(data+dataLen, (int)(100-dataLen), stdin) != NULL)
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

CWE134_Uncontrolled_Format_String__wchar_t_console_fprintf_83_goodB2G::~CWE134_Uncontrolled_Format_String__wchar_t_console_fprintf_83_goodB2G()
{
    /* FIX: Specify the format disallowing a format string vulnerability */
    fwprintf(stdout, L"%s\n", data);
}
}
#endif /* OMITGOOD */
