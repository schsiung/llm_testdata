package model;

import java.sql.PreparedStatement;
import object.Region;
import object.Variant;
import util.DBManager;
import java.sql.ResultSet;
import java.util.ArrayList;

/**
 *
 * @author Nick
 */
public class Output {

    public static ArrayList<Variant> variantList = new ArrayList<Variant>();
    public static Variant variant;
    public static String rvisPercentile;
    public static String errorMsg;

    public static void init() throws Exception {
        variantList.clear();
        variant = null;
        errorMsg = "";

        Download.init();

        if (!Input.idStr.isEmpty()) {
            initVariant();
        } else {
            initVariantList();

            Download.generateFile();
        }
    }

    public static void initVariant() throws Exception {
        String[] tmp = Input.idStr.split("-");

        String sql = "SELECT * "
                + "FROM variant_v2 "
                + "WHERE chr= ? AND pos= ? AND ref= ? AND allele= ?";

        PreparedStatement stmt = DBManager.prepareStatement(sql);
        stmt.setString(1, tmp[0]);
        stmt.setInt(2, Integer.valueOf(tmp[1]));
        stmt.setString(3, tmp[2]);
        stmt.setString(4, tmp[3]);
        ResultSet rset = stmt.executeQuery();

        if (rset.next()) {
            variant = new Variant(rset);
        }

        if (variant != null) {
            variant.initAnnotationMap();
        }
    }

    public static void initVariantList() throws Exception {
        String sql = "SELECT * "
                + "FROM variant_v2 "
                + "WHERE ";

        sql = addRegionSql(sql);

        if (!sql.isEmpty() && !Input.regionList.isEmpty()) {
            ResultSet rset = DBManager.executeQuery(sql);

            while (rset.next()) {
                variantList.add(new Variant(rset));
            }

            rset.close();

            for (Variant var : variantList) {
                var.initAnnotationMap();
            }
        }
    }

    private static String addRegionSql(String sql) {
        for (Region region : Input.regionList) {
            if (Input.query.contains(":")
                    && region.getEnd() - region.getStart() > 100000) {
                errorMsg = "Your region is too large. "
                        + "Please submit a region of at most 100 kb.";
                return "";
            }

            sql += "chr = '" + region.getChr() + "' "
                    + "AND pos >= " + region.getStart() + " "
                    + "AND pos <= " + region.getEnd() + " AND ";
        }

        sql += " TRUE ORDER BY chr,pos";

        return sql;
    }
}