/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE190_Integer_Overflow__unsigned_int_rand_add_22b.c
Label Definition File: CWE190_Integer_Overflow.label.xml
Template File: sources-sinks-22b.tmpl.c
*/
/*
 * @testsuite Juliet_Cpp_1.3
* @description
 * CWE: 190 Integer Overflow
 * BadSource: rand Set data to result of rand()
 * GoodSource: Set data to a small, non-zero number (two)
 * Sinks: add
 *    GoodSink: Ensure there will not be an overflow before adding 1 to data
 *    BadSink : Add 1 to data, which can cause an overflow
 * Flow Variant: 22 Control flow: Flow controlled by value of a global variable. Sink functions are in a separate file from sources.
 *
 * */

#include "std_testcase.h"

#ifndef OMITBAD

/* The global variable below is used to drive control flow in the sink function */
extern int CWE190_Integer_Overflow__unsigned_int_rand_add_22_badGlobal;

void CWE190_Integer_Overflow__unsigned_int_rand_add_22_badSink(unsigned int data)
{
    if(CWE190_Integer_Overflow__unsigned_int_rand_add_22_badGlobal)
    {
        {
            /* POTENTIAL FLAW: Adding 1 to data could cause an overflow */
            unsigned int result = data + 1;
            printUnsignedLine(result);
        }
    }
}

#endif /* OMITBAD */

#ifndef OMITGOOD

/* The global variables below are used to drive control flow in the sink functions. */
extern int CWE190_Integer_Overflow__unsigned_int_rand_add_22_goodB2G1Global;
extern int CWE190_Integer_Overflow__unsigned_int_rand_add_22_goodB2G2Global;
extern int CWE190_Integer_Overflow__unsigned_int_rand_add_22_goodG2BGlobal;

/* goodB2G1() - use badsource and goodsink by setting the static variable to false instead of true */
void CWE190_Integer_Overflow__unsigned_int_rand_add_22_goodB2G1Sink(unsigned int data)
{
    if(CWE190_Integer_Overflow__unsigned_int_rand_add_22_goodB2G1Global)
    {
        /* INCIDENTAL: CWE 561 Dead Code, the code below will never run */
        printLine("Benign, fixed string");
    }
    else
    {
        /* FIX: Add a check to prevent an overflow from occurring */
        if (data < UINT_MAX)
        {
            unsigned int result = data + 1;
            printUnsignedLine(result);
        }
        else
        {
            printLine("data value is too large to perform arithmetic safely.");
        }
    }
}

/* goodB2G2() - use badsource and goodsink by reversing the blocks in the if in the sink function */
void CWE190_Integer_Overflow__unsigned_int_rand_add_22_goodB2G2Sink(unsigned int data)
{
    if(CWE190_Integer_Overflow__unsigned_int_rand_add_22_goodB2G2Global)
    {
        /* FIX: Add a check to prevent an overflow from occurring */
        if (data < UINT_MAX)
        {
            unsigned int result = data + 1;
            printUnsignedLine(result);
        }
        else
        {
            printLine("data value is too large to perform arithmetic safely.");
        }
    }
}

/* goodG2B() - use goodsource and badsink */
void CWE190_Integer_Overflow__unsigned_int_rand_add_22_goodG2BSink(unsigned int data)
{
    if(CWE190_Integer_Overflow__unsigned_int_rand_add_22_goodG2BGlobal)
    {
        {
            /* POTENTIAL FLAW: Adding 1 to data could cause an overflow */
            unsigned int result = data + 1;
            printUnsignedLine(result);
        }
    }
}

#endif /* OMITGOOD */
