/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE126_Buffer_Overread__CWE129_listen_socket_68b.c
Label Definition File: CWE126_Buffer_Overread__CWE129.label.xml
Template File: sources-sinks-68b.tmpl.c
*/
/*
 * @testsuite Juliet_Cpp_1.3
* @description
 * CWE: 126 Buffer Overread
 * BadSource: listen_socket Read data using a listen socket (server side)
 * GoodSource: Larger than zero but less than 10
 * Sinks:
 *    GoodSink: Ensure the array index is valid
 *    BadSink : Improperly check the array index by not checking the upper bound
 * Flow Variant: 68 Data flow: data passed as a global variable from one function to another in different source files
 *
 * */

#include "std_testcase.h"

#ifdef _WIN32
#include <winsock2.h>
#include <windows.h>
#include <direct.h>
#pragma comment(lib, "ws2_32") /* include ws2_32.lib when linking */
#define CLOSE_SOCKET closesocket
#else
#include <sys/types.h>
#include <sys/socket.h>
#include <netinet/in.h>
#include <arpa/inet.h>
#include <unistd.h>
#define INVALID_SOCKET -1
#define SOCKET_ERROR -1
#define CLOSE_SOCKET close
#define SOCKET int
#endif

#define TCP_PORT 27015
#define LISTEN_BACKLOG 5
#define CHAR_ARRAY_SIZE (3 * sizeof(data) + 2)

extern int CWE126_Buffer_Overread__CWE129_listen_socket_68_badData;
extern int CWE126_Buffer_Overread__CWE129_listen_socket_68_goodG2BData;
extern int CWE126_Buffer_Overread__CWE129_listen_socket_68_goodB2GData;

#ifndef OMITBAD

void CWE126_Buffer_Overread__CWE129_listen_socket_68b_badSink()
{
    int data = CWE126_Buffer_Overread__CWE129_listen_socket_68_badData;
    {
        int buffer[10] = { 0 };
        /* POTENTIAL FLAW: Attempt to access an index of the array that is above the upper bound
         * This check does not check the upper bounds of the array index */
        if (data >= 0)
        {
            printIntLine(buffer[data]);
        }
        else
        {
            printLine("ERROR: Array index is negative");
        }
    }
}

#endif /* OMITBAD */

#ifndef OMITGOOD

/* goodG2B uses the GoodSource with the BadSink */
void CWE126_Buffer_Overread__CWE129_listen_socket_68b_goodG2BSink()
{
    int data = CWE126_Buffer_Overread__CWE129_listen_socket_68_goodG2BData;
    {
        int buffer[10] = { 0 };
        /* POTENTIAL FLAW: Attempt to access an index of the array that is above the upper bound
         * This check does not check the upper bounds of the array index */
        if (data >= 0)
        {
            printIntLine(buffer[data]);
        }
        else
        {
            printLine("ERROR: Array index is negative");
        }
    }
}

/* goodB2G uses the BadSource with the GoodSink */
void CWE126_Buffer_Overread__CWE129_listen_socket_68b_goodB2GSink()
{
    int data = CWE126_Buffer_Overread__CWE129_listen_socket_68_goodB2GData;
    {
        int buffer[10] = { 0 };
        /* FIX: Properly validate the array index and prevent a buffer overread */
        if (data >= 0 && data < (10))
        {
            printIntLine(buffer[data]);
        }
        else
        {
            printLine("ERROR: Array index is out-of-bounds");
        }
    }
}

#endif /* OMITGOOD */
