/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE762_Mismatched_Memory_Management_Routines__new_delete_array_struct_32.cpp
Label Definition File: CWE762_Mismatched_Memory_Management_Routines__new_delete_array.label.xml
Template File: sources-sinks-32.tmpl.cpp
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
 * Flow Variant: 32 Data flow using two pointers to the same value within the same function
 *
 * */

#include "std_testcase.h"

namespace CWE762_Mismatched_Memory_Management_Routines__new_delete_array_struct_32
{

#ifndef OMITBAD

void bad()
{
    twoIntsStruct * data;
    twoIntsStruct * *dataPtr1 = &data;
    twoIntsStruct * *dataPtr2 = &data;
    /* Initialize data*/
    data = NULL;
    {
        twoIntsStruct * data = *dataPtr1;
        /* POTENTIAL FLAW: Allocate memory with a function that requires delete to free the memory */
        data = new twoIntsStruct;
        *dataPtr1 = data;
    }
    {
        twoIntsStruct * data = *dataPtr2;
        /* POTENTIAL FLAW: Deallocate memory using delete [] - the source memory allocation function may
         * require a call to delete to deallocate the memory */
        delete [] data;
    }
}

#endif /* OMITBAD */

#ifndef OMITGOOD

/* goodG2B() uses the GoodSource with the BadSink */
static void goodG2B()
{
    twoIntsStruct * data;
    twoIntsStruct * *dataPtr1 = &data;
    twoIntsStruct * *dataPtr2 = &data;
    /* Initialize data*/
    data = NULL;
    {
        twoIntsStruct * data = *dataPtr1;
        /* FIX: Allocate memory from the heap using new [] */
        data = new twoIntsStruct[100];
        *dataPtr1 = data;
    }
    {
        twoIntsStruct * data = *dataPtr2;
        /* POTENTIAL FLAW: Deallocate memory using delete [] - the source memory allocation function may
         * require a call to delete to deallocate the memory */
        delete [] data;
    }
}

/* goodB2G() uses the BadSource with the GoodSink */
static void goodB2G()
{
    twoIntsStruct * data;
    twoIntsStruct * *dataPtr1 = &data;
    twoIntsStruct * *dataPtr2 = &data;
    /* Initialize data*/
    data = NULL;
    {
        twoIntsStruct * data = *dataPtr1;
        /* POTENTIAL FLAW: Allocate memory with a function that requires delete to free the memory */
        data = new twoIntsStruct;
        *dataPtr1 = data;
    }
    {
        twoIntsStruct * data = *dataPtr2;
        /* FIX: Deallocate the memory using delete */
        delete data;
    }
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

using namespace CWE762_Mismatched_Memory_Management_Routines__new_delete_array_struct_32; /* so that we can use good and bad easily */

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
