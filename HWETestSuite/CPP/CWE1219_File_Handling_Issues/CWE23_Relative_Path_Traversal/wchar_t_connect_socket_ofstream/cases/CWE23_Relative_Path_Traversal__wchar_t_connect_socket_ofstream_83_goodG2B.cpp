/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE23_Relative_Path_Traversal__wchar_t_connect_socket_ofstream_83_goodG2B.cpp
Label Definition File: CWE23_Relative_Path_Traversal.label.xml
Template File: sources-sink-83_goodG2B.tmpl.cpp
*/
/*
 * @testsuite Juliet_Cpp_1.3
* @description
 * CWE: 23 Relative Path Traversal
 * BadSource: connect_socket Read data using a connect socket (client side)
 * GoodSource: Use a fixed file name
 * Sinks: ofstream
 *    BadSink : Open the file named in data using ofstream::open()
 * Flow Variant: 83 Data flow: data passed to class constructor and destructor by declaring the class object on the stack
 *
 * */
#ifndef OMITGOOD

#include "std_testcase.h"
#include "CWE23_Relative_Path_Traversal__wchar_t_connect_socket_ofstream_83.h"

#include <fstream>
using namespace std;

namespace CWE23_Relative_Path_Traversal__wchar_t_connect_socket_ofstream_83
{
CWE23_Relative_Path_Traversal__wchar_t_connect_socket_ofstream_83_goodG2B::CWE23_Relative_Path_Traversal__wchar_t_connect_socket_ofstream_83_goodG2B(wchar_t * dataCopy)
{
    data = dataCopy;
    /* FIX: Use a fixed file name */
    wcscat(data, L"file.txt");
}

CWE23_Relative_Path_Traversal__wchar_t_connect_socket_ofstream_83_goodG2B::~CWE23_Relative_Path_Traversal__wchar_t_connect_socket_ofstream_83_goodG2B()
{
    {
        ofstream outputFile;
        /* POTENTIAL FLAW: Possibly opening a file without validating the file name or path */
        outputFile.open((char *)data);
        outputFile.close();
    }
}
}
#endif /* OMITGOOD */
