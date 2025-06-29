/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE78_OS_Command_Injection__char_listen_socket_w32_execvp_84_goodG2B.cpp
Label Definition File: CWE78_OS_Command_Injection.strings.label.xml
Template File: sources-sink-84_goodG2B.tmpl.cpp
*/
/*
 * @testsuite Juliet_Cpp_1.3
 * @description
 * CWE: 78 OS Command Injection
 * BadSource: listen_socket Read data using a listen socket (server side)
 * GoodSource: Fixed string
 * Sinks: w32_execvp
 *    BadSink : execute command with execvp
 * Flow Variant: 84 Data flow: data passed to class constructor and destructor by declaring the class object on the heap and deleting it after use
 *
 * */
#ifndef OMITGOOD

#include "std_testcase.h"
#include "CWE78_OS_Command_Injection__char_listen_socket_w32_execvp_84.h"

#include <process.h>
#define EXECVP _execvp

namespace CWE78_OS_Command_Injection__char_listen_socket_w32_execvp_84
{
CWE78_OS_Command_Injection__char_listen_socket_w32_execvp_84_goodG2B::CWE78_OS_Command_Injection__char_listen_socket_w32_execvp_84_goodG2B(char * dataCopy)
{
    data = dataCopy;
    /* FIX: Append a fixed string to data (not user / external input) */
    strcat(data, "*.*");
}

CWE78_OS_Command_Injection__char_listen_socket_w32_execvp_84_goodG2B::~CWE78_OS_Command_Injection__char_listen_socket_w32_execvp_84_goodG2B()
{
    {
        char *args[] = {COMMAND_INT_PATH, COMMAND_ARG1, COMMAND_ARG3, NULL};
        /* execvp - searches for the location of the command among
         * the directories specified by the PATH environment variable */
        /* POTENTIAL FLAW: Execute command without validating input possibly leading to command injection */
        EXECVP(COMMAND_INT, args);
    }
}
}
#endif /* OMITGOOD */
