/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE122_Heap_Based_Buffer_Overflow__CWE131_loop_84a.cpp
Label Definition File: CWE122_Heap_Based_Buffer_Overflow__CWE131.label.xml
Template File: sources-sink-84a.tmpl.cpp
*/
/*
 * @testsuite Juliet_Cpp_1.3
* @description
 * CWE: 122 Heap Based Buffer Overflow
 * BadSource:  Allocate memory without using sizeof(int)
 * GoodSource: Allocate memory using sizeof(int)
 * Sinks: loop
 *    BadSink : Copy array to data using a loop
 * Flow Variant: 84 Data flow: data passed to class constructor and destructor by declaring the class object on the heap and deleting it after use
 *
 * */

#include "std_testcase.h"
#include "CWE122_Heap_Based_Buffer_Overflow__CWE131_loop_84.h"

namespace CWE122_Heap_Based_Buffer_Overflow__CWE131_loop_84
{

#ifndef OMITBAD

void bad()
{
    int * data;
    data = NULL;
    CWE122_Heap_Based_Buffer_Overflow__CWE131_loop_84_bad * badObject = new CWE122_Heap_Based_Buffer_Overflow__CWE131_loop_84_bad(data);
    delete badObject;
}

#endif /* OMITBAD */

#ifndef OMITGOOD

/* goodG2B uses the GoodSource with the BadSink */
static void goodG2B()
{
    int * data;
    data = NULL;
    CWE122_Heap_Based_Buffer_Overflow__CWE131_loop_84_goodG2B * goodG2BObject =  new CWE122_Heap_Based_Buffer_Overflow__CWE131_loop_84_goodG2B(data);
    delete goodG2BObject;
}

void good()
{
    goodG2B();
}

#endif /* OMITGOOD */

} /* close namespace */

/* Below is the main(). It is only used when building this testcase on
   its own for testing or for building a binary to use in testing binary
   analysis tools. It is not used when compiling all the testcases as one
   application, which is how source code analysis tools are tested. */

#ifdef INCLUDEMAIN

using namespace CWE122_Heap_Based_Buffer_Overflow__CWE131_loop_84; /* so that we can use good and bad easily */

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
