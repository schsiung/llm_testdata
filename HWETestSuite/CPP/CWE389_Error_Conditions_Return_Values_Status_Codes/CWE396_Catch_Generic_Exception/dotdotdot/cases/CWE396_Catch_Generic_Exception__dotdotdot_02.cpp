/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE396_Catch_Generic_Exception__dotdotdot_02.cpp
Label Definition File: CWE396_Catch_Generic_Exception.label.xml
Template File: point-flaw-02.tmpl.cpp
*/
/*
 * @testsuite Juliet_Cpp_1.3
* @description
 * CWE: 396 Catch Generic Exception
 * Sinks: dotdotdot
 *    GoodSink: Catch specific exceptions
 *    BadSink : Catch ..., which will catch any exception
 * Flow Variant: 02 Control flow: if(1) and if(0)
 *
 * */

#include "std_testcase.h"

#include <stdexcept> /* for out_of_range and domain_error */

using namespace std; /* allow easy references to out_of_range and domain_error */

namespace CWE396_Catch_Generic_Exception__dotdotdot_02
{

#ifndef OMITBAD

void bad()
{
    if(1)
    {
        try
        {
            if (rand()%2 == 0)
            {
                throw out_of_range("err1");
            }
            if (rand()%2 == 0)
            {
                throw domain_error("err2");
            }
        }
        catch (...)
        {
            /* FLAW: this catches _everything_, STL exceptions or otherwise */
            printLine("exception");
        }
        printLine("ok");
    }
}

#endif /* OMITBAD */

#ifndef OMITGOOD

/* good1() uses if(0) instead of if(1) */
static void good1()
{
    if(0)
    {
        /* INCIDENTAL: CWE 561 Dead Code, the code below will never run */
        printLine("Benign, fixed string");
    }
    else
    {
        try
        {
            if (rand()%2 == 0)
            {
                throw out_of_range("err1");
            }
            if (rand()%2 == 0)
            {
                throw domain_error("err2");
            }
        }
        catch (out_of_range &)
        {
            /* FIX: specify each catch individually */
            printLine("out_of_range");
        }
        catch (domain_error &)
        {
            printLine("domain_error");
            return;
        }
        printLine("ok");
    }
}

/* good2() reverses the bodies in the if statement */
static void good2()
{
    if(1)
    {
        try
        {
            if (rand()%2 == 0)
            {
                throw out_of_range("err1");
            }
            if (rand()%2 == 0)
            {
                throw domain_error("err2");
            }
        }
        catch (out_of_range &)
        {
            /* FIX: specify each catch individually */
            printLine("out_of_range");
        }
        catch (domain_error &)
        {
            printLine("domain_error");
            return;
        }
        printLine("ok");
    }
}

void good()
{
    good1();
    good2();
}

#endif /* OMITGOOD */

} /* close namespace */

/* Below is the main(). It is only used when building this testcase on
   its own for testing or for building a binary to use in testing binary
   analysis tools. It is not used when compiling all the testcases as one
   application, which is how source code analysis tools are tested. */

#ifdef INCLUDEMAIN

using namespace CWE396_Catch_Generic_Exception__dotdotdot_02; /* so that we can use good and bad easily */

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
