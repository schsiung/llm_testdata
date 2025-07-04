/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE78_OS_Command_Injection__char_listen_socket_execlp_22a.c
Label Definition File: CWE78_OS_Command_Injection.strings.label.xml
Template File: sources-sink-22a.tmpl.c
*/
/*
 * @testsuite Juliet_Cpp_1.3
* @description
 * CWE: 78 OS Command Injection
 * BadSource: listen_socket Read data using a listen socket (server side)
 * GoodSource: Fixed string
 * Sink: execlp
 *    BadSink : execute command with execlp
 * Flow Variant: 22 Control flow: Flow controlled by value of a global variable. Sink functions are in a separate file from sources.
 *
 * */

#include "std_testcase.h"

#include <wchar.h>

#ifdef _WIN32
#define COMMAND_INT_PATH "%WINDIR%\\system32\\cmd.exe"
#define COMMAND_INT "cmd.exe"
#define COMMAND_ARG1 "/c"
#define COMMAND_ARG2 "dir "
#define COMMAND_ARG3 data
#else /* NOT _WIN32 */
#include <unistd.h>
#define COMMAND_INT_PATH "/bin/sh"
#define COMMAND_INT "sh"
#define COMMAND_ARG1 "-c"
#define COMMAND_ARG2 "ls "
#define COMMAND_ARG3 data
#endif

#ifdef _WIN32
#include <process.h>
#define EXECLP _execlp
#else /* NOT _WIN32 */
#define EXECLP execlp
#endif

#ifndef OMITBAD

/* The global variable below is used to drive control flow in the source function */
int CWE78_OS_Command_Injection__char_listen_socket_execlp_22_badGlobal = 0;

char * CWE78_OS_Command_Injection__char_listen_socket_execlp_22_badSource(char * data);

void CWE78_OS_Command_Injection__char_listen_socket_execlp_22_bad()
{
    char * data;
    char dataBuffer[100] = COMMAND_ARG2;
    data = dataBuffer;
    CWE78_OS_Command_Injection__char_listen_socket_execlp_22_badGlobal = 1; /* true */
    data = CWE78_OS_Command_Injection__char_listen_socket_execlp_22_badSource(data);
    /* execlp - searches for the location of the command among
     * the directories specified by the PATH environment variable */
    /* POTENTIAL FLAW: Execute command without validating input possibly leading to command injection */
    EXECLP(COMMAND_INT, COMMAND_INT, COMMAND_ARG1, COMMAND_ARG3, NULL);
}

#endif /* OMITBAD */

#ifndef OMITGOOD

/* The global variables below are used to drive control flow in the source functions. */
int CWE78_OS_Command_Injection__char_listen_socket_execlp_22_goodG2B1Global = 0;
int CWE78_OS_Command_Injection__char_listen_socket_execlp_22_goodG2B2Global = 0;

/* goodG2B1() - use goodsource and badsink by setting the static variable to false instead of true */
char * CWE78_OS_Command_Injection__char_listen_socket_execlp_22_goodG2B1Source(char * data);

static void goodG2B1()
{
    char * data;
    char dataBuffer[100] = COMMAND_ARG2;
    data = dataBuffer;
    CWE78_OS_Command_Injection__char_listen_socket_execlp_22_goodG2B1Global = 0; /* false */
    data = CWE78_OS_Command_Injection__char_listen_socket_execlp_22_goodG2B1Source(data);
    /* execlp - searches for the location of the command among
     * the directories specified by the PATH environment variable */
    /* POTENTIAL FLAW: Execute command without validating input possibly leading to command injection */
    EXECLP(COMMAND_INT, COMMAND_INT, COMMAND_ARG1, COMMAND_ARG3, NULL);
}

/* goodG2B2() - use goodsource and badsink by reversing the blocks in the if in the source function */
char * CWE78_OS_Command_Injection__char_listen_socket_execlp_22_goodG2B2Source(char * data);

static void goodG2B2()
{
    char * data;
    char dataBuffer[100] = COMMAND_ARG2;
    data = dataBuffer;
    CWE78_OS_Command_Injection__char_listen_socket_execlp_22_goodG2B2Global = 1; /* true */
    data = CWE78_OS_Command_Injection__char_listen_socket_execlp_22_goodG2B2Source(data);
    /* execlp - searches for the location of the command among
     * the directories specified by the PATH environment variable */
    /* POTENTIAL FLAW: Execute command without validating input possibly leading to command injection */
    EXECLP(COMMAND_INT, COMMAND_INT, COMMAND_ARG1, COMMAND_ARG3, NULL);
}

void CWE78_OS_Command_Injection__char_listen_socket_execlp_22_good()
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
    CWE78_OS_Command_Injection__char_listen_socket_execlp_22_good();
    printLine("Finished good()");
#endif /* OMITGOOD */
#ifndef OMITBAD
    printLine("Calling bad()...");
    CWE78_OS_Command_Injection__char_listen_socket_execlp_22_bad();
    printLine("Finished bad()");
#endif /* OMITBAD */
    return 0;
}

#endif
