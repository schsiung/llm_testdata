/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE121_Stack_Based_Buffer_Overflow__CWE193_wchar_t_declare_ncpy_65a.c
Label Definition File: CWE121_Stack_Based_Buffer_Overflow__CWE193.label.xml
Template File: sources-sink-65a.tmpl.c
*/
/*
 * @testsuite Juliet_Cpp_1.3
* @description
 * CWE: 121 Stack Based Buffer Overflow
 * BadSource:  Point data to a buffer that does not have space for a NULL terminator
 * GoodSource: Point data to a buffer that includes space for a NULL terminator
 * Sinks: ncpy
 *    BadSink : Copy string to data using wcsncpy()
 * Flow Variant: 65 Data/control flow: data passed as an argument from one function to a function in a different source file called via a function pointer
 *
 * */

#include "std_testcase.h"

#ifndef _WIN32
#include <wchar.h>
#endif

/* MAINTENANCE NOTE: The length of this string should equal the 10 */
#define SRC_STRING L"AAAAAAAAAA"

#ifndef OMITBAD

/* bad function declaration */
void CWE121_Stack_Based_Buffer_Overflow__CWE193_wchar_t_declare_ncpy_65b_badSink(wchar_t * data);

void CWE121_Stack_Based_Buffer_Overflow__CWE193_wchar_t_declare_ncpy_65_bad()
{
    wchar_t * data;
    /* define a function pointer */
    void (*funcPtr) (wchar_t *) = CWE121_Stack_Based_Buffer_Overflow__CWE193_wchar_t_declare_ncpy_65b_badSink;
    wchar_t dataBadBuffer[10];
    wchar_t dataGoodBuffer[10+1];
    /* FLAW: Set a pointer to a buffer that does not leave room for a NULL terminator when performing
     * string copies in the sinks  */
    data = dataBadBuffer;
    data[0] = L'\0'; /* null terminate */
    /* use the function pointer */
    funcPtr(data);
}

#endif /* OMITBAD */

#ifndef OMITGOOD

/* goodG2B uses the GoodSource with the BadSink */
void CWE121_Stack_Based_Buffer_Overflow__CWE193_wchar_t_declare_ncpy_65b_goodG2BSink(wchar_t * data);

static void goodG2B()
{
    wchar_t * data;
    void (*funcPtr) (wchar_t *) = CWE121_Stack_Based_Buffer_Overflow__CWE193_wchar_t_declare_ncpy_65b_goodG2BSink;
    wchar_t dataBadBuffer[10];
    wchar_t dataGoodBuffer[10+1];
    /* FIX: Set a pointer to a buffer that leaves room for a NULL terminator when performing
     * string copies in the sinks  */
    data = dataGoodBuffer;
    data[0] = L'\0'; /* null terminate */
    funcPtr(data);
}

void CWE121_Stack_Based_Buffer_Overflow__CWE193_wchar_t_declare_ncpy_65_good()
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
    CWE121_Stack_Based_Buffer_Overflow__CWE193_wchar_t_declare_ncpy_65_good();
    printLine("Finished good()");
#endif /* OMITGOOD */
#ifndef OMITBAD
    printLine("Calling bad()...");
    CWE121_Stack_Based_Buffer_Overflow__CWE193_wchar_t_declare_ncpy_65_bad();
    printLine("Finished bad()");
#endif /* OMITBAD */
    return 0;
}

#endif
