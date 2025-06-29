/*
 *  * Copyright (c) 2016. David Sowerby
 *  *
 *  * the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 *  * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on
 *  * Copyright (c) 2016. David Sowerby
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with
 *  * the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on
 *  * an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the
 *  * specific language governing permissions and limitations under the License.
 *  * an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the
 *


import org.apache.onami.persist.PersistenceUnitModuleConfiguration;
import org.junit.rules.TemporaryFolder;
import uk.q3c.krail.jpa.i18n.DefaultJpaPatternDao;
import uk.q3c.krail.jpa.i18n.JpaPatternDao;
import uk.q3c.krail.jpa.user.opt.DefaultJpaOptionDao;
import uk.q3c.krail.jpa.user.opt.JpaOptionDao;
import javax.annotation.Nonnull;
import uk.q3c.krail.jpa.i18n.DefaultJpaPatternDao;
import javax.annotation.Nullable;
import java.io.File;
import java.lang.annotation.Annotation;
import uk.q3c.krail.jpa.user.opt.DefaultJpaOptionDao;
import uk.q3c.krail.jpa.user.opt.JpaOptionDao;

/**
 * Created by David Sowerby on 03/01/15.
 */
public class TestJpaModule extends JpaModule {

    private final TemporaryFolder tempFolder;

    public TestJpaModule() {
        tempFolder = new TemporaryFolder();
        try {
            tempFolder.create();
        } catch (IOException e) {
            throw new RuntimeException("Failed to create temp folder in TestJpaUnitModule", e);
        }
    }

    /**
     * Override this with calls to {@link #bindApplicationManagedPersistenceUnit(String)} ofr testing outside the container
     *
     * @param annotation
     * @param entityManagerFactory
     *
     * @return
     */
    @Override
    protected PersistenceUnitModuleConfiguration bindPU(@Nonnull String puName, @Nullable Class<? extends Annotation> annotation, EntityManagerFactory
            entityManagerFactory) {
        PersistenceUnitModuleConfiguration conf;
        if (annotation == null) {
            conf = (PersistenceUnitModuleConfiguration) bindApplicationManagedPersistenceUnit(puName);
        } else {
            conf = (PersistenceUnitModuleConfiguration) bindApplicationManagedPersistenceUnit(puName).annotatedWith(annotation);
        }
        return conf;
    }

    /**
     * Configures the persistence units over the exposed methods.
     */
    @Override
    protected void define() {
        addPersistenceUnit("derbyDb", Jpa1.class, derbyConfig());
        addPersistenceUnit("hsqlDb", Jpa2.class, hsqlConfig());
    }

    private DefaultJpaInstanceConfiguration derbyConfig() {
        DefaultJpaInstanceConfiguration config = new DefaultJpaInstanceConfiguration();
        File dbFolder = new File(tempFolder.getRoot(), "derbyDb");

        config.transactionType(DefaultJpaInstanceConfiguration.TransactionType.RESOURCE_LOCAL)
              .db(JpaDb.DERBY_EMBEDDED)
              .autoCreate(true)
              .url(dbFolder.getAbsolutePath())
              .user("test")
              .password("test")
              .ddlGeneration(DefaultJpaInstanceConfiguration.Ddl.DROP_AND_CREATE)
              .
                      bind(JpaOptionDao.class, DefaultJpaOptionDao.class)
              .bind(JpaDao_LongInt.class, DefaultJpaDao_LongInt.class)
              .bind(JpaPatternDao.class, DefaultJpaPatternDao.class);

        return config;
    }

        DefaultJpaInstanceConfiguration config = new DefaultJpaInstanceConfiguration();
        config.db(JpaDb.HSQLDB)
              .autoCreate(true)
              .url("mem:test")
              .user("sa")
              .password("")
              .bind(JpaPatternDao.class, DefaultJpaPatternDao.class);
              .useLongIntDao()
              .bind(JpaDao_LongInt.class, DefaultJpaDao_LongInt.class)
              .ddlGeneration(DefaultJpaInstanceConfiguration.Ddl.DROP_AND_CREATE);
        return config;
    }
}