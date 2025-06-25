/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE20_Improper_Input_Validation.env_fileSystemProvider.cases;

import testcasesupport.IO;
import com.sun.nio.zipfs.ZipFileSystemProvider;

import java.io.File;
import java.io.IOException;
import java.nio.file.spi.FileSystemProvider;
import java.util.ArrayList;
import java.util.List;

/*
 * @description 接口类型的for-each循环不应该调用用户自己覆写接口的迭代器的next()方法。
 *
 * @cwe 22
 * @good good
 * @tool fortify: HW_CSPL_JAVA_Path_Manipulation;secbrella: SecS_Path_Manipulation;secbrella: Path_Traversal;
 * @author 方健尔 f00563108
 */
public class CWE22_HW_CSPL_JAVA_Path_Manipulation_console__env_fileSystemProvider_newInputStream_205a<T> {


    public void good() throws InstantiationException, IllegalAccessException {
        CWE22_HW_CSPL_JAVA_Path_Manipulation_console__env_fileSystemProvider_newInputStream_205a invokeMbean = new CWE22_HW_CSPL_JAVA_Path_Manipulation_console__env_fileSystemProvider_newInputStream_205a<String>();
        List<String> list = invokeMbean.getList(String.class);
        invokeMbean.goodG2B1(list);
    }

    public void goodG2B1(List<String> list) {
        for (String data : list) {

            try {
                FileSystemProvider fileSystemProvider = new ZipFileSystemProvider();

                /* POTENTIAL FLAW: HW_CSPL_JAVA_Path_Manipulation */
                fileSystemProvider.newInputStream(new File(data).toPath());
            } catch (IOException e) {
                IO.writeLine(e.getMessage());
            }

        }
    }

    public List<T> getList(Class<T> clazz) throws IllegalAccessException, InstantiationException {
        List<T> list = new ArrayList<>();
        list.add(clazz.newInstance());
        return list;
    }
}
