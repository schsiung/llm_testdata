/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE1341_Multiple_Releases_of_Same_Resource_or_Handle__fopen_53b.c
Label Definition File: CWE1341_Multiple_Releases_of_Same_Resource_or_Handle.label.xml
Template File: sources-sinks-53b.tmpl.c
*/
/*
 * @testsuite Juliet_Cpp_1.3
* @description
 * CWE: 1341 Multiple Releases of Same Resource or Handle
 * BadSource: fopen Open and close a file using fopen() and flose()
 * GoodSource: Open a file using fopen()
 * Sinks:
 *    GoodSink: Do nothing
 *    BadSink : Close the file
 * Flow Variant: 53 Data flow: data passed as an argument from one function through two others to a fourth; all four functions are in different source files
 *
 * */

#include "std_testcase.h"

#ifndef OMITBAD

/* bad function declaration */
void CWE1341_Multiple_Releases_of_Same_Resource_or_Handle__fopen_53c_badSink(FILE * data);

void CWE1341_Multiple_Releases_of_Same_Resource_or_Handle__fopen_53b_badSink(FILE * data)
{
    CWE1341_Multiple_Releases_of_Same_Resource_or_Handle__fopen_53c_badSink(data);
}

#endif /* OMITBAD */

#ifndef OMITGOOD

/* goodG2B uses the GoodSource with the BadSink */
void CWE1341_Multiple_Releases_of_Same_Resource_or_Handle__fopen_53c_goodG2BSink(FILE * data);

void CWE1341_Multiple_Releases_of_Same_Resource_or_Handle__fopen_53b_goodG2BSink(FILE * data)
{
    CWE1341_Multiple_Releases_of_Same_Resource_or_Handle__fopen_53c_goodG2BSink(data);
}

/* goodB2G uses the BadSource with the GoodSink */
void CWE1341_Multiple_Releases_of_Same_Resource_or_Handle__fopen_53c_goodB2GSink(FILE * data);

void CWE1341_Multiple_Releases_of_Same_Resource_or_Handle__fopen_53b_goodB2GSink(FILE * data)
{
    CWE1341_Multiple_Releases_of_Same_Resource_or_Handle__fopen_53c_goodB2GSink(data);
}

#endif /* OMITGOOD */
