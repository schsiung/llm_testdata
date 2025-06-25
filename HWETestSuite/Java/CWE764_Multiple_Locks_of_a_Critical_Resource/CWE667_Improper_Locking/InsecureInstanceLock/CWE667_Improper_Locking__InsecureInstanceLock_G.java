/**
* @testsuite baihu
*/
package CWE764_Multiple_Locks_of_a_Critical_Resource.CWE667_Improper_Locking.InsecureInstanceLock;

/**
 *
 * @cwe 667
 * @good run02Good
 * @author 张自强 z30004299
 */
public class CWE667_Improper_Locking__InsecureInstanceLock_G implements Runnable {
    private static int counter;
    private static final Object LOCK = new Object();

    @Override
    public void run() {
        synchronized (LOCK) {
            counter++;
        }
    }

    public void run02Good() {
        counter++;
    }
}

