/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE762_Mismatched_Memory_Management_Routines__new_array_free_class_66b.cpp
Label Definition File: CWE762_Mismatched_Memory_Management_Routines__new_array_free.label.xml
Template File: sources-sinks-66b.tmpl.cpp
*/
/*
 * @testsuite Juliet_Cpp_1.3
* @description
 * CWE: 762 Mismatched Memory Management Routines
 * BadSource:  Allocate data using new []
 * GoodSource: Allocate data using malloc()
 * Sinks:
 *    GoodSink: Deallocate data using delete []
 *    BadSink : Deallocate data using free()
 * Flow Variant: 66 Data flow: data passed in an array from one function to another in different source files
 *
 * */

#include "std_testcase.h"

namespace CWE762_Mismatched_Memory_Management_Routines__new_array_free_class_66
{

#ifndef OMITBAD

void badSink(TwoIntsClass * dataArray[])
{
    /* copy data out of dataArray */
    TwoIntsClass * data = dataArray[2];
    /* POTENTIAL FLAW: Deallocate memory using free() - the source memory allocation function may
     * require a call to delete [] to deallocate the memory */
    free(data);
}

#endif /* OMITBAD */

#ifndef OMITGOOD

/* goodG2B uses the GoodSource with the BadSink */
void goodG2BSink(TwoIntsClass * dataArray[])
{
    TwoIntsClass * data = dataArray[2];
    /* POTENTIAL FLAW: Deallocate memory using free() - the source memory allocation function may
     * require a call to delete [] to deallocate the memory */
    free(data);
}

/* goodB2G uses the BadSource with the GoodSink */
void goodB2GSink(TwoIntsClass * dataArray[])
{
    TwoIntsClass * data = dataArray[2];
    /* FIX: Deallocate the memory using delete [] */
    delete [] data;
}

#endif /* OMITGOOD */

} /* close namespace */
