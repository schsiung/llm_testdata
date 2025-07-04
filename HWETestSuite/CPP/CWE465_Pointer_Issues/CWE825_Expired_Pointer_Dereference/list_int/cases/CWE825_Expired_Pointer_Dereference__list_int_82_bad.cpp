/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE825_Expired_Pointer_Dereference__list_int_82_bad.cpp
Label Definition File: CWE825_Expired_Pointer_Dereference__list_int.label.xml
Template File: sources-sinks-82_bad.tmpl.cpp
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
 * Flow Variant: 82 Data flow: data passed in a parameter to an virtual method called via a pointer
 *
 * */
#ifndef OMITBAD

#include "std_testcase.h"
#include "CWE825_Expired_Pointer_Dereference__list_int_82.h"

namespace CWE825_Expired_Pointer_Dereference__list_int_82
{

void CWE825_Expired_Pointer_Dereference__list_int_82_bad::action(list<int>  data)
{
    {
        list<int> ::iterator i;
        cout << "The list contains: ";
        for( i = data.begin(); i != data.end(); i++)
        {
            if (!*i)
            {
                data.clear();
            }
            /* POTENTIAL FLAW: Dereference the iterator, which may be invalid if data is cleared */
            cout << " " << *i;
        }
        cout << endl;
    }
}

}
#endif /* OMITBAD */
