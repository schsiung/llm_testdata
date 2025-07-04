/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE191_Integer_Underflow__unsigned_int_min_sub_82a.cpp
Label Definition File: CWE191_Integer_Underflow.label.xml
Template File: sources-sinks-82a.tmpl.cpp
*/
/*
 * @testsuite Juliet_Cpp_1.3
* @description
 * CWE: 191 Integer Underflow
 * BadSource: min Set data to the min value for unsigned int
 * GoodSource: Set data to a small, non-zero number (negative two)
 * Sinks: sub
 *    GoodSink: Ensure there will not be an underflow before subtracting 1 from data
 *    BadSink : Subtract 1 from data, which can cause an Underflow
 * Flow Variant: 82 Data flow: data passed in a parameter to an virtual method called via a pointer
 *
 * */

#include "std_testcase.h"
#include "CWE191_Integer_Underflow__unsigned_int_min_sub_82.h"

namespace CWE191_Integer_Underflow__unsigned_int_min_sub_82
{

#ifndef OMITBAD

void bad()
{
    unsigned int data;
    data = 0;
    /* POTENTIAL FLAW: Use the minimum size of the data type */
    data = 0;
    CWE191_Integer_Underflow__unsigned_int_min_sub_82_base* baseObject = new CWE191_Integer_Underflow__unsigned_int_min_sub_82_bad;
    baseObject->action(data);
    delete baseObject;
}

#endif /* OMITBAD */

#ifndef OMITGOOD

/* goodG2B uses the GoodSource with the BadSink */
static void goodG2B()
{
    unsigned int data;
    data = 0;
    /* FIX: Use a small, non-zero value that will not cause an underflow in the sinks */
    data = -2;
    CWE191_Integer_Underflow__unsigned_int_min_sub_82_base* baseObject = new CWE191_Integer_Underflow__unsigned_int_min_sub_82_goodG2B;
    baseObject->action(data);
    delete baseObject;
}

/* goodB2G uses the BadSource with the GoodSink */
static void goodB2G()
{
    unsigned int data;
    data = 0;
    /* POTENTIAL FLAW: Use the minimum size of the data type */
    data = 0;
    CWE191_Integer_Underflow__unsigned_int_min_sub_82_base* baseObject = new CWE191_Integer_Underflow__unsigned_int_min_sub_82_goodB2G;
    baseObject->action(data);
    delete baseObject;
}

void good()
{
    goodG2B();
    goodB2G();
}

#endif /* OMITGOOD */

} /* close namespace */

/* Below is the main(). It is only used when building this testcase on
   its own for testing or for building a binary to use in testing binary
   analysis tools. It is not used when compiling all the testcases as one
   application, which is how source code analysis tools are tested. */

#ifdef INCLUDEMAIN

using namespace CWE191_Integer_Underflow__unsigned_int_min_sub_82; /* so that we can use good and bad easily */

int main(int argc, char * argv[])
{
    /* seed randomness */
    srand( (unsigned)time(NULL) );
#ifndef OMITGOOD
    printLine("Calling good()...");
    good();
    printLine("Finished good()");
#endif /* OMITGOOD */
#ifndef OMITBAD
    printLine("Calling bad()...");
    bad();
    printLine("Finished bad()");
#endif /* OMITBAD */
    return 0;
}

#endif
