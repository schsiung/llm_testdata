/**
 * @testsuite baihu
 */
package CWE1215_Data_Validation_Issues.CWE78_OS_Command_Injection.Environment.cases;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;


import testcasesupport.IO;

import java.util.HashMap;
import java.util.Map;

/*
 * @description 跨类的成员变量map传递的场景。
 *
 * @cwe 78
 * @tool fortify: Command Injection;secbrella: SecS_Command_Injection
 * @author 方健尔 f00563108
 */
public class CWE78_OS_Command_Injection___Environment_333b {

    public Map<String, String> mapSource = new HashMap<>();
}
