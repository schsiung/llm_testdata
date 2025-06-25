/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE1341_Multiple_Releases_of_Same_Resource_or_Handle__freopen_84_bad.cpp
Label Definition File: CWE1341_Multiple_Releases_of_Same_Resource_or_Handle.label.xml
Template File: sources-sinks-84_bad.tmpl.cpp
*/
/*
 * @testsuite Juliet_Cpp_1.3
* @description
 * CWE: 1341 Multiple Releases of Same Resource or Handle
 * BadSource: freopen Open and close a file using freopen() and flose()
 * GoodSource: Open a file using fopen()
 * Sinks:
 *    GoodSink: Do nothing
 *    BadSink : Close the file
 * Flow Variant: 84 Data flow: data passed to class constructor and destructor by declaring the class object on the heap and deleting it after use
 *
 * */
#ifndef OMITBAD

#include "std_testcase.h"
#include "CWE1341_Multiple_Releases_of_Same_Resource_or_Handle__freopen_84.h"

namespace CWE1341_Multiple_Releases_of_Same_Resource_or_Handle__freopen_84
{
CWE1341_Multiple_Releases_of_Same_Resource_or_Handle__freopen_84_bad::CWE1341_Multiple_Releases_of_Same_Resource_or_Handle__freopen_84_bad(FILE * dataCopy)
{
    data = dataCopy;
    data = freopen("BadSource_freopen.txt","w+",stdin);
    /* POTENTIAL FLAW: Close the file in the source */
    fclose(data);
}

CWE1341_Multiple_Releases_of_Same_Resource_or_Handle__freopen_84_bad::~CWE1341_Multiple_Releases_of_Same_Resource_or_Handle__freopen_84_bad()
{
    /* POTENTIAL FLAW: Close the file in the sink (it may have been closed in the Source) */
    fclose(data);
}
}
#endif /* OMITBAD */
