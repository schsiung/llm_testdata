/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE366_Race_Condition_Within_Thread__global_int_04.c
Label Definition File: CWE366_Race_Condition_Within_Thread.label.xml
Template File: point-flaw-04.tmpl.c
*/
/*
 * @testsuite Juliet_Cpp_1.3
* @description
 * CWE: 366 Race Condition Within a Thread
 * Sinks: global_int
 *    GoodSink: Acquire a lock before attempting to increment a global integer using another function
 *    BadSink : Do not acquire a lock before attempting to increment a global integer using another function
 * Flow Variant: 04 Control flow: if(STATIC_CONST_TRUE) and if(STATIC_CONST_FALSE)
 *
 * */

#include "std_testcase.h"

#include "std_thread.h"

#define N_ITERS 1000000

static int gBadInt = 0;
static int gGoodInt = 0;
static stdThreadLock gGoodLock = NULL;

static void helperBad(void *args)
{
    int i;
    /* FLAW: incrementing an integer is not guaranteed to occur atomically;
     * therefore this operation may not function as intended in multi-threaded
     * programs
     */
    /* I'm going to risk going out on a limb here and making this slightly
     * more complicated to illustrate the point: doing this in a loop a million
     * times makes it much more "obvious" that something wrong might happen
     * (you can even see it in action when you run the program)
     */
    for (i = 0; i < N_ITERS; i++)
    {
        gBadInt = gBadInt + 1;
    }
}

static void helperGood(void *args)
{
    int i;
    /* FIX: acquire a lock before conducting operations that need to occur
     * atomically, and release afterwards */
    stdThreadLockAcquire(gGoodLock);
    for (i = 0; i < N_ITERS; i++)
    {
        gGoodInt = gGoodInt + 1;
    }
    stdThreadLockRelease(gGoodLock);
}

/* The two variables below are declared "const", so a tool should
   be able to identify that reads of these will always return their
   initialized values. */
static const int STATIC_CONST_TRUE = 1; /* true */
static const int STATIC_CONST_FALSE = 0; /* false */

#ifndef OMITBAD

void CWE366_Race_Condition_Within_Thread__global_int_04_bad()
{
    if(STATIC_CONST_TRUE)
    {
        {
            stdThread threadA = NULL;
            stdThread threadB = NULL;
            gBadInt = 0;
            if (!stdThreadCreate(helperBad, NULL, &threadA))
            {
                threadA = NULL;
            }
            if (!stdThreadCreate(helperBad, NULL, &threadB))
            {
                threadB = NULL;
            }
            if (threadA && stdThreadJoin(threadA))
            {
                stdThreadDestroy(threadA);
            }
            if (threadB && stdThreadJoin(threadB))
            {
                stdThreadDestroy(threadB);
            }
            printIntLine(gBadInt);
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
            stdThread threadA = NULL;
            stdThread threadB = NULL;
            if (!stdThreadLockCreate(&gGoodLock))
            {
                return;
            }
            if (!stdThreadCreate(helperGood, NULL, &threadA))
            {
                threadA = NULL;
            }
            if (!stdThreadCreate(helperGood, NULL, &threadB))
            {
                threadB = NULL;
            }
            if (threadA && stdThreadJoin(threadA))
            {
                stdThreadDestroy(threadA);
            }
            if (threadB && stdThreadJoin(threadB))
            {
                stdThreadDestroy(threadB);
            }
            stdThreadLockDestroy(gGoodLock);
            printIntLine(gGoodInt);
        }
    }
}

/* good2() reverses the bodies in the if statement */
static void good2()
{
    if(STATIC_CONST_TRUE)
    {
        {
            stdThread threadA = NULL;
            stdThread threadB = NULL;
            if (!stdThreadLockCreate(&gGoodLock))
            {
                return;
            }
            if (!stdThreadCreate(helperGood, NULL, &threadA))
            {
                threadA = NULL;
            }
            if (!stdThreadCreate(helperGood, NULL, &threadB))
            {
                threadB = NULL;
            }
            if (threadA && stdThreadJoin(threadA))
            {
                stdThreadDestroy(threadA);
            }
            if (threadB && stdThreadJoin(threadB))
            {
                stdThreadDestroy(threadB);
            }
            stdThreadLockDestroy(gGoodLock);
            printIntLine(gGoodInt);
        }
    }
}

void CWE366_Race_Condition_Within_Thread__global_int_04_good()
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
    CWE366_Race_Condition_Within_Thread__global_int_04_good();
    printLine("Finished good()");
#endif /* OMITGOOD */
#ifndef OMITBAD
    printLine("Calling bad()...");
    CWE366_Race_Condition_Within_Thread__global_int_04_bad();
    printLine("Finished bad()");
#endif /* OMITBAD */
    return 0;
}

#endif
