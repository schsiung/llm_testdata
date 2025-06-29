/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE617_Reachable_Assertion__connect_socket_82_bad.cpp
Label Definition File: CWE617_Reachable_Assertion.label.xml
Template File: sources-sink-82_bad.tmpl.cpp
*/
/*
 * @testsuite Juliet_Cpp_1.3
* @description
 * CWE: 617 Reachable Assertion
 * BadSource: connect_socket Read data using a connect socket (client side)
 * GoodSource: Number greater than ASSERT_VALUE
 * Sinks:
 *    BadSink : Assert if n is less than or equal to ASSERT_VALUE
 * Flow Variant: 82 Data flow: data passed in a parameter to an virtual method called via a pointer
 *
 * */
#ifndef OMITBAD

#include "std_testcase.h"
#include "CWE617_Reachable_Assertion__connect_socket_82.h"

namespace CWE617_Reachable_Assertion__connect_socket_82
{

void CWE617_Reachable_Assertion__connect_socket_82_bad::action(int data)
{
    /* POTENTIAL FLAW: this assertion could trigger if n <= ASSERT_VALUE */
    assert(data > ASSERT_VALUE);
}

}
#endif /* OMITBAD */
