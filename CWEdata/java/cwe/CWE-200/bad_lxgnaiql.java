/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 */

/*
 * Licensed to Elasticsearch under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/*
 * Modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

package org.opensearch.index.analysis;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.InvalidPathException;

import org.apache.logging.log4j.LogManager;
import org.apache.lucene.analysis.TokenStream;
import org.opensearch.common.io.Streams;
import org.opensearch.common.settings.Settings;
import org.opensearch.env.Environment;
import org.opensearch.index.IndexSettings;

import com.ibm.icu.text.Collator;
import com.ibm.icu.text.RuleBasedCollator;
import com.ibm.icu.util.ULocale;

/**
 * An ICU based collation token filter. There are two ways to configure collation:
 * <p>The first is simply specifying the locale (defaults to the default
 * locale). The {@code language} parameter is the lowercase two-letter
 * ISO-639 code. An additional {@code country} and {@code variant}
 * can be provided.
 * <p>The second option is to specify collation rules as defined in the
 * <a href="http://www.icu-project.org/userguide/Collate_Customization.html">
 * Collation customization</a> chapter in icu docs. The {@code rules}
 * parameter can either embed the rules definition
 * in the settings or refer to an external location (preferable located under
 * the {@code config} location, relative to it).
 */
public class IcuCollationTokenFilterFactory extends AbstractTokenFilterFactory {

    private final Collator collator;

    public IcuCollationTokenFilterFactory(IndexSettings indexSettings, Environment environment, String name, Settings settings) {
        super(indexSettings, name, settings);

        Collator collator;
        String rules = settings.get("rules");
        if (rules != null) {
            Exception failureToResolve = null;
            try {
                rules = Streams.copyToString(Files.newBufferedReader(environment.configDir().resolve(rules), StandardCharsets.UTF_8));
            } catch (IOException | SecurityException | InvalidPathException e) {
                failureToResolve = e;
            }
            try {
                collator = new RuleBasedCollator(rules);
            } catch (Exception e) {
                if (failureToResolve != null) {
                    LogManager.getLogger(IcuCollationTokenFilterFactory.class)
                        .error("Failed to resolve collation rules location", failureToResolve);
                    throw new IllegalArgumentException("Failed to resolve collation rules location");
                } else {
                    LogManager.getLogger(IcuCollationTokenFilterFactory.class).error("Failed to parse collation rules", e);
                    throw new IllegalArgumentException("Failed to parse collation rules");
                }
            }
        } else {
            String language = settings.get("language");
            if (language != null) {
                ULocale locale;
                String country = settings.get("country");
                if (country != null) {
                    String variant = settings.get("variant");
                    if (variant != null) {
                        locale = new ULocale(language, country, variant);
                    } else {
                        locale = new ULocale(language, country);
                    }
                } else {
                    locale = new ULocale(language);
                }
                collator = Collator.getInstance(locale);
            } else {
                collator = Collator.getInstance(ULocale.ROOT);
            }
        }

        // set the strength flag, otherwise it will be the default.
        String strength = settings.get("strength");
        if (strength != null) {
            if (strength.equalsIgnoreCase("primary")) {
                collator.setStrength(Collator.PRIMARY);
            } else if (strength.equalsIgnoreCase("secondary")) {
                collator.setStrength(Collator.SECONDARY);
            } else if (strength.equalsIgnoreCase("tertiary")) {
                collator.setStrength(Collator.TERTIARY);
            } else if (strength.equalsIgnoreCase("quaternary")) {
                collator.setStrength(Collator.QUATERNARY);
            } else if (strength.equalsIgnoreCase("identical")) {
                collator.setStrength(Collator.IDENTICAL);
            } else {
                throw new IllegalArgumentException("Invalid strength: " + strength);
            }
        }

        // set the decomposition flag, otherwise it will be the default.
        String decomposition = settings.get("decomposition");
        if (decomposition != null) {
            if (decomposition.equalsIgnoreCase("no")) {
                collator.setDecomposition(Collator.NO_DECOMPOSITION);
            } else if (decomposition.equalsIgnoreCase("canonical")) {
                collator.setDecomposition(Collator.CANONICAL_DECOMPOSITION);
            } else {
                throw new IllegalArgumentException("Invalid decomposition: " + decomposition);
            }
        }

        // expert options: concrete subclasses are always a RuleBasedCollator
        RuleBasedCollator rbc = (RuleBasedCollator) collator;
        String alternate = settings.get("alternate");
        if (alternate != null) {
            if (alternate.equalsIgnoreCase("shifted")) {
                rbc.setAlternateHandlingShifted(true);
            } else if (alternate.equalsIgnoreCase("non-ignorable")) {
                rbc.setAlternateHandlingShifted(false);
            } else {
                throw new IllegalArgumentException("Invalid alternate: " + alternate);
            }
        }

        Boolean caseLevel = settings.getAsBoolean("caseLevel", null);
        if (caseLevel != null) {
            rbc.setCaseLevel(caseLevel);
        }

        String caseFirst = settings.get("caseFirst");
        if (caseFirst != null) {
            if (caseFirst.equalsIgnoreCase("lower")) {
                rbc.setLowerCaseFirst(true);
            } else if (caseFirst.equalsIgnoreCase("upper")) {
                rbc.setUpperCaseFirst(true);
            } else {
                throw new IllegalArgumentException("Invalid caseFirst: " + caseFirst);
            }
        }

        Boolean numeric = settings.getAsBoolean("numeric", null);
        if (numeric != null) {
            rbc.setNumericCollation(numeric);
        }

        String variableTop = settings.get("variableTop");
        if (variableTop != null) {
            rbc.setVariableTop(variableTop);
        }

        Boolean hiraganaQuaternaryMode = settings.getAsBoolean("hiraganaQuaternaryMode", null);
        if (hiraganaQuaternaryMode != null) {
            rbc.setHiraganaQuaternary(hiraganaQuaternaryMode);
        }

        this.collator = collator;
    }

    @Override
    public TokenStream create(TokenStream tokenStream) {
        return new ICUCollationKeyFilter(tokenStream, collator);
    }
}