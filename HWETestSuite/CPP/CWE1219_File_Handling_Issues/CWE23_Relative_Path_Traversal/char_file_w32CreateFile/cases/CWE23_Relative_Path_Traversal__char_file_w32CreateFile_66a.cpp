/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE23_Relative_Path_Traversal__char_file_w32CreateFile_66a.cpp
Label Definition File: CWE23_Relative_Path_Traversal.label.xml
Template File: sources-sink-66a.tmpl.cpp
*/
/*
 * @testsuite Juliet_Cpp_1.3
* @description
 * CWE: 23 Relative Path Traversal
 * BadSource: file Read input from a file
 * GoodSource: Use a fixed file name
 * Sinks: w32CreateFile
 *    BadSink : Open the file named in data using CreateFile()
 * Flow Variant: 66 Data flow: data passed in an array from one function to another in different source files
 *
 * */

#include "std_testcase.h"

#ifdef _WIN32
#define BASEPATH "c:\\temp\\"
#else
#include <wchar.h>
#define BASEPATH "/tmp/"
#endif

#ifdef _WIN32
#define FILENAME "C:\\temp\\file.txt"
#else
#define FILENAME "/tmp/file.txt"
#endif

#include <windows.h>

namespace CWE23_Relative_Path_Traversal__char_file_w32CreateFile_66
{

#ifndef OMITBAD

/* bad function declaration */
void badSink(char * dataArray[]);

void bad()
{
    char * data;
    char * dataArray[5];
    char dataBuffer[FILENAME_MAX] = BASEPATH;
    data = dataBuffer;
    {
        /* Read input from a file */
        size_t dataLen = strlen(data);
        FILE * pFile;
        /* if there is room in data, attempt to read the input from a file */
        if (FILENAME_MAX-dataLen > 1)
        {
            pFile = fopen(FILENAME, "r");
            if (pFile != NULL)
            {
                /* POTENTIAL FLAW: Read data from a file */
                if (fgets(data+dataLen, (int)(FILENAME_MAX-dataLen), pFile) == NULL)
                {
                    printLine("fgets() failed");
                    /* Restore NUL terminator if fgets fails */
                    data[dataLen] = '\0';
                }
                fclose(pFile);
            }
        }
    }
    /* put data in array */
    dataArray[2] = data;
    badSink(dataArray);
}

#endif /* OMITBAD */

#ifndef OMITGOOD

/* good function declarations */

/* goodG2B uses the GoodSource with the BadSink */
void goodG2BSink(char * dataArray[]);

static void goodG2B()
{
    char * data;
    char * dataArray[5];
    char dataBuffer[FILENAME_MAX] = BASEPATH;
    data = dataBuffer;
    /* FIX: Use a fixed file name */
    strcat(data, "file.txt");
    dataArray[2] = data;
    goodG2BSink(dataArray);
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

using namespace CWE23_Relative_Path_Traversal__char_file_w32CreateFile_66; /* so that we can use good and bad easily */

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
