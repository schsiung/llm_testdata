/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE591_Sensitive_Data_Storage_in_Improperly_Locked_Memory__w32_char_84_bad.cpp
Label Definition File: CWE591_Sensitive_Data_Storage_in_Improperly_Locked_Memory__w32.label.xml
Template File: sources-sink-84_bad.tmpl.cpp
*/
/*
 * @testsuite Juliet_Cpp_1.3
* @description
 * CWE: 591 Sensitive Data Storage in Improperly Locked Memory
 * BadSource:  Allocate memory for sensitive data without using VirtualLock() to lock the buffer into memory
 * GoodSource: Allocate memory for sensitive data and use VirtualLock() to lock the buffer into memory
 * Sinks:
 *    BadSink : Authenticate the user using LogonUserA()
 * Flow Variant: 84 Data flow: data passed to class constructor and destructor by declaring the class object on the heap and deleting it after use
 *
 * */
#ifndef OMITBAD

#include "std_testcase.h"
#include "CWE591_Sensitive_Data_Storage_in_Improperly_Locked_Memory__w32_char_84.h"

#pragma comment(lib, "advapi32.lib")

namespace CWE591_Sensitive_Data_Storage_in_Improperly_Locked_Memory__w32_char_84
{
CWE591_Sensitive_Data_Storage_in_Improperly_Locked_Memory__w32_char_84_bad::CWE591_Sensitive_Data_Storage_in_Improperly_Locked_Memory__w32_char_84_bad(char * passwordCopy)
{
    password = passwordCopy;
    password = (char *)malloc(100*sizeof(char));
    if (password == NULL)
    {
        printLine("Memory could not be allocated");
        exit(1);
    }
    /* FLAW: Do not lock the memory */
    /* INCIDENTAL FLAW: CWE-259 Hardcoded Password */
    strcpy(password, "Password1234!");
}

CWE591_Sensitive_Data_Storage_in_Improperly_Locked_Memory__w32_char_84_bad::~CWE591_Sensitive_Data_Storage_in_Improperly_Locked_Memory__w32_char_84_bad()
{
    {
        HANDLE pHandle;
        char * username = "User";
        char * domain = "Domain";
        /* Use the password in LogonUser() to establish that it is "sensitive" */
        if (LogonUserA(
                    username,
                    domain,
                    password,
                    LOGON32_LOGON_NETWORK,
                    LOGON32_PROVIDER_DEFAULT,
                    &pHandle) != 0)
        {
            printLine("User logged in successfully.");
            CloseHandle(pHandle);
        }
        else
        {
            printLine("Unable to login.");
        }
        /* POTENTIAL FLAW: Sensitive data possibly improperly locked */
        free(password);
    }
}
}
#endif /* OMITBAD */
