/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE590_Free_Memory_Not_on_Heap__delete_class_placement_new_09.cpp
Label Definition File: CWE590_Free_Memory_Not_on_Heap__delete.pointer.label.xml
Template File: sources-sink-09.tmpl.cpp
*/
/*
 * @testsuite Juliet_Cpp_1.3
* @description
 * CWE: 590 Free Memory Not on Heap
 * BadSource: placement_new Data buffer is declared on the stack
 * GoodSource: Allocate memory on the heap
 * Sink:
 *    BadSink : Print then free data
 * Flow Variant: 09 Control flow: if(GLOBAL_CONST_TRUE) and if(GLOBAL_CONST_FALSE)
 *
 * */

#include "std_testcase.h"

#include <wchar.h>

namespace CWE590_Free_Memory_Not_on_Heap__delete_class_placement_new_09
{

#ifndef OMITBAD

void bad()
{
    TwoIntsClass * data;
    data = NULL; /* Initialize data */
    if(GLOBAL_CONST_TRUE)
    {
        {
            /* FLAW: data is allocated on the stack and deallocated in the BadSink */
            char buffer[sizeof(TwoIntsClass)];
            TwoIntsClass * dataBuffer = new(buffer) TwoIntsClass;
            dataBuffer->intOne = 2;
            dataBuffer->intTwo = 2;
            data = dataBuffer;
        }
    }
    printIntLine(data->intOne);
    /* POTENTIAL FLAW: Possibly deallocating memory allocated on the stack */
    delete data;
}

#endif /* OMITBAD */

#ifndef OMITGOOD

/* goodG2B1() - use goodsource and badsink by changing the GLOBAL_CONST_TRUE to GLOBAL_CONST_FALSE */
static void goodG2B1()
{
    TwoIntsClass * data;
    data = NULL; /* Initialize data */
    if(GLOBAL_CONST_FALSE)
    {
        /* INCIDENTAL: CWE 561 Dead Code, the code below will never run */
        printLine("Benign, fixed string");
    }
    else
    {
        {
            /* FIX: data is allocated on the heap and deallocated in the BadSink */
            TwoIntsClass * dataBuffer = new TwoIntsClass;
            dataBuffer->intOne = 2;
            dataBuffer->intTwo = 2;
            data = dataBuffer;
        }
    }
    printIntLine(data->intOne);
    /* POTENTIAL FLAW: Possibly deallocating memory allocated on the stack */
    delete data;
}

/* goodG2B2() - use goodsource and badsink by reversing the blocks in the if statement */
static void goodG2B2()
{
    TwoIntsClass * data;
    data = NULL; /* Initialize data */
    if(GLOBAL_CONST_TRUE)
    {
        {
            /* FIX: data is allocated on the heap and deallocated in the BadSink */
            TwoIntsClass * dataBuffer = new TwoIntsClass;
            dataBuffer->intOne = 2;
            dataBuffer->intTwo = 2;
            data = dataBuffer;
        }
    }
    printIntLine(data->intOne);
    /* POTENTIAL FLAW: Possibly deallocating memory allocated on the stack */
    delete data;
}

void good()
{
    goodG2B1();
    goodG2B2();
}

#endif /* OMITGOOD */

} /* close namespace */

/* Below is the main(). It is only used when building this testcase on
   its own for testing or for building a binary to use in testing binary
   analysis tools. It is not used when compiling all the testcases as one
   application, which is how source code analysis tools are tested. */

#ifdef INCLUDEMAIN

using namespace CWE590_Free_Memory_Not_on_Heap__delete_class_placement_new_09; /* so that we can use good and bad easily */

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
