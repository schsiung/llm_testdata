/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE195_Signed_to_Unsigned_Conversion_Error__fscanf_malloc_33.cpp
Label Definition File: CWE195_Signed_to_Unsigned_Conversion_Error.label.xml
Template File: sources-sink-33.tmpl.cpp
*/
/*
 * @description
 * CWE: 195 Signed to Unsigned Conversion Error
 * BadSource: fscanf Read data from the console using fscanf()
 * GoodSource: Positive integer
 * Sinks: malloc
 *    BadSink : Allocate memory using malloc() with the size of data
 * Flow Variant: 33 Data flow: use of a C++ reference to data within the same function
 *
 * */

#include "std_testcase.h"

namespace CWE195_Signed_to_Unsigned_Conversion_Error__fscanf_malloc_33
{

#ifndef OMITBAD

void bad()
{
    int data;
    int &dataRef = data;
    /* Initialize data */
    data = -1;
    /* POTENTIAL FLAW: Read data from the console using fscanf() */
    fscanf(stdin, "%d", &data);
    {
        int data = dataRef;
        /* Assume we want to allocate a relatively small buffer */
        if (data < 100)
        {
            /* POTENTIAL FLAW: malloc() takes a size_t (unsigned int) as input and therefore if it is negative,
             * the conversion will cause malloc() to allocate a very large amount of data or fail */
            char * dataBuffer = (char *)malloc(data);
            /* Do something with dataBuffer */
            memset(dataBuffer, 'A', data-1);
            dataBuffer[data-1] = '\0';
            printLine(dataBuffer);
            free(dataBuffer);
        }
    }
}

#endif /* OMITBAD */

#ifndef OMITGOOD

/* goodG2B() uses the GoodSource with the BadSink */
static void goodG2B()
{
    int data;
    int &dataRef = data;
    /* Initialize data */
    data = -1;
    /* FIX: Use a positive integer less than &InitialDataSize&*/
    data = 100-1;
    {
        int data = dataRef;
        /* Assume we want to allocate a relatively small buffer */
        if (data < 100)
        {
            /* POTENTIAL FLAW: malloc() takes a size_t (unsigned int) as input and therefore if it is negative,
             * the conversion will cause malloc() to allocate a very large amount of data or fail */
            char * dataBuffer = (char *)malloc(data);
            /* Do something with dataBuffer */
            memset(dataBuffer, 'A', data-1);
            dataBuffer[data-1] = '\0';
            printLine(dataBuffer);
            free(dataBuffer);
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

using namespace CWE195_Signed_to_Unsigned_Conversion_Error__fscanf_malloc_33; /* so that we can use good and bad easily */

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
