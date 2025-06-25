/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE20_Improper_Input_Validation.env_database.cases;

/*
 * @description 接口。数据流source点从接口产生，在被子类调用时丢失的场景。
 *
 * @cwe 89
 * @tool fortify: NoSQL Injection: MongoDB;secbrella: SecS_SQL_Injection;secbrella: SQL_Injection;
 * @author 方健尔 f00563108
 */
public interface CWE89_NoSQL_Injection_MongoDB_console__env_database_find_200b {

    String CONTAMINANT = CWE89_NoSQL_Injection_MongoDB_console__env_database_find_200c.getBadSource();

    void bad() throws Throwable;
}
