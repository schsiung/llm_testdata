/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE78_OS_Command_Injection__wchar_t_environment_execlp_84_goodG2B.cpp
Label Definition File: CWE78_OS_Command_Injection.strings.label.xml
Template File: sources-sink-84_goodG2B.tmpl.cpp
*/
/*
 * @testsuite Juliet_Cpp_1.3
 * @description
 * CWE: 78 OS Command Injection
 * BadSource: environment Read input from an environment variable
 * GoodSource: Fixed string
 * Sinks: execlp
 *    BadSink : execute command with wexeclp
 * Flow Variant: 84 Data flow: data passed to class constructor and destructor by declaring the class object on the heap and deleting it after use
 *
 * */
#ifndef OMITGOOD

#include "std_testcase.h"
#include "CWE78_OS_Command_Injection__wchar_t_environment_execlp_84.h"

#ifdef _WIN32
#include <process.h>
#define EXECLP _wexeclp
#else /* NOT _WIN32 */
#define EXECLP execlp
#endif

namespace CWE78_OS_Command_Injection__wchar_t_environment_execlp_84
{
CWE78_OS_Command_Injection__wchar_t_environment_execlp_84_goodG2B::CWE78_OS_Command_Injection__wchar_t_environment_execlp_84_goodG2B(wchar_t * dataCopy)
{
    data = dataCopy;
    /* FIX: Append a fixed string to data (not user / external input) */
    wcscat(data, L"*.*");
}

CWE78_OS_Command_Injection__wchar_t_environment_execlp_84_goodG2B::~CWE78_OS_Command_Injection__wchar_t_environment_execlp_84_goodG2B()
{
    /* wexeclp - searches for the location of the command among
     * the directories specified by the PATH environment variable */
    /* POTENTIAL FLAW: Execute command without validating input possibly leading to command injection */
    EXECLP(COMMAND_INT, COMMAND_INT, COMMAND_ARG1, COMMAND_ARG3, NULL);
}
}
#endif /* OMITGOOD */
