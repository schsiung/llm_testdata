/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE1341_Multiple_Releases_of_Same_Resource_or_Handle__w32CreateFile_81_bad.cpp
Label Definition File: CWE1341_Multiple_Releases_of_Same_Resource_or_Handle__w32CreateFile.label.xml
Template File: sources-sinks-81_bad.tmpl.cpp
*/
/*
 * @testsuite Juliet_Cpp_1.3
* @description
 * CWE: 1341 Multiple Releases of Same Resource or Handle
 * BadSource:  Open and close a file using CreateFile() and CloseHandle()
 * GoodSource: Open a file using CreateFile()
 * Sinks:
 *    GoodSink: Do nothing
 *    BadSink : Close the file
 * Flow Variant: 81 Data flow: data passed in a parameter to an virtual method called via a reference
 *
 * */
#ifndef OMITBAD

#include "std_testcase.h"
#include "CWE1341_Multiple_Releases_of_Same_Resource_or_Handle__w32CreateFile_81.h"

namespace CWE1341_Multiple_Releases_of_Same_Resource_or_Handle__w32CreateFile_81
{

void CWE1341_Multiple_Releases_of_Same_Resource_or_Handle__w32CreateFile_81_bad::action(HANDLE data) const
{
    /* POTENTIAL FLAW: Close the file in the sink (it may have been closed in the Source) */
    CloseHandle(data);
}

}
#endif /* OMITBAD */
