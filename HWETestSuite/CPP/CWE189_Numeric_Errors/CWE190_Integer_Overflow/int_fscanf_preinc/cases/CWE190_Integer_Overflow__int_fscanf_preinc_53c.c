/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE190_Integer_Overflow__int_fscanf_preinc_53c.c
Label Definition File: CWE190_Integer_Overflow__int.label.xml
Template File: sources-sinks-53c.tmpl.c
*/
/*
 * @testsuite Juliet_Cpp_1.3
* @description
 * CWE: 190 Integer Overflow
 * BadSource: fscanf Read data from the console using fscanf()
 * GoodSource: Set data to a small, non-zero number (two)
 * Sinks: increment
 *    GoodSink: Ensure there will not be an overflow before incrementing data
 *    BadSink : Increment data, which can cause an overflow
 * Flow Variant: 53 Data flow: data passed as an argument from one function through two others to a fourth; all four functions are in different source files
 *
 * */

#include "std_testcase.h"

#ifndef OMITBAD

/* bad function declaration */
void CWE190_Integer_Overflow__int_fscanf_preinc_53d_badSink(int data);

void CWE190_Integer_Overflow__int_fscanf_preinc_53c_badSink(int data)
{
    CWE190_Integer_Overflow__int_fscanf_preinc_53d_badSink(data);
}

#endif /* OMITBAD */

#ifndef OMITGOOD

/* goodG2B uses the GoodSource with the BadSink */
void CWE190_Integer_Overflow__int_fscanf_preinc_53d_goodG2BSink(int data);

void CWE190_Integer_Overflow__int_fscanf_preinc_53c_goodG2BSink(int data)
{
    CWE190_Integer_Overflow__int_fscanf_preinc_53d_goodG2BSink(data);
}

/* goodB2G uses the BadSource with the GoodSink */
void CWE190_Integer_Overflow__int_fscanf_preinc_53d_goodB2GSink(int data);

void CWE190_Integer_Overflow__int_fscanf_preinc_53c_goodB2GSink(int data)
{
    CWE190_Integer_Overflow__int_fscanf_preinc_53d_goodB2GSink(data);
}

#endif /* OMITGOOD */
