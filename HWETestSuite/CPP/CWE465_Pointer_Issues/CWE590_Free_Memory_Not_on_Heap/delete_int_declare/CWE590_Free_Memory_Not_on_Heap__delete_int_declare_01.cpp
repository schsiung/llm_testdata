/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE590_Free_Memory_Not_on_Heap__delete_int_declare_01.cpp
Label Definition File: CWE590_Free_Memory_Not_on_Heap__delete.nonpointer.label.xml
Template File: sources-sink-01.tmpl.cpp
*/
/*
 * @testsuite Juliet_Cpp_1.3
* @description
 * CWE: 590 Free Memory Not on Heap
 * BadSource: declare Data buffer is declared on the stack
 * GoodSource: Allocate memory on the heap
 * Sink:
 *    BadSink : Print then free data
 * Flow Variant: 01 Baseline
 *
 * */

#include "std_testcase.h"

#include <wchar.h>

namespace CWE590_Free_Memory_Not_on_Heap__delete_int_declare_01
{

#ifndef OMITBAD

void bad()
{
    int * data;
    data = NULL; /* Initialize data */
    {
        /* FLAW: data is allocated on the stack and deallocated in the BadSink */
        int dataBuffer;
        dataBuffer = 5;
        data = &dataBuffer;
    }
    printIntLine(*data);
    /* POTENTIAL FLAW: Possibly deallocating memory allocated on the stack */
    delete data;
}

#endif /* OMITBAD */

#ifndef OMITGOOD

/* goodG2B uses the GoodSource with the BadSink */
static void goodG2B()
{
    int * data;
    data = NULL; /* Initialize data */
    {
        /* FIX: data is allocated on the heap and deallocated in the BadSink */
        int * dataBuffer = new int;
        *dataBuffer = 5;
        data = dataBuffer;
    }
    printIntLine(*data);
    /* POTENTIAL FLAW: Possibly deallocating memory allocated on the stack */
    delete data;
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

using namespace CWE590_Free_Memory_Not_on_Heap__delete_int_declare_01; /* so that we can use good and bad easily */

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
