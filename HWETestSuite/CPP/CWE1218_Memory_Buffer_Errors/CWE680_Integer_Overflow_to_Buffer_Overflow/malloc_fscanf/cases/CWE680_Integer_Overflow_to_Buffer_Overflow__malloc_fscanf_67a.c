/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE680_Integer_Overflow_to_Buffer_Overflow__malloc_fscanf_67a.c
Label Definition File: CWE680_Integer_Overflow_to_Buffer_Overflow__malloc.label.xml
Template File: sources-sink-67a.tmpl.c
*/
/*
 * @testsuite Juliet_Cpp_1.3
* @description
 * CWE: 680 Integer Overflow to Buffer Overflow
 * BadSource: fscanf Read data from the console using fscanf()
 * GoodSource: Small number greater than zero that will not cause an integer overflow in the sink
 * Sinks:
 *    BadSink : Attempt to allocate array using length value from source
 * Flow Variant: 67 Data flow: data passed in a struct from one function to another in different source files
 *
 * */

#include "std_testcase.h"

typedef struct _CWE680_Integer_Overflow_to_Buffer_Overflow__malloc_fscanf_67_structType
{
    int structFirst;
} CWE680_Integer_Overflow_to_Buffer_Overflow__malloc_fscanf_67_structType;

#ifndef OMITBAD

/* bad function declaration */
void CWE680_Integer_Overflow_to_Buffer_Overflow__malloc_fscanf_67b_badSink(CWE680_Integer_Overflow_to_Buffer_Overflow__malloc_fscanf_67_structType myStruct);

void CWE680_Integer_Overflow_to_Buffer_Overflow__malloc_fscanf_67_bad()
{
    int data;
    CWE680_Integer_Overflow_to_Buffer_Overflow__malloc_fscanf_67_structType myStruct;
    /* Initialize data */
    data = -1;
    /* POTENTIAL FLAW: Read data from the console using fscanf() */
    fscanf(stdin, "%d", &data);
    myStruct.structFirst = data;
    CWE680_Integer_Overflow_to_Buffer_Overflow__malloc_fscanf_67b_badSink(myStruct);
}

#endif /* OMITBAD */

#ifndef OMITGOOD

/* goodG2B uses the GoodSource with the BadSink */
void CWE680_Integer_Overflow_to_Buffer_Overflow__malloc_fscanf_67b_goodG2BSink(CWE680_Integer_Overflow_to_Buffer_Overflow__malloc_fscanf_67_structType myStruct);

static void goodG2B()
{
    int data;
    CWE680_Integer_Overflow_to_Buffer_Overflow__malloc_fscanf_67_structType myStruct;
    /* Initialize data */
    data = -1;
    /* FIX: Set data to a relatively small number greater than zero */
    data = 20;
    myStruct.structFirst = data;
    CWE680_Integer_Overflow_to_Buffer_Overflow__malloc_fscanf_67b_goodG2BSink(myStruct);
}

void CWE680_Integer_Overflow_to_Buffer_Overflow__malloc_fscanf_67_good()
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
    CWE680_Integer_Overflow_to_Buffer_Overflow__malloc_fscanf_67_good();
    printLine("Finished good()");
#endif /* OMITGOOD */
#ifndef OMITBAD
    printLine("Calling bad()...");
    CWE680_Integer_Overflow_to_Buffer_Overflow__malloc_fscanf_67_bad();
    printLine("Finished bad()");
#endif /* OMITBAD */
    return 0;
}

#endif
