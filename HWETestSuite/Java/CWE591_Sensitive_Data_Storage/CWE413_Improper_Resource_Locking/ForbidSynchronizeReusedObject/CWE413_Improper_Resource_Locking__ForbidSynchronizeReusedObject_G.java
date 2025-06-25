/**
* @testsuite baihu
*/
package CWE591_Sensitive_Data_Storage.CWE413_Improper_Resource_Locking.ForbidSynchronizeReusedObject;

import org.apache.log4j.Logger;

/**
 *
 * @cwe 413
 * @good doSomething01Good;doSomething02Good
 * @author 张自强 z30004299
 */
public class CWE413_Improper_Resource_Locking__ForbidSynchronizeReusedObject_G {
    private static final Logger LOGGER = Logger.getLogger(CWE413_Improper_Resource_Locking__ForbidSynchronizeReusedObject_G.class);
    private final Boolean initialized = new Boolean(true);
    private final Integer lock1 = new Integer(0); // Boxed primitive Lock is shared
    private final String lock2 = new String("LOCK");

    public void doSomething01Good() {
        synchronized (initialized) {
            LOGGER.info("info");
        }
    }

    public void doSomething02Good() {
        synchronized (lock1) {
            LOGGER.info("info");
        }
    }

    public void doSomething03Bad() {
        synchronized (lock2) {
            LOGGER.info("info");
        }
    }

}
