/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE78_OS_Command_Injection__wchar_t_connect_socket_w32_spawnvp_21.c
Label Definition File: CWE78_OS_Command_Injection.strings.label.xml
Template File: sources-sink-21.tmpl.c
*/
/*
 * @testsuite Juliet_Cpp_1.3
 * @description
 * CWE: 78 OS Command Injection
 * BadSource: connect_socket Read data using a connect socket (client side)
 * GoodSource: Fixed string
 * Sink: w32_spawnvp
 *    BadSink : execute command with wspawnvp
 * Flow Variant: 21 Control flow: Flow controlled by value of a static global variable. All functions contained in one file.
 *
 * */

#include "std_testcase.h"

#include <wchar.h>

#ifdef _WIN32
#define COMMAND_INT_PATH L"%WINDIR%\\system32\\cmd.exe"
#define COMMAND_INT L"cmd.exe"
#define COMMAND_ARG1 L"/c"
#define COMMAND_ARG2 L"dir "
#define COMMAND_ARG3 data
#else /* NOT _WIN32 */
#include <unistd.h>
#define COMMAND_INT_PATH L"/bin/sh"
#define COMMAND_INT L"sh"
#define COMMAND_ARG1 L"-c"
#define COMMAND_ARG2 L"ls "
#define COMMAND_ARG3 data
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
#define INVALID_SOCKET -1
#define SOCKET_ERROR -1
#define CLOSE_SOCKET close
#define SOCKET int
#endif

#define TCP_PORT 27015
#define IP_ADDRESS "127.0.0.1"

#include <process.h>

#ifndef OMITBAD

/* The static variable below is used to drive control flow in the source function */
static int badStatic = 0;

static wchar_t * badSource(wchar_t * data)
{
    if(badStatic)
    {
        {
#ifdef _WIN32
            WSADATA wsaData;
            int wsaDataInit = 0;
#endif
            int recvResult;
            struct sockaddr_in service;
            wchar_t *replace;
            SOCKET connectSocket = INVALID_SOCKET;
            size_t dataLen = wcslen(data);
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
                recvResult = recv(connectSocket, (char *)(data + dataLen), sizeof(wchar_t) * (100 - dataLen - 1), 0);
                if (recvResult == SOCKET_ERROR || recvResult == 0)
                {
                    break;
                }
                /* Append null terminator */
                data[dataLen + recvResult / sizeof(wchar_t)] = L'\0';
                /* Eliminate CRLF */
                replace = wcschr(data, L'\r');
                if (replace)
                {
                    *replace = L'\0';
                }
                replace = wcschr(data, L'\n');
                if (replace)
                {
                    *replace = L'\0';
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
    return data;
}

void CWE78_OS_Command_Injection__wchar_t_connect_socket_w32_spawnvp_21_bad()
{
    wchar_t * data;
    wchar_t dataBuffer[100] = COMMAND_ARG2;
    data = dataBuffer;
    badStatic = 1; /* true */
    data = badSource(data);
    {
        wchar_t *args[] = {COMMAND_INT_PATH, COMMAND_ARG1, COMMAND_ARG3, NULL};
        /* wspawnvp - searches for the location of the command among
         * the directories specified by the PATH environment variable */
        /* POTENTIAL FLAW: Execute command without validating input possibly leading to command injection */
        _wspawnvp(_P_WAIT, COMMAND_INT, args);
    }
}

#endif /* OMITBAD */

#ifndef OMITGOOD

/* The static variables below are used to drive control flow in the source functions. */
static int goodG2B1Static = 0;
static int goodG2B2Static = 0;

/* goodG2B1() - use goodsource and badsink by setting the static variable to false instead of true */
static wchar_t * goodG2B1Source(wchar_t * data)
{
    if(goodG2B1Static)
    {
        /* INCIDENTAL: CWE 561 Dead Code, the code below will never run */
        printLine("Benign, fixed string");
    }
    else
    {
        /* FIX: Append a fixed string to data (not user / external input) */
        wcscat(data, L"*.*");
    }
    return data;
}

static void goodG2B1()
{
    wchar_t * data;
    wchar_t dataBuffer[100] = COMMAND_ARG2;
    data = dataBuffer;
    goodG2B1Static = 0; /* false */
    data = goodG2B1Source(data);
    {
        wchar_t *args[] = {COMMAND_INT_PATH, COMMAND_ARG1, COMMAND_ARG3, NULL};
        /* wspawnvp - searches for the location of the command among
         * the directories specified by the PATH environment variable */
        /* POTENTIAL FLAW: Execute command without validating input possibly leading to command injection */
        _wspawnvp(_P_WAIT, COMMAND_INT, args);
    }
}

/* goodG2B2() - use goodsource and badsink by reversing the blocks in the if in the source function */
static wchar_t * goodG2B2Source(wchar_t * data)
{
    if(goodG2B2Static)
    {
        /* FIX: Append a fixed string to data (not user / external input) */
        wcscat(data, L"*.*");
    }
    return data;
}

static void goodG2B2()
{
    wchar_t * data;
    wchar_t dataBuffer[100] = COMMAND_ARG2;
    data = dataBuffer;
    goodG2B2Static = 1; /* true */
    data = goodG2B2Source(data);
    {
        wchar_t *args[] = {COMMAND_INT_PATH, COMMAND_ARG1, COMMAND_ARG3, NULL};
        /* wspawnvp - searches for the location of the command among
         * the directories specified by the PATH environment variable */
        /* POTENTIAL FLAW: Execute command without validating input possibly leading to command injection */
        _wspawnvp(_P_WAIT, COMMAND_INT, args);
    }
}

void CWE78_OS_Command_Injection__wchar_t_connect_socket_w32_spawnvp_21_good()
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
    CWE78_OS_Command_Injection__wchar_t_connect_socket_w32_spawnvp_21_good();
    printLine("Finished good()");
#endif /* OMITGOOD */
#ifndef OMITBAD
    printLine("Calling bad()...");
    CWE78_OS_Command_Injection__wchar_t_connect_socket_w32_spawnvp_21_bad();
    printLine("Finished bad()");
#endif /* OMITBAD */
    return 0;
}

#endif
