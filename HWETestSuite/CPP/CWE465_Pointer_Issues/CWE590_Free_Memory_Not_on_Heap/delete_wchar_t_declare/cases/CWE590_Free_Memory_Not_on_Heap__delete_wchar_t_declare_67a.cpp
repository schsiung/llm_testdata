/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE590_Free_Memory_Not_on_Heap__delete_wchar_t_declare_67a.cpp
Label Definition File: CWE590_Free_Memory_Not_on_Heap__delete.nonpointer.label.xml
Template File: sources-sink-67a.tmpl.cpp
*/
/*
 * @testsuite Juliet_Cpp_1.3
* @description
 * CWE: 590 Free Memory Not on Heap
 * BadSource: declare Data buffer is declared on the stack
 * GoodSource: Allocate memory on the heap
 * Sinks:
 *    BadSink : Print then free data
 * Flow Variant: 67 Data flow: data passed in a struct from one function to another in different source files
 *
 * */

#include "std_testcase.h"

#include <wchar.h>

namespace CWE590_Free_Memory_Not_on_Heap__delete_wchar_t_declare_67
{

typedef struct _structType
{
    wchar_t * structFirst;
} structType;

#ifndef OMITBAD

/* bad function declaration */
void badSink(structType myStruct);

void bad()
{
    wchar_t * data;
    structType myStruct;
    data = NULL; /* Initialize data */
    {
        /* FLAW: data is allocated on the stack and deallocated in the BadSink */
        wchar_t dataBuffer;
        dataBuffer = L'A';
        data = &dataBuffer;
    }
    myStruct.structFirst = data;
    badSink(myStruct);
}

#endif /* OMITBAD */

#ifndef OMITGOOD

/* goodG2B uses the GoodSource with the BadSink */
void goodG2BSink(structType myStruct);

static void goodG2B()
{
    wchar_t * data;
    structType myStruct;
    data = NULL; /* Initialize data */
    {
        /* FIX: data is allocated on the heap and deallocated in the BadSink */
        wchar_t * dataBuffer = new wchar_t;
        *dataBuffer = L'A';
        data = dataBuffer;
    }
    myStruct.structFirst = data;
    goodG2BSink(myStruct);
}

void good()
{
    goodG2B();
}

#endif /* OMITGOOD */

} /* close namespace */

/* Below is the main(). It is only used when building this testcase on
   its own for testing or for building a binary to use in testing binary
   analysis tools. It is not used when compiling all the testcases as one
   application, which is how source code analysis tools are tested. */

#ifdef INCLUDEMAIN

using namespace CWE590_Free_Memory_Not_on_Heap__delete_wchar_t_declare_67; /* so that we can use good and bad easily */

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
