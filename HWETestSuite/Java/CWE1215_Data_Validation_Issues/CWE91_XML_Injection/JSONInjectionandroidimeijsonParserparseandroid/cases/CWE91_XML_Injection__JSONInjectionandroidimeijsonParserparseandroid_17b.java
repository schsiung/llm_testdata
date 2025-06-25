/**
* @testsuite baihu
*/
package CWE1215_Data_Validation_Issues.CWE91_XML_Injection.JSONInjectionandroidimeijsonParserparseandroid.cases;

import android.location.Location;
import android.location.LocationListener;
import android.os.Bundle;

/*
 * @description Android污染数据存储在成员变量中，通过一个覆写接口方法的类注册位置更新的回调函数onLocationChanged进行传递并爆发的场景，
 * 其中Activity和回调函数通过一个接口解耦。
 *
 * @cwe 91
 * @tool fortify: JSON Injection;secbrella: SecS_JSON_Injection
 * @author 方健尔 f00563108
 */
public class CWE91_XML_Injection__JSONInjectionandroidimeijsonParserparseandroid_17b implements LocationListener {

    private CWE91_XML_Injection__JSONInjectionandroidimeijsonParserparseandroid_17c dataProvider;

    public CWE91_XML_Injection__JSONInjectionandroidimeijsonParserparseandroid_17b(CWE91_XML_Injection__JSONInjectionandroidimeijsonParserparseandroid_17c provider) {
        this.dataProvider = provider;
    }

    @Override
    public void onLocationChanged(Location arg0) {
        dataProvider.setData("Longitude: " + arg0.getLongitude()
            + ", Latitude: " + arg0.getLatitude());
    }

    @Override
    public void onProviderDisabled(String provider) {
    }

    @Override
    public void onProviderEnabled(String provider) {
    }

    @Override
    public void onStatusChanged(String provider, int status, Bundle extras) {
    }

}
