/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE762_Mismatched_Memory_Management_Routines__new_free_int_42.cpp
Label Definition File: CWE762_Mismatched_Memory_Management_Routines__new_free.label.xml
Template File: sources-sinks-42.tmpl.cpp
*/
/*
 * @description
 * CWE: 762 Mismatched Memory Management Routines
 * BadSource:  Allocate data using new
 * GoodSource: Allocate data using malloc()
 * Sinks:
 *    GoodSink: Deallocate data using delete
 *    BadSink : Deallocate data using free()
 * Flow Variant: 42 Data flow: data returned from one function to another in the same source file
 *
 * */

#include "std_testcase.h"

namespace CWE762_Mismatched_Memory_Management_Routines__new_free_int_42
{

#ifndef OMITBAD

static int * badSource(int * data)
{
    /* POTENTIAL FLAW: Allocate memory with a function that requires delete to free the memory */
    data = new int;
    return data;
}

void bad()
{
    int * data;
    /* Initialize data*/
    data = NULL;
    data = badSource(data);
    /* POTENTIAL FLAW: Deallocate memory using free() - the source memory allocation function may
     * require a call to delete to deallocate the memory */
    free(data);
}

#endif /* OMITBAD */

#ifndef OMITGOOD

/* goodG2B() uses the GoodSource with the BadSink */
static int * goodG2BSource(int * data)
{
    /* FIX: Allocate memory from the heap using malloc() */
    data = (int *)malloc(100*sizeof(int));
    return data;
}

static void goodG2B()
{
    int * data;
    /* Initialize data*/
    data = NULL;
    data = goodG2BSource(data);
    /* POTENTIAL FLAW: Deallocate memory using free() - the source memory allocation function may
     * require a call to delete to deallocate the memory */
    free(data);
}

/* goodB2G() uses the BadSource with the GoodSink */
static int * goodB2GSource(int * data)
{
    /* POTENTIAL FLAW: Allocate memory with a function that requires delete to free the memory */
    data = new int;
    return data;
}

static void goodB2G()
{
    int * data;
    /* Initialize data*/
    data = NULL;
    data = goodB2GSource(data);
    /* FIX: Deallocate the memory using delete */
    delete data;
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

using namespace CWE762_Mismatched_Memory_Management_Routines__new_free_int_42; /* so that we can use good and bad easily */

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
