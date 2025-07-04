/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE761_Free_Pointer_Not_at_Start_of_Buffer__char_fixed_string_53b.c
Label Definition File: CWE761_Free_Pointer_Not_at_Start_of_Buffer.label.xml
Template File: source-sinks-53b.tmpl.c
*/
/*
 * @testsuite Juliet_Cpp_1.3
* @description
 * CWE: 761 Free Pointer not at Start of Buffer
 * BadSource: fixed_string Initialize data to be a fixed string
 * Sinks:
 *    GoodSink: free() memory correctly at the start of the buffer
 *    BadSink : free() memory not at the start of the buffer
 * Flow Variant: 53 Data flow: data passed as an argument from one function through two others to a fourth; all four functions are in different source files
 *
 * */

#include "std_testcase.h"

#include <wchar.h>

#define BAD_SOURCE_FIXED_STRING "Fixed String" /* MAINTENANCE NOTE: This string must contain the SEARCH_CHAR */

#define SEARCH_CHAR 'S'

#ifndef OMITBAD

/* bad function declaration */
void CWE761_Free_Pointer_Not_at_Start_of_Buffer__char_fixed_string_53c_badSink(char * data);

void CWE761_Free_Pointer_Not_at_Start_of_Buffer__char_fixed_string_53b_badSink(char * data)
{
    CWE761_Free_Pointer_Not_at_Start_of_Buffer__char_fixed_string_53c_badSink(data);
}

#endif /* OMITBAD */

#ifndef OMITGOOD

/* goodB2G uses the BadSource with the GoodSink */
void CWE761_Free_Pointer_Not_at_Start_of_Buffer__char_fixed_string_53c_goodB2GSink(char * data);

void CWE761_Free_Pointer_Not_at_Start_of_Buffer__char_fixed_string_53b_goodB2GSink(char * data)
{
    CWE761_Free_Pointer_Not_at_Start_of_Buffer__char_fixed_string_53c_goodB2GSink(data);
}

#endif /* OMITGOOD */
