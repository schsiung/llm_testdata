/*
 *    GeoTools - The Open Source Java GIS Toolkit
 *    http://geotools.org
 *
 *    (C) 2002-2008, Open Source Geospatial Foundation (OSGeo)
 *
 *    This library is free software; you can redistribute it and/or
 *    modify it under the terms of the GNU Lesser General Public
 *    License as published by the Free Software Foundation;
 *    version 2.1 of the License.
 *
 *    This library is distributed in the hope that it will be useful,
 *    but WITHOUT ANY WARRANTY; without even the implied warranty of
 *    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 *    Lesser General Public License for more details.
 */
package org.geotools.data.jdbc;

import static org.geotools.util.Converters.convert;

import java.io.StringWriter;
import java.util.Arrays;
import java.util.Collections;
import java.util.Date;
import java.util.LinkedHashSet;
import java.util.Locale;
import java.util.Set;
import java.util.logging.Handler;
import java.util.logging.Level;
import java.util.logging.Logger;
import java.util.stream.Collectors;
import java.util.stream.Stream;
import org.geotools.factory.CommonFactoryFinder;
import org.geotools.feature.simple.SimpleFeatureTypeBuilder;
import org.geotools.jdbc.NonIncrementingPrimaryKeyColumn;
import org.geotools.jdbc.PrimaryKey;
import org.geotools.temporal.object.DefaultInstant;
import org.geotools.temporal.object.DefaultPosition;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.opengis.feature.simple.SimpleFeatureType;
import org.opengis.filter.Filter;
import org.opengis.filter.FilterFactory;
import org.opengis.filter.Id;
import org.opengis.filter.PropertyIsEqualTo;
import org.opengis.filter.expression.Add;
import org.opengis.filter.expression.Expression;
import org.opengis.filter.expression.Function;
import org.opengis.filter.expression.Literal;
import org.opengis.filter.expression.PropertyName;
import org.opengis.filter.identity.FeatureId;

/**
 * Unit test for sql encoding of filters into where statements.
 *
 * @author Chris Holmes, TOPP
 * @author Saul Farber, MassGIS
 */
public class FilterToSQLTest {
    private FilterFactory ff = CommonFactoryFinder.getFilterFactory(null);
    private static Logger LOGGER =
            org.geotools.util.logging.Logging.getLogger(FilterToSQLTest.class);

    private SimpleFeatureType integerFType;
    private SimpleFeatureType stringFType;
    private SimpleFeatureType sqlDateFType;
    private SimpleFeatureType timestampFType;
    private SimpleFeatureType dateFType;
    private FilterToSQL encoder;
    private StringWriter output;

    @Before
    public void setUp() throws Exception {
        Level debugLevel = Level.FINE;
        Locale.setDefault(new Locale("en", "US"));
        Logger log = LOGGER;
        while (log != null) {
            log.setLevel(debugLevel);
            for (int i = 0; i < log.getHandlers().length; i++) {
                Handler h = log.getHandlers()[i];
                h.setLevel(debugLevel);
            }
            log = log.getParent();
        }

        SimpleFeatureTypeBuilder ftb = new SimpleFeatureTypeBuilder();
        ftb.setName("testFeatureType");
        ftb.add("testAttr", Integer.class);
        integerFType = ftb.buildFeatureType();

        ftb = new SimpleFeatureTypeBuilder();
        ftb.setName("testFeatureType");
        ftb.add("testAttr", java.sql.Date.class);
        sqlDateFType = ftb.buildFeatureType();

        ftb = new SimpleFeatureTypeBuilder();
        ftb.setName("testFeatureType");
        ftb.add("testAttr", java.sql.Timestamp.class);
        timestampFType = ftb.buildFeatureType();

        ftb = new SimpleFeatureTypeBuilder();
        ftb.setName("testFeatureType");
        ftb.add("testAttr", Date.class);
        dateFType = ftb.buildFeatureType();

        ftb.setName("testFeatureType");
        ftb.add("testAttr", String.class);
        stringFType = ftb.buildFeatureType();

        output = new StringWriter();
        encoder = new FilterToSQL(output);
        encoder.setPrimaryKey(
                new PrimaryKey(
                        "foobar",
                        Collections.singletonList(
                                new NonIncrementingPrimaryKeyColumn("id", String.class))));
    }

    @Test
    public void testIntegerContext() throws Exception {

        Expression literal = ff.literal(5);
        Expression prop = ff.property(integerFType.getAttributeDescriptors().get(0).getLocalName());
        PropertyIsEqualTo filter = ff.equals(prop, literal);

        encoder.setFeatureType(integerFType);
        encoder.encode(filter);

        LOGGER.fine("testAttr is an Integer " + filter + " -> " + output.getBuffer().toString());
        Assert.assertEquals(output.getBuffer().toString(), "WHERE testAttr = 5");
    }

    @Test
    public void testSqlDateContext() throws Exception {
        Expression literal = ff.literal("2002-12-03");
        Expression prop = ff.property(sqlDateFType.getAttributeDescriptors().get(0).getLocalName());
        PropertyIsEqualTo filter = ff.equals(prop, literal);

        encoder.setFeatureType(sqlDateFType);
        encoder.encode(filter);

        LOGGER.fine(
                "testAttr is a java.sql.Date " + filter + " -> " + output.getBuffer().toString());
        Assert.assertEquals(output.getBuffer().toString(), "WHERE testAttr = '2002-12-03'");
    }

    @Test
    public void testTimestampContext() throws Exception {
        Expression literal = ff.literal("2002-12-03 10:00");
        Expression prop =
                ff.property(timestampFType.getAttributeDescriptors().get(0).getLocalName());
        PropertyIsEqualTo filter = ff.equals(prop, literal);

        encoder.setFeatureType(timestampFType);
        encoder.encode(filter);

        LOGGER.fine("testAttr is a Timestampa " + filter + " -> " + output.getBuffer().toString());
        Assert.assertEquals(output.getBuffer().toString(), "WHERE testAttr = '2002-12-03 10:00'");
    }

    @Test
    public void testDateContext() throws Exception {
        Expression literal = ff.literal("2002-12-03 10:00");
        Expression prop = ff.property(dateFType.getAttributeDescriptors().get(0).getLocalName());
        PropertyIsEqualTo filter = ff.equals(prop, literal);

        encoder.setFeatureType(dateFType);
        encoder.encode(filter);

        LOGGER.fine(
                "testAttr is a java.util.Date " + filter + " -> " + output.getBuffer().toString());
        Assert.assertEquals(output.getBuffer().toString(), "WHERE testAttr = '2002-12-03 10:00'");
    }

    @Test
    public void testStringContext() throws Exception {
        Expression literal = ff.literal(5);
        Expression prop = ff.property(stringFType.getAttributeDescriptors().get(0).getLocalName());
        PropertyIsEqualTo filter = ff.equals(prop, literal);

        encoder.setFeatureType(stringFType);
        encoder.encode(filter);

        LOGGER.fine("testAttr is a String " + filter + " -> " + output.getBuffer().toString());
        Assert.assertEquals(output.getBuffer().toString(), "WHERE testAttr = '5'");
    }

    @Test
    public void testIntegerToNumberContext() throws Exception {

        Expression literal = ff.literal(5.0);
        Expression prop = ff.property(integerFType.getAttributeDescriptors().get(0).getLocalName());
        PropertyIsEqualTo filter = ff.equals(prop, literal);

        encoder.setFeatureType(integerFType);
        encoder.encode(filter);

        LOGGER.fine("testAttr is an Integer " + filter + " -> " + output.getBuffer().toString());
        Assert.assertEquals(output.getBuffer().toString(), "WHERE testAttr = 5.0");
    }

    @Test
    public void testInclude() throws Exception {
        encoder.encode(Filter.INCLUDE);
        Assert.assertEquals(output.getBuffer().toString(), "WHERE 1 = 1");
    }

    @Test
    public void testExclude() throws Exception {
        encoder.encode(Filter.EXCLUDE);
        Assert.assertEquals(output.getBuffer().toString(), "WHERE 0 = 1");
    }

    @Test
    public void testIdFilterMulti() throws Exception {
        Set<FeatureId> fids = new LinkedHashSet<>();
        fids.add(ff.featureId("fid1"));
        fids.add(ff.featureId("fid2"));
        Id id = ff.id(fids);

        encoder.encode(id);
        Assert.assertEquals("WHERE ((id = 'fid1') OR (id = 'fid2'))", output.toString());
    }

    @Test
    public void testIdFilterSingle() throws Exception {
        Set<FeatureId> fids = new LinkedHashSet<>();
        fids.add(ff.featureId("fid1"));
        Id id = ff.id(fids);

        encoder.encode(id);
        Assert.assertEquals("WHERE (id = 'fid1')", output.toString());
    }

    @Test
    public void testEscapeQuote() throws FilterToSQLException {
        PropertyIsEqualTo equals = ff.equals(ff.property("attribute"), ff.literal("A'A"));
        encoder.encode(equals);
        Assert.assertEquals("WHERE attribute = 'A''A'", output.toString());
    }

    @Test
    public void testExpression() throws Exception {
        Add a = ff.add(ff.property("testAttr"), ff.literal(5));
        encoder.encode(a);
        Assert.assertEquals("testAttr + 5", output.toString());
    }

    @Test
    public void testEscapeQuoteFancy() throws FilterToSQLException {
        FilterFactory ff = CommonFactoryFinder.getFilterFactory(null);
        Object fancyLiteral =
                new Object() {

                    @Override
                    public String toString() {
                        return "A'A";
                    }
                };
        PropertyIsEqualTo equals = ff.equals(ff.property("attribute"), ff.literal(fancyLiteral));
        StringWriter output = new StringWriter();
        FilterToSQL encoder = new FilterToSQL(output);
        encoder.encode(equals);
        Assert.assertEquals("WHERE attribute = 'A''A'", output.toString());
    }

    @Test
    public void testNumberEscapes() throws Exception {
        Add a = ff.add(ff.property("testAttr"), ff.literal(5));
        PropertyIsEqualTo equal = ff.equal(ff.property("testAttr"), a, false);
        StringWriter output = new StringWriter();
        FilterToSQL encoder = new FilterToSQL(output);
        // this test must pass even when the target feature type is not known
        // encoder.setFeatureType(integerFType);
        encoder.encode(equal);
        Assert.assertEquals("WHERE testAttr = testAttr + 5", output.toString());
    }

    @Test
    public void testInline() throws Exception {
        PropertyIsEqualTo equal = ff.equal(ff.property("testAttr"), ff.literal(5), false);
        StringWriter output = new StringWriter();
        FilterToSQL encoder = new FilterToSQL(output);
        encoder.setInline(true);

        encoder.encode(equal);
        Assert.assertEquals("testAttr = 5", output.toString());
    }

    @Test
    public void testAfterInstant() throws Exception {
        Date date = convert("2002-12-03 10:00:00AM", Date.class);
        DefaultInstant instant = new DefaultInstant(new DefaultPosition(date));
        Expression literal = ff.literal(instant);
        Expression prop =
                ff.property(timestampFType.getAttributeDescriptors().get(0).getLocalName());
        PropertyIsEqualTo filter = ff.equals(prop, literal);

        encoder.setFeatureType(timestampFType);
        encoder.encode(filter);

        LOGGER.fine("testAttr is a Timestamp " + filter + " -> " + output.getBuffer().toString());
        Assert.assertEquals(
                output.getBuffer().toString(), "WHERE testAttr = '2002-12-03 10:00:00.0'");
    }

    @Test
    public void testSimpleIn() throws FilterToSQLException {
        // straight
        Assert.assertEquals(
                encodeInComparison("in", true, "true", 1, 2), "WHERE testAttr IN (1, " + "2)");
        // double negation
        Assert.assertEquals(
                encodeInComparison("in", false, "false", 1, 2), "WHERE testAttr IN " + "(1, 2)");
    }

    @Test
    public void testMixedLogic() throws FilterToSQLException {
        Assert.assertEquals(
                encodeInComparison("in", true, "true", 1, 2), "WHERE testAttr IN (1, 2)");
        Assert.assertEquals(
                encodeInComparison("in", false, "false", 1, 2), "WHERE testAttr IN (1, 2)");
    }

    @Test
    public void testIn2To10() throws FilterToSQLException {
        for (int i = 2; i <= 10; i++) {
            Object[] values = new Object[i];
            for (int j = 0; j < values.length; j++) {
                values[j] = j;
            }
            String commaSeparatedValues =
                    Arrays.stream(values)
                            .map(v -> String.valueOf(v))
                            .collect(Collectors.joining(", "));
            Assert.assertEquals(
                    encodeInComparison("in" + i, true, "true", values),
                    "WHERE testAttr IN (" + commaSeparatedValues + ")");
        }
    }

    @Test
    public void testInWithLessThan() throws FilterToSQLException {
        FilterToSQL encoder = new FilterToSQL(output);

        Function function = buildInFunction("in", new Object[] {1, 2});
        Filter filter = ff.less(function, ff.literal(true));
        encoder.encode(filter);

        // weird but legit, at least in some databases
        Assert.assertEquals("WHERE (testAttr IN (1, 2)) < true", output.getBuffer().toString());
    }

    public String encodeInComparison(
            String functionName, boolean equality, String literal, Object... valueList)
            throws FilterToSQLException {
        FilterToSQL encoder = new FilterToSQL(output);

        Function function = buildInFunction(functionName, valueList);
        Filter filter;
        if (equality) {
            filter = ff.equal(function, ff.literal(literal), true);
        } else {
            filter = ff.notEqual(function, ff.literal(literal), true);
        }
        encoder.encode(filter);

        String result = output.getBuffer().toString();
        output.getBuffer().setLength(0);
        return result;
    }

    public Function buildInFunction(String functionName, Object[] valueList) {
        Stream<Literal> values = Arrays.stream(valueList).map(v -> ff.literal(v));
        Stream<PropertyName> property = Stream.of(ff.property("testAttr"));
        Expression[] literals = Stream.concat(property, values).toArray(i -> new Expression[i]);
        return ff.function(functionName, literals);
    }

    @Test
    public void testNestedMath1() throws Exception {
        final Filter filter =
                ff.equals(
                        ff.multiply(
                                ff.subtract(ff.property("PROP1"), ff.literal(10)), ff.literal(20)),
                        ff.literal(50));
        FilterToSQL encoder = new FilterToSQL(output);
        Assert.assertEquals("WHERE (PROP1 - 10) * 20 = 50", encoder.encodeToString(filter));
    }

    @Test
    public void testNestedMath2() throws Exception {
        final Filter filter =
                ff.equals(
                        ff.subtract(
                                ff.property("PROP1"), ff.multiply(ff.literal(10), ff.literal(20))),
                        ff.literal(50));
        FilterToSQL encoder = new FilterToSQL(output);
        Assert.assertEquals("WHERE PROP1 - (10 * 20) = 50", encoder.encodeToString(filter));
    }

    @Test
    public void testSimpleInFromEqualities() throws Exception {
        PropertyName p = ff.property("PROP1");
        final Filter filter =
                ff.or(Arrays.asList(ff.equals(p, ff.literal(1)), ff.equals(p, ff.literal(2))));
        FilterToSQL encoder = new FilterToSQL(output);
        Assert.assertEquals("WHERE PROP1 IN (1, 2)", encoder.encodeToString(filter));
    }

    @Test
    public void testMixedInFromEqualities() throws Exception {
        PropertyName p1 = ff.property("P1");
        PropertyName p2 = ff.property("P2");
        final Filter filter =
                ff.or(
                        Arrays.asList(
                                ff.equals(p1, ff.literal(1)),
                                ff.equals(p2, ff.literal("a")),
                                ff.equals(p1, ff.literal(2)),
                                ff.equals(p2, ff.literal("b"))));
        FilterToSQL encoder = new FilterToSQL(output);
        Assert.assertEquals(
                "WHERE (P1 IN (1, 2) OR P2 IN ('a', 'b'))", encoder.encodeToString(filter));
    }

    @Test
    public void testMixedInWithSingleEquality() throws Exception {
        PropertyName p1 = ff.property("P1");
        PropertyName p2 = ff.property("P2");
        final Filter filter =
                ff.or(
                        Arrays.asList(
                                ff.equals(p1, ff.literal(1)),
                                ff.equals(p2, ff.literal("a")),
                                ff.equals(p1, ff.literal(2))));
        FilterToSQL encoder = new FilterToSQL(output);
        Assert.assertEquals("WHERE (P1 IN (1, 2) OR P2 = 'a')", encoder.encodeToString(filter));
    }

    @Test
    public void testInFromEqualitiesInequalities() throws Exception {
        PropertyName p1 = ff.property("P1");
        PropertyName p2 = ff.property("P2");
        final Filter filter =
                ff.or(
                        Arrays.asList(
                                ff.equals(p1, ff.literal(1)),
                                ff.greater(p2, ff.literal(3)),
                                ff.equals(p1, ff.literal(2)),
                                ff.less(p2, ff.literal(4))));
        FilterToSQL encoder = new FilterToSQL(output);
        Assert.assertEquals(
                "WHERE (P1 IN (1, 2) OR P2 > 3 OR P2 < 4)", encoder.encodeToString(filter));
    }

    @Test
    public void testEscapeName() {
        encoder.setSqlNameEscape("\"");
        Assert.assertEquals("\"abc\"", encoder.escapeName("abc"));
        Assert.assertEquals("\"\"\"abc\"", encoder.escapeName("\"abc"));
        Assert.assertEquals("\"a\"\"bc\"", encoder.escapeName("a\"bc"));
        Assert.assertEquals("\"abc\"\"\"", encoder.escapeName("abc\""));
        encoder.setSqlNameEscape("");
        Assert.assertEquals("abc", encoder.escapeName("abc"));
    }

    @Test
    public void testLikeEscaping() throws Exception {
        Filter filter = ff.like(ff.property("testString"), "\\'FOO", "%", "-", "\\", true);
        FilterToSQL encoder = new FilterToSQL(output);
        Assert.assertEquals("WHERE testString LIKE '''FOO'", encoder.encodeToString(filter));
    }

    @Test
    public void testIdEscaping() throws Exception {
        Id id = ff.id(Collections.singleton(ff.featureId("'FOO")));
        encoder.encode(id);
        Assert.assertEquals("WHERE (id = '''FOO')", output.toString());
    }

    @Test
    public void testLikeEscaping() throws Exception {
        Filter filter = ff.like(ff.property("testString"), "\\'FOO", "%", "-", "\\", true);
        FilterToSQL encoder = new FilterToSQL(output);
        Assert.assertEquals("WHERE testString LIKE '''FOO'", encoder.encodeToString(filter));
    }

    @Test
    public void testIdEscaping() throws Exception {
        Id id = ff.id(Collections.singleton(ff.featureId("'FOO")));
        encoder.encode(id);
        Assert.assertEquals("WHERE (id = '''FOO')", output.toString());
    }
}