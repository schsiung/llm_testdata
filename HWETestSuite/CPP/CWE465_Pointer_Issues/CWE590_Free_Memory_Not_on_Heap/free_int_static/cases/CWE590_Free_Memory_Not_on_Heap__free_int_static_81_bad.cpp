/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE590_Free_Memory_Not_on_Heap__free_int_static_81_bad.cpp
Label Definition File: CWE590_Free_Memory_Not_on_Heap__free.label.xml
Template File: sources-sink-81_bad.tmpl.cpp
*/
/*
 * @testsuite Juliet_Cpp_1.3
* @description
 * CWE: 590 Free Memory Not on Heap
 * BadSource: static Data buffer is declared static on the stack
 * GoodSource: Allocate memory on the heap
 * Sinks:
 *    BadSink : Print then free data
 * Flow Variant: 81 Data flow: data passed in a parameter to an virtual method called via a reference
 *
 * */
#ifndef OMITBAD

#include "std_testcase.h"
#include "CWE590_Free_Memory_Not_on_Heap__free_int_static_81.h"

namespace CWE590_Free_Memory_Not_on_Heap__free_int_static_81
{

void CWE590_Free_Memory_Not_on_Heap__free_int_static_81_bad::action(int * data) const
{
    printIntLine(data[0]);
    /* POTENTIAL FLAW: Possibly deallocating memory allocated on the stack */
    free(data);
}

}
#endif /* OMITBAD */
