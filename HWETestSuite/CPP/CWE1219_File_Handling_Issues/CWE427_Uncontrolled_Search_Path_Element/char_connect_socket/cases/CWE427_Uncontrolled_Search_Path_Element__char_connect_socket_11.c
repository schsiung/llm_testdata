/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE427_Uncontrolled_Search_Path_Element__char_connect_socket_11.c
Label Definition File: CWE427_Uncontrolled_Search_Path_Element.label.xml
Template File: sources-sink-11.tmpl.c
*/
/*
 * @testsuite Juliet_Cpp_1.3
* @description
 * CWE: 427 Uncontrolled Search Path Element
 * BadSource: connect_socket Read data using a connect socket (client side)
 * GoodSource: Use a hardcoded path
 * Sink:
 *    BadSink : Set the environment variable
 * Flow Variant: 11 Control flow: if(globalReturnsTrue()) and if(globalReturnsFalse())
 *
 * */

#include "std_testcase.h"

#include <wchar.h>
#ifdef _WIN32
#define NEW_PATH "%SystemRoot%\\system32"
#define PUTENV _putenv
#else
#define NEW_PATH "/bin"
#define PUTENV putenv
#endif

#ifdef _WIN32
#include <winsock2.h>
#include <windows.h>
#include <direct.h>
#pragma comment(lib, "ws2_32") /* include ws2_32.lib when linking */
#define CLOSE_SOCKET closesocket
#else /* NOT _WIN32 */
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
#define IP_ADDRESS "127.0.0.1"

#ifndef OMITBAD

void CWE427_Uncontrolled_Search_Path_Element__char_connect_socket_11_bad()
{
    char * data;
    char dataBuffer[250] = "PATH=";
    data = dataBuffer;
    if(globalReturnsTrue())
    {
        {
#ifdef _WIN32
            WSADATA wsaData;
            int wsaDataInit = 0;
#endif
            int recvResult;
            struct sockaddr_in service;
            char *replace;
            SOCKET connectSocket = INVALID_SOCKET;
            size_t dataLen = strlen(data);
            do
            {
#ifdef _WIN32
                if (WSAStartup(MAKEWORD(2,2), &wsaData) != NO_ERROR)
                {
                    break;
                }
                wsaDataInit = 1;
#endif
                /* POTENTIAL FLAW: Read data using a connect socket */
                connectSocket = socket(AF_INET, SOCK_STREAM, IPPROTO_TCP);
                if (connectSocket == INVALID_SOCKET)
                {
                    break;
                }
                memset(&service, 0, sizeof(service));
                service.sin_family = AF_INET;
                service.sin_addr.s_addr = inet_addr(IP_ADDRESS);
                service.sin_port = htons(TCP_PORT);
                if (connect(connectSocket, (struct sockaddr*)&service, sizeof(service)) == SOCKET_ERROR)
                {
                    break;
                }
                /* Abort on error or the connection was closed, make sure to recv one
                 * less char than is in the recv_buf in order to append a terminator */
                /* Abort on error or the connection was closed */
                recvResult = recv(connectSocket, (char *)(data + dataLen), sizeof(char) * (250 - dataLen - 1), 0);
                if (recvResult == SOCKET_ERROR || recvResult == 0)
                {
                    break;
                }
                /* Append null terminator */
                data[dataLen + recvResult / sizeof(char)] = '\0';
                /* Eliminate CRLF */
                replace = strchr(data, '\r');
                if (replace)
                {
                    *replace = '\0';
                }
                replace = strchr(data, '\n');
                if (replace)
                {
                    *replace = '\0';
                }
            }
            while (0);
            if (connectSocket != INVALID_SOCKET)
            {
                CLOSE_SOCKET(connectSocket);
            }
#ifdef _WIN32
            if (wsaDataInit)
            {
                WSACleanup();
            }
#endif
        }
    }
    /* POTENTIAL FLAW: Set a new environment variable with a path that is possibly insecure */
    PUTENV(data);
}

#endif /* OMITBAD */

#ifndef OMITGOOD

/* goodG2B1() - use goodsource and badsink by changing the globalReturnsTrue() to globalReturnsFalse() */
static void goodG2B1()
{
    char * data;
    char dataBuffer[250] = "PATH=";
    data = dataBuffer;
    if(globalReturnsFalse())
    {
        /* INCIDENTAL: CWE 561 Dead Code, the code below will never run */
        printLine("Benign, fixed string");
    }
    else
    {
        /* FIX: Set the path as the "system" path */
        strcat(data, NEW_PATH);
    }
    /* POTENTIAL FLAW: Set a new environment variable with a path that is possibly insecure */
    PUTENV(data);
}

/* goodG2B2() - use goodsource and badsink by reversing the blocks in the if statement */
static void goodG2B2()
{
    char * data;
    char dataBuffer[250] = "PATH=";
    data = dataBuffer;
    if(globalReturnsTrue())
    {
        /* FIX: Set the path as the "system" path */
        strcat(data, NEW_PATH);
    }
    /* POTENTIAL FLAW: Set a new environment variable with a path that is possibly insecure */
    PUTENV(data);
}

void CWE427_Uncontrolled_Search_Path_Element__char_connect_socket_11_good()
{
    goodG2B1();
    goodG2B2();
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
    CWE427_Uncontrolled_Search_Path_Element__char_connect_socket_11_good();
    printLine("Finished good()");
#endif /* OMITGOOD */
#ifndef OMITBAD
    printLine("Calling bad()...");
    CWE427_Uncontrolled_Search_Path_Element__char_connect_socket_11_bad();
    printLine("Finished bad()");
#endif /* OMITBAD */
    return 0;
}

#endif
