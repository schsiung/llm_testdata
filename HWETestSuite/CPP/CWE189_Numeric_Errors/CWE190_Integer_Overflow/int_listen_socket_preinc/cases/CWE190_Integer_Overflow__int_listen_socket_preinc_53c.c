/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE190_Integer_Overflow__int_listen_socket_preinc_53c.c
Label Definition File: CWE190_Integer_Overflow__int.label.xml
Template File: sources-sinks-53c.tmpl.c
*/
/*
 * @testsuite Juliet_Cpp_1.3
* @description
 * CWE: 190 Integer Overflow
 * BadSource: listen_socket Read data using a listen socket (server side)
 * GoodSource: Set data to a small, non-zero number (two)
 * Sinks: increment
 *    GoodSink: Ensure there will not be an overflow before incrementing data
 *    BadSink : Increment data, which can cause an overflow
 * Flow Variant: 53 Data flow: data passed as an argument from one function through two others to a fourth; all four functions are in different source files
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

#ifndef OMITBAD

/* bad function declaration */
void CWE190_Integer_Overflow__int_listen_socket_preinc_53d_badSink(int data);

void CWE190_Integer_Overflow__int_listen_socket_preinc_53c_badSink(int data)
{
    CWE190_Integer_Overflow__int_listen_socket_preinc_53d_badSink(data);
}

#endif /* OMITBAD */

#ifndef OMITGOOD

/* goodG2B uses the GoodSource with the BadSink */
void CWE190_Integer_Overflow__int_listen_socket_preinc_53d_goodG2BSink(int data);

void CWE190_Integer_Overflow__int_listen_socket_preinc_53c_goodG2BSink(int data)
{
    CWE190_Integer_Overflow__int_listen_socket_preinc_53d_goodG2BSink(data);
}

/* goodB2G uses the BadSource with the GoodSink */
void CWE190_Integer_Overflow__int_listen_socket_preinc_53d_goodB2GSink(int data);

void CWE190_Integer_Overflow__int_listen_socket_preinc_53c_goodB2GSink(int data)
{
    CWE190_Integer_Overflow__int_listen_socket_preinc_53d_goodB2GSink(data);
}

#endif /* OMITGOOD */
