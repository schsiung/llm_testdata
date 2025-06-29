/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE563_Unused_Variable__unused_uninit_variable_struct_81_bad.cpp
Label Definition File: CWE563_Unused_Variable__unused_uninit_variable.label.xml
Template File: source-sinks-81_bad.tmpl.cpp
*/
/*
 * @testsuite Juliet_Cpp_1.3
* @description
 * CWE: 563 Unused Variable
 * BadSource:  Initialize data
 * Sinks:
 *    GoodSink: Initialize, then use data
 *    BadSink : Do nothing
 * Flow Variant: 81 Data flow: data passed in a parameter to an virtual method called via a reference
 *
 * */
#ifndef OMITBAD

#include "std_testcase.h"
#include "CWE563_Unused_Variable__unused_uninit_variable_struct_81.h"

namespace CWE563_Unused_Variable__unused_uninit_variable_struct_81
{

void CWE563_Unused_Variable__unused_uninit_variable_struct_81_bad::action(twoIntsStruct data) const
{
    /* FLAW: Do not use the variable */
    /* do nothing */
    ; /* empty statement needed for some flow variants */
}

}
#endif /* OMITBAD */
