/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE762_Mismatched_Memory_Management_Routines__new_delete_array_wchar_t_16.cpp
Label Definition File: CWE762_Mismatched_Memory_Management_Routines__new_delete_array.label.xml
Template File: sources-sinks-16.tmpl.cpp
*/
/*
 * @testsuite Juliet_Cpp_1.3
* @description
 * CWE: 762 Mismatched Memory Management Routines
 * BadSource:  Allocate data using new
 * GoodSource: Allocate data using new []
 * Sinks:
 *    GoodSink: Deallocate data using delete
 *    BadSink : Deallocate data using delete []
 * Flow Variant: 16 Control flow: while(1)
 * */

#include "std_testcase.h"

namespace CWE762_Mismatched_Memory_Management_Routines__new_delete_array_wchar_t_16
{

#ifndef OMITBAD

void bad()
{
    wchar_t * data;
    /* Initialize data*/
    data = NULL;
    while(1)
    {
        /* POTENTIAL FLAW: Allocate memory with a function that requires delete to free the memory */
        data = new wchar_t;
        break;
    }
    while(1)
    {
        /* POTENTIAL FLAW: Deallocate memory using delete [] - the source memory allocation function may
         * require a call to delete to deallocate the memory */
        delete [] data;
        break;
    }
}

#endif /* OMITBAD */

#ifndef OMITGOOD

/* goodB2G() - use badsource and goodsink by changing the sinks in the second while statement */
static void goodB2G()
{
    wchar_t * data;
    /* Initialize data*/
    data = NULL;
    while(1)
    {
        /* POTENTIAL FLAW: Allocate memory with a function that requires delete to free the memory */
        data = new wchar_t;
        break;
    }
    while(1)
    {
        /* FIX: Deallocate the memory using delete */
        delete data;
        break;
    }
}

/* goodG2B() - use goodsource and badsink by changing the sources in the first while statement */
static void goodG2B()
{
    wchar_t * data;
    /* Initialize data*/
    data = NULL;
    while(1)
    {
        /* FIX: Allocate memory from the heap using new [] */
        data = new wchar_t[100];
        break;
    }
    while(1)
    {
        /* POTENTIAL FLAW: Deallocate memory using delete [] - the source memory allocation function may
         * require a call to delete to deallocate the memory */
        delete [] data;
        break;
    }
}

void good()
{
    goodB2G();
    goodG2B();
}

#endif /* OMITGOOD */

} /* close namespace */

/* Below is the main(). It is only used when building this testcase on
   its own for testing or for building a binary to use in testing binary
   analysis tools. It is not used when compiling all the testcases as one
   application, which is how source code analysis tools are tested. */

#ifdef INCLUDEMAIN

using namespace CWE762_Mismatched_Memory_Management_Routines__new_delete_array_wchar_t_16; /* so that we can use good and bad easily */

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
