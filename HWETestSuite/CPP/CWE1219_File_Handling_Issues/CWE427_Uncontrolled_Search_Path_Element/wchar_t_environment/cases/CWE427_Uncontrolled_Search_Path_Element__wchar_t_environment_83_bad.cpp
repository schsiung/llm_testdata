/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE427_Uncontrolled_Search_Path_Element__wchar_t_environment_83_bad.cpp
Label Definition File: CWE427_Uncontrolled_Search_Path_Element.label.xml
Template File: sources-sink-83_bad.tmpl.cpp
*/
/*
 * @testsuite Juliet_Cpp_1.3
* @description
 * CWE: 427 Uncontrolled Search Path Element
 * BadSource: environment Read input from an environment variable
 * GoodSource: Use a hardcoded path
 * Sinks:
 *    BadSink : Set the environment variable
 * Flow Variant: 83 Data flow: data passed to class constructor and destructor by declaring the class object on the stack
 *
 * */
#ifndef OMITBAD

#include "std_testcase.h"
#include "CWE427_Uncontrolled_Search_Path_Element__wchar_t_environment_83.h"

#define ENV_VARIABLE L"ADD"

#ifdef _WIN32
#define GETENV _wgetenv
#else
#define GETENV getenv
#endif

namespace CWE427_Uncontrolled_Search_Path_Element__wchar_t_environment_83
{
CWE427_Uncontrolled_Search_Path_Element__wchar_t_environment_83_bad::CWE427_Uncontrolled_Search_Path_Element__wchar_t_environment_83_bad(wchar_t * dataCopy)
{
    data = dataCopy;
    {
        /* Append input from an environment variable to data */
        size_t dataLen = wcslen(data);
        wchar_t * environment = GETENV(ENV_VARIABLE);
        /* If there is data in the environment variable */
        if (environment != NULL)
        {
            /* POTENTIAL FLAW: Read data from an environment variable */
            wcsncat(data+dataLen, environment, 250-dataLen-1);
        }
    }
}

CWE427_Uncontrolled_Search_Path_Element__wchar_t_environment_83_bad::~CWE427_Uncontrolled_Search_Path_Element__wchar_t_environment_83_bad()
{
    /* POTENTIAL FLAW: Set a new environment variable with a path that is possibly insecure */
    PUTENV(data);
}
}
#endif /* OMITBAD */
