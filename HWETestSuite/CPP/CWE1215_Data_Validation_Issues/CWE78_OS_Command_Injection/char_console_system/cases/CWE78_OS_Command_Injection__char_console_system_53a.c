/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE78_OS_Command_Injection__char_console_system_53a.c
Label Definition File: CWE78_OS_Command_Injection.one_string.label.xml
Template File: sources-sink-53a.tmpl.c
*/
/*
 * @testsuite Juliet_Cpp_1.3
* @description
 * CWE: 78 OS Command Injection
 * BadSource: console Read input from the console
 * GoodSource: Fixed string
 * Sink: system
 *    BadSink : Execute command in data using system()
 * Flow Variant: 53 Data flow: data passed as an argument from one function through two others to a fourth; all four functions are in different source files
 *
 * */

#include "std_testcase.h"

#include <wchar.h>

#ifdef _WIN32
#define FULL_COMMAND "dir "
#else
#include <unistd.h>
#define FULL_COMMAND "ls "
#endif

#ifdef _WIN32
#define SYSTEM system
#else /* NOT _WIN32 */
#define SYSTEM system
#endif

#ifndef OMITBAD

/* bad function declaration */
void CWE78_OS_Command_Injection__char_console_system_53b_badSink(char * data);

void CWE78_OS_Command_Injection__char_console_system_53_bad()
{
    char * data;
    char data_buf[100] = FULL_COMMAND;
    data = data_buf;
    {
        /* Read input from the console */
        size_t dataLen = strlen(data);
        /* if there is room in data, read into it from the console */
        if (100-dataLen > 1)
        {
            /* POTENTIAL FLAW: Read data from the console */
            if (fgets(data+dataLen, (int)(100-dataLen), stdin) != NULL)
            {
                /* The next few lines remove the carriage return from the string that is
                 * inserted by fgets() */
                dataLen = strlen(data);
                if (dataLen > 0 && data[dataLen-1] == '\n')
                {
                    data[dataLen-1] = '\0';
                }
            }
            else
            {
                printLine("fgets() failed");
                /* Restore NUL terminator if fgets fails */
                data[dataLen] = '\0';
            }
        }
    }
    CWE78_OS_Command_Injection__char_console_system_53b_badSink(data);
}

#endif /* OMITBAD */

#ifndef OMITGOOD

/* good function declaration */
void CWE78_OS_Command_Injection__char_console_system_53b_goodG2BSink(char * data);

/* goodG2B uses the GoodSource with the BadSink */
static void goodG2B()
{
    char * data;
    char data_buf[100] = FULL_COMMAND;
    data = data_buf;
    /* FIX: Append a fixed string to data (not user / external input) */
    strcat(data, "*.*");
    CWE78_OS_Command_Injection__char_console_system_53b_goodG2BSink(data);
}

void CWE78_OS_Command_Injection__char_console_system_53_good()
{
    goodG2B();
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
    CWE78_OS_Command_Injection__char_console_system_53_good();
    printLine("Finished good()");
#endif /* OMITGOOD */
#ifndef OMITBAD
    printLine("Calling bad()...");
    CWE78_OS_Command_Injection__char_console_system_53_bad();
    printLine("Finished bad()");
#endif /* OMITBAD */
    return 0;
}

#endif
