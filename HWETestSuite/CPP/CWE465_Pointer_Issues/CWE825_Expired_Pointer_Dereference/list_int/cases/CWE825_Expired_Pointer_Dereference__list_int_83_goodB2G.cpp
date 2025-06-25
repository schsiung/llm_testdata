/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE825_Expired_Pointer_Dereference__list_int_83_goodB2G.cpp
Label Definition File: CWE825_Expired_Pointer_Dereference__list_int.label.xml
Template File: sources-sinks-83_goodB2G.tmpl.cpp
*/
/*
 * @testsuite Juliet_Cpp_1.3
* @description
 * CWE: 825 Expired Pointer Dereference
 * BadSource:  Add values to the list, including the number zero
 * GoodSource: Add value to the list that are not zero
 * Sinks:
 *    GoodSink: Iterate through the list without attempting to clear its contents
 *    BadSink : Iterate through the list, but clear the list if it contains a zero
 * Flow Variant: 83 Data flow: data passed to class constructor and destructor by declaring the class object on the stack
 *
 * */
#ifndef OMITGOOD

#include "std_testcase.h"
#include "CWE825_Expired_Pointer_Dereference__list_int_83.h"

namespace CWE825_Expired_Pointer_Dereference__list_int_83
{
CWE825_Expired_Pointer_Dereference__list_int_83_goodB2G::CWE825_Expired_Pointer_Dereference__list_int_83_goodB2G(list<int>  dataCopy)
{
    data = dataCopy;
    /* POTENTIAL FLAW: Insert a zero into the list */
    data.push_back(100);
    data.push_back(0);
}

CWE825_Expired_Pointer_Dereference__list_int_83_goodB2G::~CWE825_Expired_Pointer_Dereference__list_int_83_goodB2G()
{
    {
        list<int> ::iterator i;
        cout << "The list contains: ";
        for( i = data.begin(); i != data.end(); i++)
        {
            /* FIX: Do not make any attempt to clear the list */
            cout << " " << *i;
        }
        cout << endl;
    }
}
}
#endif /* OMITGOOD */
