/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE775_Missing_Release_of_File_Descriptor_or_Handle__fopen_w32_close_18.c
Label Definition File: CWE775_Missing_Release_of_File_Descriptor_or_Handle.label.xml
Template File: source-sinks-18.tmpl.c
*/
/*
 * @testsuite Juliet_Cpp_1.3
* @description
 * CWE: 775 Missing Release of File Descriptor or Handle
 * BadSource: fopen Open a file using fopen()
 * Sinks: w32_close
 *    GoodSink: Close the file using fclose()
 *    BadSink : Close the file using close()
 * Flow Variant: 18 Control flow: goto statements
 *
 * */

#include "std_testcase.h"

#ifndef OMITBAD

void CWE775_Missing_Release_of_File_Descriptor_or_Handle__fopen_w32_close_18_bad()
{
    FILE * data;
    /* Initialize data */
    data = NULL;
    /* POTENTIAL FLAW: Open a file - need to make sure it is closed properly in the sink */
    data = fopen("BadSource_fopen.txt", "w+");
    goto sink;
sink:
    if (data != NULL)
    {
        /* FLAW: Attempt to close the file using close() instead of fclose() */
        _close((int)data);
    }
}

#endif /* OMITBAD */

#ifndef OMITGOOD

/* goodB2G() - use badsource and goodsink by reversing the blocks on the goto statement */
static void goodB2G()
{
    FILE * data;
    /* Initialize data */
    data = NULL;
    /* POTENTIAL FLAW: Open a file - need to make sure it is closed properly in the sink */
    data = fopen("BadSource_fopen.txt", "w+");
    goto sink;
sink:
    if (data != NULL)
    {
        /* FIX: Close the file using fclose() */
        fclose(data);
    }
}

void CWE775_Missing_Release_of_File_Descriptor_or_Handle__fopen_w32_close_18_good()
{
    goodB2G();
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
    CWE775_Missing_Release_of_File_Descriptor_or_Handle__fopen_w32_close_18_good();
    printLine("Finished good()");
#endif /* OMITGOOD */
#ifndef OMITBAD
    printLine("Calling bad()...");
    CWE775_Missing_Release_of_File_Descriptor_or_Handle__fopen_w32_close_18_bad();
    printLine("Finished bad()");
#endif /* OMITBAD */
    return 0;
}

#endif
