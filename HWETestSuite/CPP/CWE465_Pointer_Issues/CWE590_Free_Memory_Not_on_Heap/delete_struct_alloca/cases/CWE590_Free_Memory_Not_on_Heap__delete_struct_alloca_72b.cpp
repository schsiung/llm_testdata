/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE590_Free_Memory_Not_on_Heap__delete_struct_alloca_72b.cpp
Label Definition File: CWE590_Free_Memory_Not_on_Heap__delete.pointer.label.xml
Template File: sources-sink-72b.tmpl.cpp
*/
/*
 * @testsuite Juliet_Cpp_1.3
* @description
 * CWE: 590 Free Memory Not on Heap
 * BadSource: alloca Data buffer is allocated on the stack with alloca()
 * GoodSource: Allocate memory on the heap
 * Sinks:
 *    BadSink : Print then free data
 * Flow Variant: 72 Data flow: data passed in a vector from one function to another in different source files
 *
 * */

#include "std_testcase.h"
#include <vector>

#include <wchar.h>

using namespace std;

namespace CWE590_Free_Memory_Not_on_Heap__delete_struct_alloca_72
{

#ifndef OMITBAD

void badSink(vector<twoIntsStruct *> dataVector)
{
    /* copy data out of dataVector */
    twoIntsStruct * data = dataVector[2];
    printStructLine(data);
    /* POTENTIAL FLAW: Possibly deallocating memory allocated on the stack */
    delete data;
}

#endif /* OMITBAD */

#ifndef OMITGOOD

/* goodG2B uses the GoodSource with the BadSink */
void goodG2BSink(vector<twoIntsStruct *> dataVector)
{
    twoIntsStruct * data = dataVector[2];
    printStructLine(data);
    /* POTENTIAL FLAW: Possibly deallocating memory allocated on the stack */
    delete data;
}

#endif /* OMITGOOD */

} /* close namespace */
