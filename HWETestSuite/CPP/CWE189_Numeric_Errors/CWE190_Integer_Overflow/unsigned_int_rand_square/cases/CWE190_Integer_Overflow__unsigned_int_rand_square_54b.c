/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE190_Integer_Overflow__unsigned_int_rand_square_54b.c
Label Definition File: CWE190_Integer_Overflow.label.xml
Template File: sources-sinks-54b.tmpl.c
*/
/*
 * @testsuite Juliet_Cpp_1.3
* @description
 * CWE: 190 Integer Overflow
 * BadSource: rand Set data to result of rand()
 * GoodSource: Set data to a small, non-zero number (two)
 * Sinks: square
 *    GoodSink: Ensure there will not be an overflow before squaring data
 *    BadSink : Square data, which can lead to overflow
 * Flow Variant: 54 Data flow: data passed as an argument from one function through three others to a fifth; all five functions are in different source files
 *
 * */

#include "std_testcase.h"

#include <math.h>

#ifndef OMITBAD

/* bad function declaration */
void CWE190_Integer_Overflow__unsigned_int_rand_square_54c_badSink(unsigned int data);

void CWE190_Integer_Overflow__unsigned_int_rand_square_54b_badSink(unsigned int data)
{
    CWE190_Integer_Overflow__unsigned_int_rand_square_54c_badSink(data);
}

#endif /* OMITBAD */

#ifndef OMITGOOD

/* goodG2B uses the GoodSource with the BadSink */
void CWE190_Integer_Overflow__unsigned_int_rand_square_54c_goodG2BSink(unsigned int data);

void CWE190_Integer_Overflow__unsigned_int_rand_square_54b_goodG2BSink(unsigned int data)
{
    CWE190_Integer_Overflow__unsigned_int_rand_square_54c_goodG2BSink(data);
}

/* goodB2G uses the BadSource with the GoodSink */
void CWE190_Integer_Overflow__unsigned_int_rand_square_54c_goodB2GSink(unsigned int data);

void CWE190_Integer_Overflow__unsigned_int_rand_square_54b_goodB2GSink(unsigned int data)
{
    CWE190_Integer_Overflow__unsigned_int_rand_square_54c_goodB2GSink(data);
}

#endif /* OMITGOOD */
