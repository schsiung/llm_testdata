/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE36_Absolute_Path_Traversal__char_environment_open_03.cpp
Label Definition File: CWE36_Absolute_Path_Traversal.label.xml
Template File: sources-sink-03.tmpl.cpp
*/
/*
 * @testsuite Juliet_Cpp_1.3
* @description
 * CWE: 36 Absolute Path Traversal
 * BadSource: environment Read input from an environment variable
 * GoodSource: Full path and file name
 * Sink: open
 *    BadSink : Open the file named in data using open()
 * Flow Variant: 03 Control flow: if(5==5) and if(5!=5)
 *
 * */

#include "std_testcase.h"

#ifndef _WIN32
#include <wchar.h>
#endif

#define ENV_VARIABLE "ADD"

#ifdef _WIN32
#define GETENV getenv
#else
#define GETENV getenv
#endif

#ifdef _WIN32
#define OPEN _open
#define CLOSE _close
#else
#include <unistd.h>
#define OPEN open
#define CLOSE close
#endif

namespace CWE36_Absolute_Path_Traversal__char_environment_open_03
{

#ifndef OMITBAD

void bad()
{
    char * data;
    char dataBuffer[FILENAME_MAX] = "";
    data = dataBuffer;
    if(5==5)
    {
        {
            /* Append input from an environment variable to data */
            size_t dataLen = strlen(data);
            char * environment = GETENV(ENV_VARIABLE);
            /* If there is data in the environment variable */
            if (environment != NULL)
            {
                /* POTENTIAL FLAW: Read data from an environment variable */
                strncat(data+dataLen, environment, FILENAME_MAX-dataLen-1);
            }
        }
    }
    {
        int fileDesc;
        /* POTENTIAL FLAW: Possibly opening a file without validating the file name or path */
        fileDesc = OPEN(data, O_RDWR|O_CREAT, S_IREAD|S_IWRITE);
        if (fileDesc != -1)
        {
            CLOSE(fileDesc);
        }
    }
}

#endif /* OMITBAD */

#ifndef OMITGOOD

/* goodG2B1() - use goodsource and badsink by changing the 5==5 to 5!=5 */
static void goodG2B1()
{
    char * data;
    char dataBuffer[FILENAME_MAX] = "";
    data = dataBuffer;
    if(5!=5)
    {
        /* INCIDENTAL: CWE 561 Dead Code, the code below will never run */
        printLine("Benign, fixed string");
    }
    else
    {
#ifdef _WIN32
        /* FIX: Use a fixed, full path and file name */
        strcat(data, "c:\\temp\\file.txt");
#else
        /* FIX: Use a fixed, full path and file name */
        strcat(data, "/tmp/file.txt");
#endif
    }
    {
        int fileDesc;
        /* POTENTIAL FLAW: Possibly opening a file without validating the file name or path */
        fileDesc = OPEN(data, O_RDWR|O_CREAT, S_IREAD|S_IWRITE);
        if (fileDesc != -1)
        {
            CLOSE(fileDesc);
        }
    }
}

/* goodG2B2() - use goodsource and badsink by reversing the blocks in the if statement */
static void goodG2B2()
{
    char * data;
    char dataBuffer[FILENAME_MAX] = "";
    data = dataBuffer;
    if(5==5)
    {
#ifdef _WIN32
        /* FIX: Use a fixed, full path and file name */
        strcat(data, "c:\\temp\\file.txt");
#else
        /* FIX: Use a fixed, full path and file name */
        strcat(data, "/tmp/file.txt");
#endif
    }
    {
        int fileDesc;
        /* POTENTIAL FLAW: Possibly opening a file without validating the file name or path */
        fileDesc = OPEN(data, O_RDWR|O_CREAT, S_IREAD|S_IWRITE);
        if (fileDesc != -1)
        {
            CLOSE(fileDesc);
        }
    }
}

void good()
{
    goodG2B1();
    goodG2B2();
}

#endif /* OMITGOOD */

} /* close namespace */

/* Below is the main(). It is only used when building this testcase on
   its own for testing or for building a binary to use in testing binary
   analysis tools. It is not used when compiling all the testcases as one
   application, which is how source code analysis tools are tested. */

#ifdef INCLUDEMAIN

using namespace CWE36_Absolute_Path_Traversal__char_environment_open_03; /* so that we can use good and bad easily */

int main(int argc, char * argv[])
{
    /* seed randomness */
    srand( (unsigned)time(NULL) );
#ifndef OMITGOOD
    printLine("Calling good()...");
    good();
    printLine("Finished good()");
#endif /* OMITGOOD */
#ifndef OMITBAD
    printLine("Calling bad()...");
    bad();
    printLine("Finished bad()");
#endif /* OMITBAD */
    return 0;
}

#endif
