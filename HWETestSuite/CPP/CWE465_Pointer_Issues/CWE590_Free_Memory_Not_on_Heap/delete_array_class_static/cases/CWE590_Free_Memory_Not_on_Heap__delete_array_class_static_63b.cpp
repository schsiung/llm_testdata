/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE590_Free_Memory_Not_on_Heap__delete_array_class_static_63b.cpp
Label Definition File: CWE590_Free_Memory_Not_on_Heap__delete_array.label.xml
Template File: sources-sink-63b.tmpl.cpp
*/
/*
 * @testsuite Juliet_Cpp_1.3
* @description
 * CWE: 590 Free Memory Not on Heap
 * BadSource: static Data buffer is declared static on the stack
 * GoodSource: Allocate memory on the heap
 * Sinks:
 *    BadSink : Print then free data
 * Flow Variant: 63 Data flow: pointer to data passed from one function to another in different source files
 *
 * */

#include "std_testcase.h"

#include <wchar.h>

namespace CWE590_Free_Memory_Not_on_Heap__delete_array_class_static_63
{

#ifndef OMITBAD

void badSink(TwoIntsClass * * dataPtr)
{
    TwoIntsClass * data = *dataPtr;
    printIntLine(data[0].intOne);
    /* POTENTIAL FLAW: Possibly deallocating memory allocated on the stack */
    delete [] data;
}

#endif /* OMITBAD */

#ifndef OMITGOOD

/* goodG2B uses the GoodSource with the BadSink */
void goodG2BSink(TwoIntsClass * * dataPtr)
{
    TwoIntsClass * data = *dataPtr;
    printIntLine(data[0].intOne);
    /* POTENTIAL FLAW: Possibly deallocating memory allocated on the stack */
    delete [] data;
}

#endif /* OMITGOOD */

} /* close namespace */
