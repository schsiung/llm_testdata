/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE762_Mismatched_Memory_Management_Routines__new_array_free_int_83_goodB2G.cpp
Label Definition File: CWE762_Mismatched_Memory_Management_Routines__new_array_free.label.xml
Template File: sources-sinks-83_goodB2G.tmpl.cpp
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
 * Flow Variant: 83 Data flow: data passed to class constructor and destructor by declaring the class object on the stack
 *
 * */
#ifndef OMITGOOD

#include "std_testcase.h"
#include "CWE762_Mismatched_Memory_Management_Routines__new_array_free_int_83.h"

namespace CWE762_Mismatched_Memory_Management_Routines__new_array_free_int_83
{
CWE762_Mismatched_Memory_Management_Routines__new_array_free_int_83_goodB2G::CWE762_Mismatched_Memory_Management_Routines__new_array_free_int_83_goodB2G(int * dataCopy)
{
    data = dataCopy;
    /* POTENTIAL FLAW: Allocate memory with a function that requires delete [] to free the memory */
    data = new int[100];
}

CWE762_Mismatched_Memory_Management_Routines__new_array_free_int_83_goodB2G::~CWE762_Mismatched_Memory_Management_Routines__new_array_free_int_83_goodB2G()
{
    /* FIX: Deallocate the memory using delete [] */
    delete [] data;
}
}
#endif /* OMITGOOD */
