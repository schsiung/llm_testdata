/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE20_Improper_Input_Validation.env_database.cases;

import testcasesupport.IO;
import com.mongodb.BasicDBObject;
import com.mongodb.DBCollection;
import com.mongodb.MongoClient;

import java.net.UnknownHostException;
import java.util.HashMap;
import java.util.Map;

/*
 * @description 实现类。数据流source点从接口产生，在被子类调用时丢失的场景。
 *
 * @cwe 89
 * @bad bad
 * @tool fortify: NoSQL Injection: MongoDB;secbrella: SecS_SQL_Injection;secbrella: SQL_Injection;
 * @author 方健尔 f00563108
 */
public class CWE89_NoSQL_Injection_MongoDB_console__env_database_find_200a implements CWE89_NoSQL_Injection_MongoDB_console__env_database_find_200b {


    @Override
    public void bad() throws Throwable {
        badSink(CONTAMINANT);
    }

    private void badSink(String data) throws Throwable {

        Map map = new HashMap();
        map.put("data", data);
        MongoClient mongoClient = null;
        try {
            mongoClient = new MongoClient();
            DBCollection col = mongoClient.getDB("TheDatabaseName").getCollection("emails");
            BasicDBObject Query = new BasicDBObject();
            /* POTENTIAL FLAW: NoSQL Injection MongoDB */
            Query.put("$where", map);
            col.find(Query);
        } catch (UnknownHostException e) {
            IO.writeLine(e.getMessage());
        }

    }
}
