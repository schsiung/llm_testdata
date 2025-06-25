/**
* @testsuite baihu
*/
package CWE591_Sensitive_Data_Storage.CWE413_Improper_Resource_Locking.ForbidSynchronizeReusedObject;

import org.apache.log4j.Logger;

/**
 *
 * @cwe 413
 * @good doSomething01Bad;doSomething02Bad;doSomething03Bad
 * @tool SecBrella:SecJ_Forbid_Synchronize_Reused_Object;CodeMars:Forbid_Synchronize_Reused_Object;CodeMars:Avoid_Synchronize_Reused_Object;
 * @author 张自强 z30004299
 */
public class CWE413_Improper_Resource_Locking__ForbidSynchronizeReusedObject {
    private static final Logger LOGGER = Logger.getLogger(CWE413_Improper_Resource_Locking__ForbidSynchronizeReusedObject.class);
    private final Boolean initialized = Boolean.FALSE;
    private final String lock1 = new String("LOCK").intern();
    private final String lock2 = "LOCK";


    public void doSomething01Bad() {
        /* POTENTIAL FLAW: 程序不能基于那些可能会被重用的对象进行同步 */
        synchronized (initialized) {
            LOGGER.error("error");
        }
    }

    public void doSomething02Bad() {
        /* POTENTIAL FLAW: 程序不能基于那些可能会被重用的对象进行同步 */
        synchronized (lock1) {
            LOGGER.error("error");
        }
    }

    public void doSomething03Bad() {
        /* POTENTIAL FLAW: 程序不能基于那些可能会被重用的对象进行同步 */
        synchronized (lock2) {
            LOGGER.error("error");
        }
    }

}
