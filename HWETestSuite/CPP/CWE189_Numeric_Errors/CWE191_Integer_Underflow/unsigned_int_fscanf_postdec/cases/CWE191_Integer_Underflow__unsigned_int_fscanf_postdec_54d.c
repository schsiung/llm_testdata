/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE191_Integer_Underflow__unsigned_int_fscanf_postdec_54d.c
Label Definition File: CWE191_Integer_Underflow.label.xml
Template File: sources-sinks-54d.tmpl.c
*/
/*
 * @testsuite Juliet_Cpp_1.3
* @description
 * CWE: 191 Integer Underflow
 * BadSource: fscanf Read data from the console using fscanf()
 * GoodSource: Set data to a small, non-zero number (negative two)
 * Sinks: decrement
 *    GoodSink: Ensure there will not be an underflow before decrementing data
 *    BadSink : Decrement data, which can cause an Underflow
 * Flow Variant: 54 Data flow: data passed as an argument from one function through three others to a fifth; all five functions are in different source files
 *
 * */

#include "std_testcase.h"

#ifndef OMITBAD

/* bad function declaration */
void CWE191_Integer_Underflow__unsigned_int_fscanf_postdec_54e_badSink(unsigned int data);

void CWE191_Integer_Underflow__unsigned_int_fscanf_postdec_54d_badSink(unsigned int data)
{
    CWE191_Integer_Underflow__unsigned_int_fscanf_postdec_54e_badSink(data);
}

#endif /* OMITBAD */

#ifndef OMITGOOD

/* goodG2B uses the GoodSource with the BadSink */
void CWE191_Integer_Underflow__unsigned_int_fscanf_postdec_54e_goodG2BSink(unsigned int data);

void CWE191_Integer_Underflow__unsigned_int_fscanf_postdec_54d_goodG2BSink(unsigned int data)
{
    CWE191_Integer_Underflow__unsigned_int_fscanf_postdec_54e_goodG2BSink(data);
}

/* goodB2G uses the BadSource with the GoodSink */
void CWE191_Integer_Underflow__unsigned_int_fscanf_postdec_54e_goodB2GSink(unsigned int data);

void CWE191_Integer_Underflow__unsigned_int_fscanf_postdec_54d_goodB2GSink(unsigned int data)
{
    CWE191_Integer_Underflow__unsigned_int_fscanf_postdec_54e_goodB2GSink(data);
}

#endif /* OMITGOOD */
