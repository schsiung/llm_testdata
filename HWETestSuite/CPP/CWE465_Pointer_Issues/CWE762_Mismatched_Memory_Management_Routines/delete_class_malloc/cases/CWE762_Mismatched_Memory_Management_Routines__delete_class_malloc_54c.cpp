/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE762_Mismatched_Memory_Management_Routines__delete_class_malloc_54c.cpp
Label Definition File: CWE762_Mismatched_Memory_Management_Routines__delete.label.xml
Template File: sources-sinks-54c.tmpl.cpp
*/
/*
 * @testsuite Juliet_Cpp_1.3
* @description
 * CWE: 762 Mismatched Memory Management Routines
 * BadSource: malloc Allocate data using malloc()
 * GoodSource: Allocate data using new
 * Sinks:
 *    GoodSink: Deallocate data using free()
 *    BadSink : Deallocate data using delete
 * Flow Variant: 54 Data flow: data passed as an argument from one function through three others to a fifth; all five functions are in different source files
 *
 * */

#include "std_testcase.h"

namespace CWE762_Mismatched_Memory_Management_Routines__delete_class_malloc_54
{

#ifndef OMITBAD

/* bad function declaration */
void badSink_d(TwoIntsClass * data);

void badSink_c(TwoIntsClass * data)
{
    badSink_d(data);
}

#endif /* OMITBAD */

#ifndef OMITGOOD

/* goodG2B uses the GoodSource with the BadSink */
void goodG2BSink_d(TwoIntsClass * data);

void goodG2BSink_c(TwoIntsClass * data)
{
    goodG2BSink_d(data);
}

/* goodB2G uses the BadSource with the GoodSink */
void goodB2GSink_d(TwoIntsClass * data);

void goodB2GSink_c(TwoIntsClass * data)
{
    goodB2GSink_d(data);
}

#endif /* OMITGOOD */

} /* close namespace */
