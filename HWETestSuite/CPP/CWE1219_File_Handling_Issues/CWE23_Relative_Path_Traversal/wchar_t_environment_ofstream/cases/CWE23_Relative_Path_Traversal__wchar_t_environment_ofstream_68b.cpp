/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE23_Relative_Path_Traversal__wchar_t_environment_ofstream_68b.cpp
Label Definition File: CWE23_Relative_Path_Traversal.label.xml
Template File: sources-sink-68b.tmpl.cpp
*/
/*
 * @testsuite Juliet_Cpp_1.3
* @description
 * CWE: 23 Relative Path Traversal
 * BadSource: environment Read input from an environment variable
 * GoodSource: Use a fixed file name
 * Sink: ofstream
 *    BadSink : Open the file named in data using ofstream::open()
 * Flow Variant: 68 Data flow: data passed as a global variable from one function to another in different source files
 *
 * */

#include "std_testcase.h"

#ifdef _WIN32
#define BASEPATH L"c:\\temp\\"
#else
#include <wchar.h>
#define BASEPATH L"/tmp/"
#endif

#define ENV_VARIABLE L"ADD"

#ifdef _WIN32
#define GETENV _wgetenv
#else
#define GETENV getenv
#endif

#include <fstream>
using namespace std;

extern wchar_t * CWE23_Relative_Path_Traversal__wchar_t_environment_ofstream_68_badData;
extern wchar_t * CWE23_Relative_Path_Traversal__wchar_t_environment_ofstream_68_goodG2BData;

namespace CWE23_Relative_Path_Traversal__wchar_t_environment_ofstream_68
{

/* all the sinks are the same, we just want to know where the hit originated if a tool flags one */

#ifndef OMITBAD

void badSink()
{
    wchar_t * data = CWE23_Relative_Path_Traversal__wchar_t_environment_ofstream_68_badData;
    {
        ofstream outputFile;
        /* POTENTIAL FLAW: Possibly opening a file without validating the file name or path */
        outputFile.open((char *)data);
        outputFile.close();
    }
}

#endif /* OMITBAD */

#ifndef OMITGOOD

/* goodG2B uses the GoodSource with the BadSink */
void goodG2BSink()
{
    wchar_t * data = CWE23_Relative_Path_Traversal__wchar_t_environment_ofstream_68_goodG2BData;
    {
        ofstream outputFile;
        /* POTENTIAL FLAW: Possibly opening a file without validating the file name or path */
        outputFile.open((char *)data);
        outputFile.close();
    }
}

#endif /* OMITGOOD */

} /* close namespace */
