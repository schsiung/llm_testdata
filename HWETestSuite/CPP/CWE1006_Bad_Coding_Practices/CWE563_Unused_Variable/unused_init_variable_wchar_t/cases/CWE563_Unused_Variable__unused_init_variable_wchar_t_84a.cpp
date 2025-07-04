/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE563_Unused_Variable__unused_init_variable_wchar_t_84a.cpp
Label Definition File: CWE563_Unused_Variable__unused_init_variable.label.xml
Template File: source-sinks-84a.tmpl.cpp
*/
/*
 * @testsuite Juliet_Cpp_1.3
* @description
 * CWE: 563 Unused Variable
 * BadSource:  Initialize data
 * Sinks:
 *    GoodSink: Use data
 *    BadSink : do nothing
 * Flow Variant: 84 Data flow: data passed to class constructor and destructor by declaring the class object on the heap and deleting it after use
 *
 * */

#include "std_testcase.h"
#include "CWE563_Unused_Variable__unused_init_variable_wchar_t_84.h"

namespace CWE563_Unused_Variable__unused_init_variable_wchar_t_84
{

#ifndef OMITBAD

void bad()
{
    wchar_t data;
    CWE563_Unused_Variable__unused_init_variable_wchar_t_84_bad * badObject = new CWE563_Unused_Variable__unused_init_variable_wchar_t_84_bad(data);
    delete badObject;
}

#endif /* OMITBAD */

#ifndef OMITGOOD

/* goodB2G uses the BadSource with the GoodSink */
static void goodB2G()
{
    wchar_t data;
    CWE563_Unused_Variable__unused_init_variable_wchar_t_84_goodB2G * goodB2GObject = new CWE563_Unused_Variable__unused_init_variable_wchar_t_84_goodB2G(data);
    delete goodB2GObject;
}

void good()
{
    goodB2G();
}

#endif /* OMITGOOD */

} /* close namespace */

/* Below is the main(). It is only used when building this testcase on
   its own for testing or for building a binary to use in testing binary
   analysis tools. It is not used when compiling all the testcases as one
   application, which is how source code analysis tools are tested. */

#ifdef INCLUDEMAIN

using namespace CWE563_Unused_Variable__unused_init_variable_wchar_t_84; /* so that we can use good and bad easily */

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
