/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE78_OS_Command_Injection__wchar_t_environment_w32_spawnlp_83_goodG2B.cpp
Label Definition File: CWE78_OS_Command_Injection.strings.label.xml
Template File: sources-sink-83_goodG2B.tmpl.cpp
*/
/*
 * @testsuite Juliet_Cpp_1.3
 * @description
 * CWE: 78 OS Command Injection
 * BadSource: environment Read input from an environment variable
 * GoodSource: Fixed string
 * Sinks: w32_spawnlp
 *    BadSink : execute command with wspawnlp
 * Flow Variant: 83 Data flow: data passed to class constructor and destructor by declaring the class object on the stack
 *
 * */
#ifndef OMITGOOD

#include "std_testcase.h"
#include "CWE78_OS_Command_Injection__wchar_t_environment_w32_spawnlp_83.h"

#include <process.h>

namespace CWE78_OS_Command_Injection__wchar_t_environment_w32_spawnlp_83
{
CWE78_OS_Command_Injection__wchar_t_environment_w32_spawnlp_83_goodG2B::CWE78_OS_Command_Injection__wchar_t_environment_w32_spawnlp_83_goodG2B(wchar_t * dataCopy)
{
    data = dataCopy;
    /* FIX: Append a fixed string to data (not user / external input) */
    wcscat(data, L"*.*");
}

CWE78_OS_Command_Injection__wchar_t_environment_w32_spawnlp_83_goodG2B::~CWE78_OS_Command_Injection__wchar_t_environment_w32_spawnlp_83_goodG2B()
{
    /* wspawnlp - searches for the location of the command among
     * the directories specified by the PATH environment variable */
    /* POTENTIAL FLAW: Execute command without validating input possibly leading to command injection */
    _wspawnlp(_P_WAIT, COMMAND_INT, COMMAND_INT, COMMAND_ARG1, COMMAND_ARG3, NULL);
}
}
#endif /* OMITGOOD */
