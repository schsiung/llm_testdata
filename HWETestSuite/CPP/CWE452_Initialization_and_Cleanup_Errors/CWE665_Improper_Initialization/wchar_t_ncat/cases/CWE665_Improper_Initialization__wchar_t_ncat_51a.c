/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE665_Improper_Initialization__wchar_t_ncat_51a.c
Label Definition File: CWE665_Improper_Initialization.label.xml
Template File: sources-sink-51a.tmpl.c
*/
/*
 * @testsuite Juliet_Cpp_1.3
* @description
 * CWE: 665 Improper Initialization
 * BadSource:  Do not initialize data properly
 * GoodSource: Initialize data
 * Sink: ncat
 *    BadSink : Copy string to data using wcsncat
 * Flow Variant: 51 Data flow: data passed as an argument from one function to another in different source files
 *
 * */

#include "std_testcase.h"

#include <wchar.h>

#ifndef OMITBAD

/* bad function declaration */
void CWE665_Improper_Initialization__wchar_t_ncat_51b_badSink(wchar_t * data);

void CWE665_Improper_Initialization__wchar_t_ncat_51_bad()
{
    wchar_t * data;
    wchar_t dataBuffer[100];
    data = dataBuffer;
    /* FLAW: Do not initialize data */
    ; /* empty statement needed for some flow variants */
    CWE665_Improper_Initialization__wchar_t_ncat_51b_badSink(data);
}

#endif /* OMITBAD */

#ifndef OMITGOOD

/* good function declarations */
void CWE665_Improper_Initialization__wchar_t_ncat_51b_goodG2BSink(wchar_t * data);

/* goodG2B uses the GoodSource with the BadSink */
static void goodG2B()
{
    wchar_t * data;
    wchar_t dataBuffer[100];
    data = dataBuffer;
    /* FIX: Properly initialize data */
    data[0] = L'\0'; /* null terminate */
    CWE665_Improper_Initialization__wchar_t_ncat_51b_goodG2BSink(data);
}

void CWE665_Improper_Initialization__wchar_t_ncat_51_good()
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
    CWE665_Improper_Initialization__wchar_t_ncat_51_good();
    printLine("Finished good()");
#endif /* OMITGOOD */
#ifndef OMITBAD
    printLine("Calling bad()...");
    CWE665_Improper_Initialization__wchar_t_ncat_51_bad();
    printLine("Finished bad()");
#endif /* OMITBAD */
    return 0;
}

#endif
