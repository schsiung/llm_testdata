/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE843_Type_Confusion__short_44.c
Label Definition File: CWE843_Type_Confusion.label.xml
Template File: sources-sink-44.tmpl.c
*/
/*
 * @testsuite Juliet_Cpp_1.3
* @description
 * CWE: 843 Type Confusion
 * BadSource: short Point data to a short data type
 * GoodSource: Point data to an int data type
 * Sinks:
 *    BadSink : Attempt to access data as an int
 * Flow Variant: 44 Data/control flow: data passed as an argument from one function to a function in the same source file called via a function pointer
 *
 * */

#include "std_testcase.h"

#ifndef OMITBAD

static void badSink(void * data)
{
    /* POTENTIAL FLAW: Attempt to access data as an int */
    printIntLine(*((int*)data));
}

void CWE843_Type_Confusion__short_44_bad()
{
    void * data;
    /* define a function pointer */
    void (*funcPtr) (void *) = badSink;
    /* Initialize data */
    data = NULL;
    {
        /* FLAW: Point data to a short */
        short shortBuffer = 8;
        data = &shortBuffer;
    }
    /* use the function pointer */
    funcPtr(data);
}

#endif /* OMITBAD */

#ifndef OMITGOOD

/* goodG2B() uses the GoodSource with the BadSink */
static void goodG2BSink(void * data)
{
    /* POTENTIAL FLAW: Attempt to access data as an int */
    printIntLine(*((int*)data));
}

static void goodG2B()
{
    void * data;
    void (*funcPtr) (void *) = goodG2BSink;
    /* Initialize data */
    data = NULL;
    {
        /* FIX: Point data to an int */
        int intBuffer = 8;
        data = &intBuffer;
    }
    funcPtr(data);
}

void CWE843_Type_Confusion__short_44_good()
{
    goodG2B();
}

#endif /* OMITGOOD */

/* Below is the main(). It is only used when building this testcase on
 * its own for testing or for building a binary to use in testing binary
 * analysis tools. It is not used when compiling all the testcases as one
 * application, which is how source code analysis tools are tested.
 */
#ifdef INCLUDEMAIN

int main(int argc, char * argv[])
{
    /* seed randomness */
    srand( (unsigned)time(NULL) );
#ifndef OMITGOOD
    printLine("Calling good()...");
    CWE843_Type_Confusion__short_44_good();
    printLine("Finished good()");
#endif /* OMITGOOD */
#ifndef OMITBAD
    printLine("Calling bad()...");
    CWE843_Type_Confusion__short_44_bad();
    printLine("Finished bad()");
#endif /* OMITBAD */
    return 0;
}

#endif
