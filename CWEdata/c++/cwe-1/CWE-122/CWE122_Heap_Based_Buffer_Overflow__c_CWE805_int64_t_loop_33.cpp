/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE122_Heap_Based_Buffer_Overflow__c_CWE805_int64_t_loop_33.cpp
Label Definition File: CWE122_Heap_Based_Buffer_Overflow__c_CWE805.label.xml
Template File: sources-sink-33.tmpl.cpp
*/
/*
 * @description
 * CWE: 122 Heap Based Buffer Overflow
 * BadSource:  Allocate using malloc() and set data pointer to a small buffer
 * GoodSource: Allocate using malloc() and set data pointer to a large buffer
 * Sinks: loop
 *    BadSink : Copy int64_t array to data using a loop
 * Flow Variant: 33 Data flow: use of a C++ reference to data within the same function
 *
 * */

#include "std_testcase.h"

namespace CWE122_Heap_Based_Buffer_Overflow__c_CWE805_int64_t_loop_33
{

#ifndef OMITBAD

void bad()
{
    int64_t * data;
    int64_t * &dataRef = data;
    data = NULL;
    /* FLAW: Allocate and point data to a small buffer that is smaller than the large buffer used in the sinks */
    data = (int64_t *)malloc(50*sizeof(int64_t));
    {
        int64_t * data = dataRef;
        {
            int64_t source[100] = {0}; /* fill with 0's */
            {
                size_t i;
                /* POTENTIAL FLAW: Possible buffer overflow if data < 100 */
                for (i = 0; i < 100; i++)
                {
                    data[i] = source[i];
                }
                printLongLongLine(data[0]);
                free(data);
            }
        }
    }
}

#endif /* OMITBAD */

#ifndef OMITGOOD

/* goodG2B() uses the GoodSource with the BadSink */
static void goodG2B()
{
    int64_t * data;
    int64_t * &dataRef = data;
    data = NULL;
    /* FIX: Allocate and point data to a large buffer that is at least as large as the large buffer used in the sink */
    data = (int64_t *)malloc(100*sizeof(int64_t));
    {
        int64_t * data = dataRef;
        {
            int64_t source[100] = {0}; /* fill with 0's */
            {
                size_t i;
                /* POTENTIAL FLAW: Possible buffer overflow if data < 100 */
                for (i = 0; i < 100; i++)
                {
                    data[i] = source[i];
                }
                printLongLongLine(data[0]);
                free(data);
            }
        }
    }
}

void good()
{
    goodG2B();
}

#endif /* OMITGOOD */

} /* close namespace */

/* Below is the main(). It is only used when building this testcase on
 * its own for testing or for building a binary to use in testing binary
 * analysis tools. It is not used when compiling all the testcases as one
 * application, which is how source code analysis tools are tested.
 */
#ifdef INCLUDEMAIN

using namespace CWE122_Heap_Based_Buffer_Overflow__c_CWE805_int64_t_loop_33; /* so that we can use good and bad easily */

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
