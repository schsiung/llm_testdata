/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE590_Free_Memory_Not_on_Heap__delete_class_static_66b.cpp
Label Definition File: CWE590_Free_Memory_Not_on_Heap__delete.nonpointer.label.xml
Template File: sources-sink-66b.tmpl.cpp
*/
/*
 * @testsuite Juliet_Cpp_1.3
* @description
 * CWE: 590 Free Memory Not on Heap
 * BadSource: static Data buffer is declared static on the stack
 * GoodSource: Allocate memory on the heap
 * Sinks:
 *    BadSink : Print then free data
 * Flow Variant: 66 Data flow: data passed in an array from one function to another in different source files
 *
 * */

#include "std_testcase.h"

#include <wchar.h>

namespace CWE590_Free_Memory_Not_on_Heap__delete_class_static_66
{

#ifndef OMITBAD

void badSink(TwoIntsClass * dataArray[])
{
    /* copy data out of dataArray */
    TwoIntsClass * data = dataArray[2];
    printIntLine(data->intOne);
    /* POTENTIAL FLAW: Possibly deallocating memory allocated on the stack */
    delete data;
}

#endif /* OMITBAD */

#ifndef OMITGOOD

/* goodG2B uses the GoodSource with the BadSink */
void goodG2BSink(TwoIntsClass * dataArray[])
{
    TwoIntsClass * data = dataArray[2];
    printIntLine(data->intOne);
    /* POTENTIAL FLAW: Possibly deallocating memory allocated on the stack */
    delete data;
}

#endif /* OMITGOOD */

} /* close namespace */
