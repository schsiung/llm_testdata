/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE36_Absolute_Path_Traversal__char_console_w32CreateFile_67a.cpp
Label Definition File: CWE36_Absolute_Path_Traversal.label.xml
Template File: sources-sink-67a.tmpl.cpp
*/
/*
 * @testsuite Juliet_Cpp_1.3
* @description
 * CWE: 36 Absolute Path Traversal
 * BadSource: console Read input from the console
 * GoodSource: Full path and file name
 * Sinks: w32CreateFile
 *    BadSink : Open the file named in data using CreateFile()
 * Flow Variant: 67 Data flow: data passed in a struct from one function to another in different source files
 *
 * */

#include "std_testcase.h"

#ifndef _WIN32
#include <wchar.h>
#endif

#include <windows.h>

namespace CWE36_Absolute_Path_Traversal__char_console_w32CreateFile_67
{

typedef struct _structType
{
    char * structFirst;
} structType;

#ifndef OMITBAD

/* bad function declaration */
void badSink(structType myStruct);

void bad()
{
    char * data;
    structType myStruct;
    char dataBuffer[FILENAME_MAX] = "";
    data = dataBuffer;
    {
        /* Read input from the console */
        size_t dataLen = strlen(data);
        /* if there is room in data, read into it from the console */
        if (FILENAME_MAX-dataLen > 1)
        {
            /* POTENTIAL FLAW: Read data from the console */
            if (fgets(data+dataLen, (int)(FILENAME_MAX-dataLen), stdin) != NULL)
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
    myStruct.structFirst = data;
    badSink(myStruct);
}

#endif /* OMITBAD */

#ifndef OMITGOOD

/* goodG2B uses the GoodSource with the BadSink */
void goodG2BSink(structType myStruct);

static void goodG2B()
{
    char * data;
    structType myStruct;
    char dataBuffer[FILENAME_MAX] = "";
    data = dataBuffer;
#ifdef _WIN32
    /* FIX: Use a fixed, full path and file name */
    strcat(data, "c:\\temp\\file.txt");
#else
    /* FIX: Use a fixed, full path and file name */
    strcat(data, "/tmp/file.txt");
#endif
    myStruct.structFirst = data;
    goodG2BSink(myStruct);
}

void good()
{
    goodG2B();
}

#endif /* OMITGOOD */

} /* close namespace */

/* Below is the main(). It is only used when building this testcase on
   its own for testing or for building a binary to use in testing binary
   analysis tools. It is not used when compiling all the testcases as one
   application, which is how source code analysis tools are tested. */

#ifdef INCLUDEMAIN

using namespace CWE36_Absolute_Path_Traversal__char_console_w32CreateFile_67; /* so that we can use good and bad easily */

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
