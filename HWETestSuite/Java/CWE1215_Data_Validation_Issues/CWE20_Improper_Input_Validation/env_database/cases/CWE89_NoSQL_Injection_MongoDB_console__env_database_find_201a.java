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
 * @description 污染数据经过清理函数的场景，配置清理函数规则不报告警，在规则之外的清理报告警。
 *
 * @cwe 89
 * @bad bad
 * @good good
 * @tool fortify: NoSQL Injection: MongoDB;secbrella: SecS_SQL_Injection;secbrella: SQL_Injection;
 * @author 方健尔 f00563108
 */
public class CWE89_NoSQL_Injection_MongoDB_console__env_database_find_201a {


    public void bad() throws Throwable {
        String data;
        data = ""; /* Initialize data */
        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }


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

    private void goodG2B1() {
        String data;
        data = ""; /* Initialize data */
        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }

        data = CWE89_NoSQL_Injection_MongoDB_console__env_database_find_201b.validUntrustedInput(data);

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

    private void goodG2B2() {
        String data;
        data = ""; /* Initialize data */
        {
            /* Read data from an environment variable */
            data = System.getenv("data");
        }

        data = CWE89_NoSQL_Injection_MongoDB_console__env_database_find_201b.checkUntrustedInput(data);

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

    public void good() {
        goodG2B1();
        goodG2B2();
    }
}
