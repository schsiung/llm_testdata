/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE762_Mismatched_Memory_Management_Routines__new_free_long_63a.cpp
Label Definition File: CWE762_Mismatched_Memory_Management_Routines__new_free.label.xml
Template File: sources-sinks-63a.tmpl.cpp
*/
/*
 * @testsuite Juliet_Cpp_1.3
* @description
 * CWE: 762 Mismatched Memory Management Routines
 * BadSource:  Allocate data using new
 * GoodSource: Allocate data using malloc()
 * Sinks:
 *    GoodSink: Deallocate data using delete
 *    BadSink : Deallocate data using free()
 * Flow Variant: 63 Data flow: pointer to data passed from one function to another in different source files
 *
 * */

#include "std_testcase.h"

namespace CWE762_Mismatched_Memory_Management_Routines__new_free_long_63
{

#ifndef OMITBAD

/* bad function declaration */
void badSink(long * * dataPtr);

void bad()
{
    long * data;
    /* Initialize data*/
    data = NULL;
    /* POTENTIAL FLAW: Allocate memory with a function that requires delete to free the memory */
    data = new long;
    badSink(&data);
}

#endif /* OMITBAD */

#ifndef OMITGOOD

/* goodG2B uses the GoodSource with the BadSink */
void goodG2BSink(long * * data);

static void goodG2B()
{
    long * data;
    /* Initialize data*/
    data = NULL;
    /* FIX: Allocate memory from the heap using malloc() */
    data = (long *)malloc(100*sizeof(long));
    if (data == NULL) {exit(-1);}
    goodG2BSink(&data);
}

/* goodB2G uses the BadSource with the GoodSink */
void goodB2GSink(long * * data);

static void goodB2G()
{
    long * data;
    /* Initialize data*/
    data = NULL;
    /* POTENTIAL FLAW: Allocate memory with a function that requires delete to free the memory */
    data = new long;
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

using namespace CWE762_Mismatched_Memory_Management_Routines__new_free_long_63; /* so that we can use good and bad easily */

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
