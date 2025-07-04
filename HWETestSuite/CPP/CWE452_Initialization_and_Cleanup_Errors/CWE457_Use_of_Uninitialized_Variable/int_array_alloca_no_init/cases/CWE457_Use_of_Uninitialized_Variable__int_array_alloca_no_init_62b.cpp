/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE457_Use_of_Uninitialized_Variable__int_array_alloca_no_init_62b.cpp
Label Definition File: CWE457_Use_of_Uninitialized_Variable.c_array.label.xml
Template File: sources-sinks-62b.tmpl.cpp
*/
/*
 * @testsuite Juliet_Cpp_1.3
* @description
 * CWE: 457 Use of Uninitialized Variable
 * BadSource: no_init Don't initialize data
 * GoodSource: Initialize data
 * Sinks: use
 *    GoodSink: Initialize then use data
 *    BadSink : Use data
 * Flow Variant: 62 Data flow: data flows using a C++ reference from one function to another in different source files
 *
 * */

#include "std_testcase.h"

namespace CWE457_Use_of_Uninitialized_Variable__int_array_alloca_no_init_62
{

#ifndef OMITBAD

void badSource(int * &data)
{
    /* POTENTIAL FLAW: Don't initialize data */
    ; /* empty statement needed for some flow variants */
}

#endif /* OMITBAD */

#ifndef OMITGOOD

/* goodG2B() uses the GoodSource with the BadSink */
void goodG2BSource(int * &data)
{
    /* FIX: Completely initialize data */
    {
        int i;
        for(i=0; i<10; i++)
        {
            data[i] = i;
        }
    }
}

/* goodB2G() uses the BadSource with the GoodSink */
void goodB2GSource(int * &data)
{
    /* POTENTIAL FLAW: Don't initialize data */
    ; /* empty statement needed for some flow variants */
}

#endif /* OMITGOOD */

} /* close namespace */
