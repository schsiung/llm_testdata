/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE415_Double_Free__new_delete_long_63a.cpp
Label Definition File: CWE415_Double_Free__new_delete.label.xml
Template File: sources-sinks-63a.tmpl.cpp
*/
/*
 * @testsuite Juliet_Cpp_1.3
* @description
 * CWE: 415 Double Free
 * BadSource:  Allocate data using new and Deallocae data using delete
 * GoodSource: Allocate data using new
 * Sinks:
 *    GoodSink: do nothing
 *    BadSink : Deallocate data using delete
 * Flow Variant: 63 Data flow: pointer to data passed from one function to another in different source files
 *
 * */

#include "std_testcase.h"

#include <wchar.h>

namespace CWE415_Double_Free__new_delete_long_63
{

#ifndef OMITBAD

/* bad function declaration */
void badSink(long * * dataPtr);

void bad()
{
    long * data;
    /* Initialize data */
    data = NULL;
    data = new long;
    /* POTENTIAL FLAW: delete data in the source - the bad sink deletes data as well */
    delete data;
    badSink(&data);
}

#endif /* OMITBAD */

#ifndef OMITGOOD

/* goodG2B uses the GoodSource with the BadSink */
void goodG2BSink(long * * data);

static void goodG2B()
{
    long * data;
    /* Initialize data */
    data = NULL;
    data = new long;
    /* FIX: Do NOT delete data in the source - the bad sink deletes data */
    goodG2BSink(&data);
}

/* goodB2G uses the BadSource with the GoodSink */
void goodB2GSink(long * * data);

static void goodB2G()
{
    long * data;
    /* Initialize data */
    data = NULL;
    data = new long;
    /* POTENTIAL FLAW: delete data in the source - the bad sink deletes data as well */
    delete data;
    goodB2GSink(&data);
}

void good()
{
    goodG2B();
    goodB2G();
}

#endif /* OMITGOOD */

} /* close namespace */

/* Below is the main(). It is only used when building this testcase on
   its own for testing or for building a binary to use in testing binary
   analysis tools. It is not used when compiling all the testcases as one
   application, which is how source code analysis tools are tested. */

#ifdef INCLUDEMAIN

using namespace CWE415_Double_Free__new_delete_long_63; /* so that we can use good and bad easily */

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
