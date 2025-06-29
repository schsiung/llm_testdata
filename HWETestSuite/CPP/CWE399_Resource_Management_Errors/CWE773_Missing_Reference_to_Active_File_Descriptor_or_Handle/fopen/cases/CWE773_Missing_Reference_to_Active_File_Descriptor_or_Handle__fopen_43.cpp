/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE773_Missing_Reference_to_Active_File_Descriptor_or_Handle__fopen_43.cpp
Label Definition File: CWE773_Missing_Reference_to_Active_File_Descriptor_or_Handle__fopen.label.xml
Template File: source-sinks-43.tmpl.cpp
*/
/*
 * @testsuite Juliet_Cpp_1.3
* @description
 * CWE: 773 Missing Reference to Active File Descriptor or Handle
 * BadSource:  Create a file handle using fopen()
 * Sinks:
 *    GoodSink: Close the file handle before reusing it
 *    BadSink : Reassign the file handle before closing it
 * Flow Variant: 43 Data flow: data flows using a C++ reference from one function to another in the same source file
 *
 * */

#include "std_testcase.h"

namespace CWE773_Missing_Reference_to_Active_File_Descriptor_or_Handle__fopen_43
{

#ifndef OMITBAD

static void badSource(FILE * &data)
{
    /* POTENTIAL FLAW: Create a file handle using fopen() that may not be closed properly */
    data = fopen("BadSource_fopen.txt", "w+");
}

void bad()
{
    FILE * data;
    data = NULL;
    badSource(data);
    /* FLAW: Point data to another file handle without closing the handle from the source */
    data = fopen("BadSink_fopen.txt", "w+");
    /* avoid incidental for not closing the file handle */
    if (data != NULL)
    {
        fclose(data);
    }
}

#endif /* OMITBAD */

#ifndef OMITGOOD

/* goodB2G() uses the BadSource with the GoodSink */
static void goodB2GSource(FILE * &data)
{
    /* POTENTIAL FLAW: Create a file handle using fopen() that may not be closed properly */
    data = fopen("BadSource_fopen.txt", "w+");
}

static void goodB2G()
{
    FILE * data;
    data = NULL;
    goodB2GSource(data);
    /* FIX: Close the file from the source before pointing data to a new file handle */
    if (data != NULL)
    {
        fclose(data);
    }
    data = fopen("GoodSink_fopen.txt", "w+");
    /* avoid incidental for not closing the file handle */
    if (data != NULL)
    {
        fclose(data);
    }
}

void good()
{
    goodB2G();
}

#endif /* OMITGOOD */

} /* close namespace */

/* Below is the main(). It is only used when building this testcase on
   its own for testing or for building a binary to use in testing binary
   analysis tools. It is not used when compiling all the testcases as one
   application, which is how source code analysis tools are tested. */

#ifdef INCLUDEMAIN

using namespace CWE773_Missing_Reference_to_Active_File_Descriptor_or_Handle__fopen_43; /* so that we can use good and bad easily */

int main(int argc, char * argv[])
{
    /* seed randomness */
    srand( (unsigned)time(NULL) );
#ifndef OMITGOOD
    printLine("Calling good()...");
    good();
    printLine("Finished good()");
#endif /* OMITGOOD */
#ifndef OMITBAD
    printLine("Calling bad()...");
    bad();
    printLine("Finished bad()");
#endif /* OMITBAD */
    return 0;
}

#endif
