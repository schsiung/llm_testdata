/* TEMPLATE GENERATED TESTCASE FILE
Filename: CWE325_Missing_Cryptographic_Step__w32_CryptHashData_04.c
Label Definition File: CWE325_Missing_Cryptographic_Step__w32.label.xml
Template File: point-flaw-04.tmpl.c
*/
/*
 * @testsuite Juliet_Cpp_1.3
* @description
 * CWE: 325 Missing Required Cryptographic Step
 * Sinks: CryptHashData
 *    GoodSink: All required cryptographic steps are present
 *    BadSink : Missing call to CryptHashData()
 * Flow Variant: 04 Control flow: if(STATIC_CONST_TRUE) and if(STATIC_CONST_FALSE)
 *
 * */

#include "std_testcase.h"

#include <windows.h>

#include <wincrypt.h>

#pragma comment(lib, "advapi32")

#define HASH_INPUT "ABCDEFG123456" /* INCIDENTAL: Hardcoded crypto */
#define PAYLOAD "plaintext"

/* The two variables below are declared "const", so a tool should
   be able to identify that reads of these will always return their
   initialized values. */
static const int STATIC_CONST_TRUE = 1; /* true */
static const int STATIC_CONST_FALSE = 0; /* false */

#ifndef OMITBAD

void CWE325_Missing_Cryptographic_Step__w32_CryptHashData_04_bad()
{
    if(STATIC_CONST_TRUE)
    {
        {
            BYTE payload[100];
            DWORD payloadLen = strlen(PAYLOAD);
            HCRYPTPROV hCryptProv = (HCRYPTPROV)NULL;
            HCRYPTHASH hHash = (HCRYPTHASH)NULL;
            HCRYPTKEY hKey = (HCRYPTKEY)NULL;
            char hashData[100] = HASH_INPUT;
            do
            {
                /* Copy plaintext into payload buffer */
                memcpy(payload, PAYLOAD, payloadLen);
                /* Aquire a Context */
                if(!CryptAcquireContext(&hCryptProv, NULL, MS_ENH_RSA_AES_PROV, PROV_RSA_AES, 0))
                {
                    break;
                }
                /* Create hash handle */
                if(!CryptCreateHash(hCryptProv, CALG_SHA_256, 0, 0, &hHash))
                {
                    break;
                }
                /* FLAW: Missing required step (CryptHashData) does not use hash input when generating AES key */
                /* Derive an AES key from the hash */
                if(!CryptDeriveKey(hCryptProv, CALG_AES_256, hHash, 0, &hKey))
                {
                    break;
                }
                /* Encrypt the payload */
                if(!CryptEncrypt(hKey, 0, 1, 0, payload, &payloadLen, sizeof(payload)))
                {
                    break;
                }
            }
            while (0);
            if (hKey)
            {
                CryptDestroyKey(hKey);
            }
            if (hHash)
            {
                CryptDestroyHash(hHash);
            }
            if (hCryptProv)
            {
                CryptReleaseContext(hCryptProv, 0);
            }
            /* Do something with the encrypted data */
            printBytesLine(payload, payloadLen);
        }
    }
}

#endif /* OMITBAD */

#ifndef OMITGOOD

/* good1() uses if(STATIC_CONST_FALSE) instead of if(STATIC_CONST_TRUE) */
static void good1()
{
    if(STATIC_CONST_FALSE)
    {
        /* INCIDENTAL: CWE 561 Dead Code, the code below will never run */
        printLine("Benign, fixed string");
    }
    else
    {
        {
            BYTE payload[100];
            DWORD payloadLen = strlen(PAYLOAD);
            HCRYPTPROV hCryptProv = (HCRYPTPROV)NULL;
            HCRYPTHASH hHash = (HCRYPTHASH)NULL;
            HCRYPTKEY hKey = (HCRYPTKEY)NULL;
            char hashData[100] = HASH_INPUT;
            do
            {
                /* Copy plaintext into payload buffer */
                memcpy(payload, PAYLOAD, payloadLen);
                /* Aquire a Context */
                if(!CryptAcquireContext(&hCryptProv, NULL, MS_ENH_RSA_AES_PROV, PROV_RSA_AES, 0))
                {
                    break;
                }
                /* Create hash handle */
                if(!CryptCreateHash(hCryptProv, CALG_SHA_256, 0, 0, &hHash))
                {
                    break;
                }
                /* FIX: All required steps are present */
                /* Hash the input string */
                if(!CryptHashData(hHash, (BYTE*)hashData, strlen(hashData), 0))
                {
                    break;
                }
                /* Derive an AES key from the hash */
                if(!CryptDeriveKey(hCryptProv, CALG_AES_256, hHash, 0, &hKey))
                {
                    break;
                }
                /* Encrypt the payload */
                if(!CryptEncrypt(hKey, 0, 1, 0, payload, &payloadLen, sizeof(payload)))
                {
                    break;
                }
            }
            while (0);
            if (hKey)
            {
                CryptDestroyKey(hKey);
            }
            if (hHash)
            {
                CryptDestroyHash(hHash);
            }
            if (hCryptProv)
            {
                CryptReleaseContext(hCryptProv, 0);
            }
            /* Do something with the encrypted data */
            printBytesLine(payload, payloadLen);
        }
    }
}

/* good2() reverses the bodies in the if statement */
static void good2()
{
    if(STATIC_CONST_TRUE)
    {
        {
            BYTE payload[100];
            DWORD payloadLen = strlen(PAYLOAD);
            HCRYPTPROV hCryptProv = (HCRYPTPROV)NULL;
            HCRYPTHASH hHash = (HCRYPTHASH)NULL;
            HCRYPTKEY hKey = (HCRYPTKEY)NULL;
            char hashData[100] = HASH_INPUT;
            do
            {
                /* Copy plaintext into payload buffer */
                memcpy(payload, PAYLOAD, payloadLen);
                /* Aquire a Context */
                if(!CryptAcquireContext(&hCryptProv, NULL, MS_ENH_RSA_AES_PROV, PROV_RSA_AES, 0))
                {
                    break;
                }
                /* Create hash handle */
                if(!CryptCreateHash(hCryptProv, CALG_SHA_256, 0, 0, &hHash))
                {
                    break;
                }
                /* FIX: All required steps are present */
                /* Hash the input string */
                if(!CryptHashData(hHash, (BYTE*)hashData, strlen(hashData), 0))
                {
                    break;
                }
                /* Derive an AES key from the hash */
                if(!CryptDeriveKey(hCryptProv, CALG_AES_256, hHash, 0, &hKey))
                {
                    break;
                }
                /* Encrypt the payload */
                if(!CryptEncrypt(hKey, 0, 1, 0, payload, &payloadLen, sizeof(payload)))
                {
                    break;
                }
            }
            while (0);
            if (hKey)
            {
                CryptDestroyKey(hKey);
            }
            if (hHash)
            {
                CryptDestroyHash(hHash);
            }
            if (hCryptProv)
            {
                CryptReleaseContext(hCryptProv, 0);
            }
            /* Do something with the encrypted data */
            printBytesLine(payload, payloadLen);
        }
    }
}

void CWE325_Missing_Cryptographic_Step__w32_CryptHashData_04_good()
{
    good1();
    good2();
}

#endif /* OMITGOOD */

/* Below is the main(). It is only used when building this testcase on
   its own for testing or for building a binary to use in testing binary
   analysis tools. It is not used when compiling all the testcases as one
   application, which is how source code analysis tools are tested. */

#ifdef INCLUDEMAIN

int main(int argc, char * argv[])
{
    /* seed randomness */
    srand( (unsigned)time(NULL) );
#ifndef OMITGOOD
    printLine("Calling good()...");
    CWE325_Missing_Cryptographic_Step__w32_CryptHashData_04_good();
    printLine("Finished good()");
#endif /* OMITGOOD */
#ifndef OMITBAD
    printLine("Calling bad()...");
    CWE325_Missing_Cryptographic_Step__w32_CryptHashData_04_bad();
    printLine("Finished bad()");
#endif /* OMITBAD */
    return 0;
}

#endif
