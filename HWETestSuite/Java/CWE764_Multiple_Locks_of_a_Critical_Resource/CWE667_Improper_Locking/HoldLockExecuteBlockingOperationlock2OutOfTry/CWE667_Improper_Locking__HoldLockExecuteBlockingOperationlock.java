/**
* @testsuite baihu
*/
package CWE764_Multiple_Locks_of_a_Critical_Resource.CWE667_Improper_Locking.HoldLockExecuteBlockingOperationlock2OutOfTry;

import testcasesupport.Message;

import java.io.IOException;
import java.io.ObjectOutputStream;
import java.net.Socket;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;

/**
 * @standard G.CON.06 避免在持有锁时执行耗时或阻塞性的操作
 * @cwe 667
 * @bad bad
 * @tool SecBrella:SecJ_Hold_Lock_Execute_Blocking_Operation
 * @author 张自强 z30004299
 */
public class CWE667_Improper_Locking__HoldLockExecuteBlockingOperationlock {
    private List<Message> messageBuff = new ArrayList<>();
    private Lock lock = new ReentrantLock();
    public void bad(Socket socket, String targetUid) throws IOException {
        lock.lock();
        lock.lock();
        try (ObjectOutputStream out = new ObjectOutputStream(socket.getOutputStream())) {
            Iterator<Message> iterator = messageBuff.iterator();
            while (iterator.hasNext()) {
                Message message = iterator.next();
                if (message.getTargetUid().equals(targetUid)) {
                    /* POTENTIAL FLAW: Performing time-consuming or obstructive operations while holding a lock */
                    out.writeObject(message);
                    iterator.remove();
                }
            }
        } finally {
            lock.unlock();
            lock.unlock();
        }
    }
}
