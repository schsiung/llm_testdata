/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE78_OS_Command_Injection__wchar_t_file_w32_spawnvp_63b.c
Label Definition File: CWE78_OS_Command_Injection.strings.label.xml
Template File: sources-sink-63b.tmpl.c
*/
/*
 * @testsuite Juliet_Cpp_1.3
* @description
 * CWE: 78 OS Command Injection
 * BadSource: file Read input from a file
 * GoodSource: Fixed string
 * Sinks: w32_spawnvp
 *    BadSink : execute command with wspawnvp
 * Flow Variant: 63 Data flow: pointer to data passed from one function to another in different source files
 *
 * */

#include "std_testcase.h"

#include <wchar.h>

#ifdef _WIN32
#define COMMAND_INT_PATH L"%WINDIR%\\system32\\cmd.exe"
#define COMMAND_INT L"cmd.exe"
#define COMMAND_ARG1 L"/c"
#define COMMAND_ARG2 L"dir "
#define COMMAND_ARG3 data
#else /* NOT _WIN32 */
#include <unistd.h>
#define COMMAND_INT_PATH L"/bin/sh"
#define COMMAND_INT L"sh"
#define COMMAND_ARG1 L"-c"
#define COMMAND_ARG2 L"ls "
#define COMMAND_ARG3 data
#endif

#ifdef _WIN32
#define FILENAME "C:\\temp\\file.txt"
#else
#define FILENAME "/tmp/file.txt"
#endif

#include <process.h>

#ifndef OMITBAD

void CWE78_OS_Command_Injection__wchar_t_file_w32_spawnvp_63b_badSink(wchar_t * * dataPtr)
{
    wchar_t * data = *dataPtr;
    {
        wchar_t *args[] = {COMMAND_INT_PATH, COMMAND_ARG1, COMMAND_ARG3, NULL};
        /* wspawnvp - searches for the location of the command among
         * the directories specified by the PATH environment variable */
        /* POTENTIAL FLAW: Execute command without validating input possibly leading to command injection */
        _wspawnvp(_P_WAIT, COMMAND_INT, args);
    }
}

#endif /* OMITBAD */

#ifndef OMITGOOD

/* goodG2B uses the GoodSource with the BadSink */
void CWE78_OS_Command_Injection__wchar_t_file_w32_spawnvp_63b_goodG2BSink(wchar_t * * dataPtr)
{
    wchar_t * data = *dataPtr;
    {
        wchar_t *args[] = {COMMAND_INT_PATH, COMMAND_ARG1, COMMAND_ARG3, NULL};
        /* wspawnvp - searches for the location of the command among
         * the directories specified by the PATH environment variable */
        /* POTENTIAL FLAW: Execute command without validating input possibly leading to command injection */
        _wspawnvp(_P_WAIT, COMMAND_INT, args);
    }
}

#endif /* OMITGOOD */
