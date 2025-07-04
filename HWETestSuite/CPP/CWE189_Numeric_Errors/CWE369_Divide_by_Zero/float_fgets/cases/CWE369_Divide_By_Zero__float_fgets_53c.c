/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE369_Divide_by_Zero__float_fgets_53c.c
Label Definition File: CWE369_Divide_by_Zero__float.label.xml
Template File: sources-sinks-53c.tmpl.c
*/
/*
 * @testsuite Juliet_Cpp_1.3
* @description
 * CWE: 369 Divide by Zero
 * BadSource: fgets Read data from the console using fgets()
 * GoodSource: A hardcoded non-zero number (two)
 * Sinks:
 *    GoodSink: Check value of or near zero before dividing
 *    BadSink : Divide a constant by data
 * Flow Variant: 53 Data flow: data passed as an argument from one function through two others to a fourth; all four functions are in different source files
 *
 * */

#include "std_testcase.h"

#include <math.h>

#define CHAR_ARRAY_SIZE 20

#ifndef OMITBAD

/* bad function declaration */
void CWE369_Divide_by_Zero__float_fgets_53d_badSink(float data);

void CWE369_Divide_by_Zero__float_fgets_53c_badSink(float data)
{
    CWE369_Divide_by_Zero__float_fgets_53d_badSink(data);
}

#endif /* OMITBAD */

#ifndef OMITGOOD

/* goodG2B uses the GoodSource with the BadSink */
void CWE369_Divide_by_Zero__float_fgets_53d_goodG2BSink(float data);

void CWE369_Divide_by_Zero__float_fgets_53c_goodG2BSink(float data)
{
    CWE369_Divide_by_Zero__float_fgets_53d_goodG2BSink(data);
}

/* goodB2G uses the BadSource with the GoodSink */
void CWE369_Divide_by_Zero__float_fgets_53d_goodB2GSink(float data);

void CWE369_Divide_by_Zero__float_fgets_53c_goodB2GSink(float data)
{
    CWE369_Divide_by_Zero__float_fgets_53d_goodB2GSink(data);
}

#endif /* OMITGOOD */
