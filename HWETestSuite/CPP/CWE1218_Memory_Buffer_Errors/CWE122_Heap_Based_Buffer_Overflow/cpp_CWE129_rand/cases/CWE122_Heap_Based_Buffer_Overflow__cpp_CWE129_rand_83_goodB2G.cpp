/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE122_Heap_Based_Buffer_Overflow__cpp_CWE129_rand_83_goodB2G.cpp
Label Definition File: CWE122_Heap_Based_Buffer_Overflow__cpp_CWE129.label.xml
Template File: sources-sinks-83_goodB2G.tmpl.cpp
*/
/*
 * @testsuite Juliet_Cpp_1.3
* @description
 * CWE: 122 Heap Based Buffer Overflow
 * BadSource: rand Set data to result of rand(), which may be zero
 * GoodSource: Larger than zero but less than 10
 * Sinks:
 *    GoodSink: Ensure the array index is valid
 *    BadSink : Improperly check the array index by not checking the upper bound
 * Flow Variant: 83 Data flow: data passed to class constructor and destructor by declaring the class object on the stack
 *
 * */
#ifndef OMITGOOD

#include "std_testcase.h"
#include "CWE122_Heap_Based_Buffer_Overflow__cpp_CWE129_rand_83.h"

namespace CWE122_Heap_Based_Buffer_Overflow__cpp_CWE129_rand_83
{
CWE122_Heap_Based_Buffer_Overflow__cpp_CWE129_rand_83_goodB2G::CWE122_Heap_Based_Buffer_Overflow__cpp_CWE129_rand_83_goodB2G(int dataCopy)
{
    data = dataCopy;
    /* POTENTIAL FLAW: Set data to a random value */
    data = RAND32();
}

CWE122_Heap_Based_Buffer_Overflow__cpp_CWE129_rand_83_goodB2G::~CWE122_Heap_Based_Buffer_Overflow__cpp_CWE129_rand_83_goodB2G()
{
    {
        int i;
        int * buffer = new int[10];
        /* initialize buffer */
        for (i = 0; i < 10; i++)
        {
            buffer[i] = 0;
        }
        /* FIX: Properly validate the array index and prevent a buffer overflow */
        if (data >= 0 && data < (10))
        {
            buffer[data] = 1;
            /* Print the array values */
            for(i = 0; i < 10; i++)
            {
                printIntLine(buffer[i]);
            }
        }
        else
        {
            printLine("ERROR: Array index is out-of-bounds");
        }
        delete[] buffer;
    }
}
}
#endif /* OMITGOOD */
