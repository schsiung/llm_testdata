/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE20_Improper_Input_Validation.env_Files.cases;

import java.io.LineNumberReader;
import java.util.Collection;
import java.util.Iterator;
import java.util.List;
import java.util.ListIterator;

/*
 * @description 接口类型的for-each循环不应该调用用户自己覆写接口的迭代器的next()方法。
 *
 * @cwe 264
 * @tool fortify: File Permission Manipulation
 * @author 方健尔 f00563108
 */
public class CWE264_File_Permission_Manipulation_console__env_Files_setPosixFilePermissions_205b implements List<String> {

    private LineNumberReader lnReader = null;

    private List<String> bufferFile = null;

    @Override
    public int size() {
        return 0;
    }

    @Override
    public boolean isEmpty() {
        return false;
    }

    @Override
    public boolean contains(Object o) {
        return false;
    }

    @Override
    public Iterator<String> iterator() {
        return new RowIterator(this.bufferFile.iterator());
    }

    @Override
    public Object[] toArray() {
        return new Object[0];
    }

    @Override
    public <T> T[] toArray(T[] a) {
        return null;
    }

    @Override
    public boolean add(String s) {
        return false;
    }

    @Override
    public boolean remove(Object o) {
        return false;
    }

    @Override
    public boolean containsAll(Collection<?> c) {
        return false;
    }

    @Override
    public boolean addAll(Collection<? extends String> c) {
        return false;
    }

    @Override
    public boolean addAll(int index, Collection<? extends String> c) {
        return false;
    }

    @Override
    public boolean removeAll(Collection<?> c) {
        return false;
    }

    @Override
    public boolean retainAll(Collection<?> c) {
        return false;
    }

    @Override
    public void clear() {

    }

    @Override
    public String get(int index) {
        return null;
    }

    @Override
    public String set(int index, String element) {
        return null;
    }

    @Override
    public void add(int index, String element) {

    }

    @Override
    public String remove(int index) {
        return null;
    }

    @Override
    public int indexOf(Object o) {
        return 0;
    }

    @Override
    public int lastIndexOf(Object o) {
        return 0;
    }

    @Override
    public ListIterator<String> listIterator() {
        return null;
    }

    @Override
    public ListIterator<String> listIterator(int index) {
        return null;
    }

    @Override
    public List<String> subList(int fromIndex, int toIndex) {
        return null;
    }

    class RowIterator implements Iterator<String> {
        private Iterator<String> bufferIterator;

        public RowIterator(Iterator<String> bufferIterator) {
            this.bufferIterator = bufferIterator;
        }

        public boolean hasNext() {
            return this.bufferIterator.hasNext();
        }

        public String next() {
            return nextDefault();
        }

        private String nextDefault() {
            String data = "";
            data = ""; /* Initialize data */
            {
                /* Read data from an environment variable */
                data = System.getenv("data");
            }

            return data;
        }

        public void remove() {
            throw new UnsupportedOperationException();
        }

        public String genete() {
            return null;
        }
    }
}
