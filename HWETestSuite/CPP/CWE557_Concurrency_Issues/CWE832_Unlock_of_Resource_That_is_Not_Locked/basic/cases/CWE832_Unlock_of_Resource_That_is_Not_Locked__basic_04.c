/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE832_Unlock_of_Resource_That_is_Not_Locked__basic_04.c
Label Definition File: CWE832_Unlock_of_Resource_That_is_Not_Locked__basic.label.xml
Template File: point-flaw-04.tmpl.c
*/
/*
 * @testsuite Juliet_Cpp_1.3
* @description
 * CWE: 832 Unlock Of Resource That Is Not Locked
 * Sinks:
 *    GoodSink: Acquire a lock before releasing it
 *    BadSink : Release the lock before acquiring it
 * Flow Variant: 04 Control flow: if(STATIC_CONST_TRUE) and if(STATIC_CONST_FALSE)
 *
 * */

#include "std_testcase.h"

#include "std_thread.h"

/* The two variables below are declared "const", so a tool should
   be able to identify that reads of these will always return their
   initialized values. */
static const int STATIC_CONST_TRUE = 1; /* true */
static const int STATIC_CONST_FALSE = 0; /* false */

#ifndef OMITBAD

void CWE832_Unlock_of_Resource_That_is_Not_Locked__basic_04_bad()
{
    if(STATIC_CONST_TRUE)
    {
        {
            static stdThreadLock badLock = NULL;
            printLine("Creating lock...");
            if (!stdThreadLockCreate(&badLock))
            {
                printLine("Could not create lock");
                exit(1);
            }
            /* FLAW: Release the lock before acquiring it */
            printLine("Releasing lock...");
            stdThreadLockRelease(badLock);
            printLine("Destroying lock...");
            stdThreadLockDestroy(badLock);
        }
    }
}

#endif /* OMITBAD */

#ifndef OMITGOOD

/* good1() uses if(STATIC_CONST_FALSE) instead of if(STATIC_CONST_TRUE) */
static void good1()
{
    if(STATIC_CONST_FALSE)
    {
        /* INCIDENTAL: CWE 561 Dead Code, the code below will never run */
        printLine("Benign, fixed string");
    }
    else
    {
        {
            static stdThreadLock goodLock = NULL;
            printLine("Creating lock...");
            if (!stdThreadLockCreate(&goodLock))
            {
                printLine("Could not create lock");
                exit(1);
            }
            /* FIX: Acquire the lock before attempting to release it */
            printLine("Acquiring lock...");
            stdThreadLockAcquire(goodLock);
            printLine("Releasing lock...");
            stdThreadLockRelease(goodLock);
            printLine("Destroying lock...");
            stdThreadLockDestroy(goodLock);
        }
    }
}

/* good2() reverses the bodies in the if statement */
static void good2()
{
    if(STATIC_CONST_TRUE)
    {
        {
            static stdThreadLock goodLock = NULL;
            printLine("Creating lock...");
            if (!stdThreadLockCreate(&goodLock))
            {
                printLine("Could not create lock");
                exit(1);
            }
            /* FIX: Acquire the lock before attempting to release it */
            printLine("Acquiring lock...");
            stdThreadLockAcquire(goodLock);
            printLine("Releasing lock...");
            stdThreadLockRelease(goodLock);
            printLine("Destroying lock...");
            stdThreadLockDestroy(goodLock);
        }
    }
}

void CWE832_Unlock_of_Resource_That_is_Not_Locked__basic_04_good()
{
    good1();
    good2();
}

#endif /* OMITGOOD */

/* Below is the main(). It is only used when building this testcase on
   its own for testing or for building a binary to use in testing binary
   analysis tools. It is not used when compiling all the testcases as one
   application, which is how source code analysis tools are tested. */

#ifdef INCLUDEMAIN

int main(int argc, char * argv[])
{
    /* seed randomness */
    srand( (unsigned)time(NULL) );
#ifndef OMITGOOD
    printLine("Calling good()...");
    CWE832_Unlock_of_Resource_That_is_Not_Locked__basic_04_good();
    printLine("Finished good()");
#endif /* OMITGOOD */
#ifndef OMITBAD
    printLine("Calling bad()...");
    CWE832_Unlock_of_Resource_That_is_Not_Locked__basic_04_bad();
    printLine("Finished bad()");
#endif /* OMITBAD */
    return 0;
}

#endif
