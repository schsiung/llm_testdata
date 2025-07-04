/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE762_Mismatched_Memory_Management_Routines__new_free_class_02.cpp
Label Definition File: CWE762_Mismatched_Memory_Management_Routines__new_free.label.xml
Template File: sources-sinks-02.tmpl.cpp
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
 * Flow Variant: 02 Control flow: if(1) and if(0)
 *
 * */

#include "std_testcase.h"

namespace CWE762_Mismatched_Memory_Management_Routines__new_free_class_02
{

#ifndef OMITBAD

void bad()
{
    TwoIntsClass * data;
    /* Initialize data*/
    data = NULL;
    if(1)
    {
        /* POTENTIAL FLAW: Allocate memory with a function that requires delete to free the memory */
        data = new TwoIntsClass;
    }
    if(1)
    {
        /* POTENTIAL FLAW: Deallocate memory using free() - the source memory allocation function may
         * require a call to delete to deallocate the memory */
        free(data);
    }
}

#endif /* OMITBAD */

#ifndef OMITGOOD

/* goodB2G1() - use badsource and goodsink by changing the second 1 to 0 */
static void goodB2G1()
{
    TwoIntsClass * data;
    /* Initialize data*/
    data = NULL;
    if(1)
    {
        /* POTENTIAL FLAW: Allocate memory with a function that requires delete to free the memory */
        data = new TwoIntsClass;
    }
    if(0)
    {
        /* INCIDENTAL: CWE 561 Dead Code, the code below will never run */
        printLine("Benign, fixed string");
    }
    else
    {
        /* FIX: Deallocate the memory using delete */
        delete data;
    }
}

/* goodB2G2() - use badsource and goodsink by reversing the blocks in the second if */
static void goodB2G2()
{
    TwoIntsClass * data;
    /* Initialize data*/
    data = NULL;
    if(1)
    {
        /* POTENTIAL FLAW: Allocate memory with a function that requires delete to free the memory */
        data = new TwoIntsClass;
    }
    if(1)
    {
        /* FIX: Deallocate the memory using delete */
        delete data;
    }
}

/* goodG2B1() - use goodsource and badsink by changing the first 1 to 0 */
static void goodG2B1()
{
    TwoIntsClass * data;
    /* Initialize data*/
    data = NULL;
    if(0)
    {
        /* INCIDENTAL: CWE 561 Dead Code, the code below will never run */
        printLine("Benign, fixed string");
    }
    else
    {
        /* FIX: Allocate memory from the heap using malloc() */
        data = (TwoIntsClass *)malloc(100*sizeof(TwoIntsClass));
        if (data == NULL) {exit(-1);}
    }
    if(1)
    {
        /* POTENTIAL FLAW: Deallocate memory using free() - the source memory allocation function may
         * require a call to delete to deallocate the memory */
        free(data);
    }
}

/* goodG2B2() - use goodsource and badsink by reversing the blocks in the first if */
static void goodG2B2()
{
    TwoIntsClass * data;
    /* Initialize data*/
    data = NULL;
    if(1)
    {
        /* FIX: Allocate memory from the heap using malloc() */
        data = (TwoIntsClass *)malloc(100*sizeof(TwoIntsClass));
        if (data == NULL) {exit(-1);}
    }
    if(1)
    {
        /* POTENTIAL FLAW: Deallocate memory using free() - the source memory allocation function may
         * require a call to delete to deallocate the memory */
        free(data);
    }
}

void good()
{
    goodB2G1();
    goodB2G2();
    goodG2B1();
    goodG2B2();
}

#endif /* OMITGOOD */

} /* close namespace */

/* Below is the main(). It is only used when building this testcase on
   its own for testing or for building a binary to use in testing binary
   analysis tools. It is not used when compiling all the testcases as one
   application, which is how source code analysis tools are tested. */

#ifdef INCLUDEMAIN

using namespace CWE762_Mismatched_Memory_Management_Routines__new_free_class_02; /* so that we can use good and bad easily */

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
