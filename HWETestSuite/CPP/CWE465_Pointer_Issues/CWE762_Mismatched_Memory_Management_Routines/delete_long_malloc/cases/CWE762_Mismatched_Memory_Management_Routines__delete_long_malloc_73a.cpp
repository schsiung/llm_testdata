/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE762_Mismatched_Memory_Management_Routines__delete_long_malloc_73a.cpp
Label Definition File: CWE762_Mismatched_Memory_Management_Routines__delete.label.xml
Template File: sources-sinks-73a.tmpl.cpp
*/
/*
 * @testsuite Juliet_Cpp_1.3
* @description
 * CWE: 762 Mismatched Memory Management Routines
 * BadSource: malloc Allocate data using malloc()
 * GoodSource: Allocate data using new
 * Sinks:
 *    GoodSink: Deallocate data using free()
 *    BadSink : Deallocate data using delete
 * Flow Variant: 73 Data flow: data passed in a list from one function to another in different source files
 *
 * */

#include "std_testcase.h"
#include <list>

using namespace std;

namespace CWE762_Mismatched_Memory_Management_Routines__delete_long_malloc_73
{

#ifndef OMITBAD

/* bad function declaration */
void badSink(list<long *> dataList);

void bad()
{
    long * data;
    list<long *> dataList;
    /* Initialize data*/
    data = NULL;
    /* POTENTIAL FLAW: Allocate memory with a function that requires free() to free the memory */
    data = (long *)malloc(100*sizeof(long));
    if (data == NULL) {exit(-1);}
    /* Put data in a list */
    dataList.push_back(data);
    dataList.push_back(data);
    dataList.push_back(data);
    badSink(dataList);
}

#endif /* OMITBAD */

#ifndef OMITGOOD

/* goodG2B uses the GoodSource with the BadSink */
void goodG2BSink(list<long *> dataList);

static void goodG2B()
{
    long * data;
    list<long *> dataList;
    /* Initialize data*/
    data = NULL;
    /* FIX: Allocate memory from the heap using new */
    data = new long;
    /* Put data in a list */
    dataList.push_back(data);
    dataList.push_back(data);
    dataList.push_back(data);
    goodG2BSink(dataList);
}

/* goodB2G uses the BadSource with the GoodSink */
void goodB2GSink(list<long *> dataList);

static void goodB2G()
{
    long * data;
    list<long *> dataList;
    /* Initialize data*/
    data = NULL;
    /* POTENTIAL FLAW: Allocate memory with a function that requires free() to free the memory */
    data = (long *)malloc(100*sizeof(long));
    if (data == NULL) {exit(-1);}
    dataList.push_back(data);
    dataList.push_back(data);
    dataList.push_back(data);
    goodB2GSink(dataList);
}

void good()
{
    goodG2B();
    goodB2G();
}

#endif /* OMITGOOD */

} /* close namespace */

/* Below is the main(). It is only used when building this testcase on
   its own for testing or for building a binary to use in testing binary
   analysis tools. It is not used when compiling all the testcases as one
   application, which is how source code analysis tools are tested. */

#ifdef INCLUDEMAIN

using namespace CWE762_Mismatched_Memory_Management_Routines__delete_long_malloc_73; /* so that we can use good and bad easily */

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
