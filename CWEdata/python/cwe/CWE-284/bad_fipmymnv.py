# -*- coding: utf-8 -*-
# rdiffweb, A web interface to rdiff-backup repositories
# Copyright (C) 2012-2021 rdiffweb contributors
#
# This program is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with this program.  If not, see <http://www.gnu.org/licenses/>.

import logging
import sys

import cherrypy
from sqlalchemy import event, func
from sqlalchemy.exc import IntegrityError

from ._repo import RepoObject  # noqa
from ._session import DbSession, SessionObject  # noqa
from ._sshkey import SshKey, sshkey_fingerprint_index  # noqa
from ._token import Token  # noqa
from ._user import DuplicateSSHKeyError, UserObject, user_username_index  # noqa

Base = cherrypy.tools.db.get_base()

logger = logging.getLogger(__name__)


def _column_add(connection, column):
    if _column_exists(connection, column):
        return
    table_name = column.table.fullname
    column_name = column.name
    column_type = column.type.compile(connection.engine.dialect)
    connection.engine.execute('ALTER TABLE %s ADD COLUMN %s %s' % (table_name, column_name, column_type))


def _column_exists(connection, column):
    table_name = column.table.fullname
    column_name = column.name
    if 'SQLite' in connection.engine.dialect.__class__.__name__:
        sql = "SELECT COUNT(*) FROM pragma_table_info('%s') WHERE LOWER(name)=LOWER('%s')" % (
            table_name,
            column_name,
        )
    else:
        sql = "SELECT COUNT(*) FROM information_schema.columns WHERE table_name='%s' and column_name='%s'" % (
            table_name,
            column_name,
        )
    data = connection.engine.execute(sql).first()
    return data[0] >= 1


def _index_exists(connection, index_name):
    if 'SQLite' in connection.engine.dialect.__class__.__name__:
        sql = "SELECT name FROM sqlite_master WHERE type = 'index' AND name = '%s';" % (index_name)
    else:
        sql = "SELECT * FROM pg_indexes WHERE indexname = '%s'" % (index_name)
    return connection.engine.execute(sql).first() is not None


@event.listens_for(Base.metadata, 'after_create')
def db_after_create(target, connection, **kw):
    """
    Called on database creation to update database schema.
    """

    if getattr(connection, '_transaction', None):
        connection._transaction.commit()

    # Add repo's Encoding
    _column_add(connection, RepoObject.__table__.c.Encoding)
    _column_add(connection, RepoObject.__table__.c.keepdays)

    # Create column for roles using "isadmin" column. Keep the
    # original column in case we need to revert to previous version.
    if not _column_exists(connection, UserObject.__table__.c.role):
        _column_add(connection, UserObject.__table__.c.role)
        UserObject.query.filter(UserObject._is_admin == 1).update({UserObject.role: UserObject.ADMIN_ROLE})

    # Add user's fullname column
    _column_add(connection, UserObject.__table__.c.fullname)

    # Add user's mfa column
    _column_add(connection, UserObject.__table__.c.mfa)

    # Re-create session table if Number column is missing
    if not _column_exists(connection, SessionObject.__table__.c.Number):
        SessionObject.__table__.drop()
        SessionObject.__table__.create()

    if getattr(connection, '_transaction', None):
        connection._transaction.commit()

    # Remove preceding and leading slash (/) generated by previous
    # versions. Also rename '.' to ''
    result = RepoObject.query.all()
    for row in result:
        if row.repopath.startswith('/') or row.repopath.endswith('/'):
            row.repopath = row.repopath.strip('/')
            row.commit()
        if row.repopath == '.':
            row.repopath = ''
            row.commit()
    # Remove duplicates and nested repositories.
    result = RepoObject.query.order_by(RepoObject.userid, RepoObject.repopath).all()
    prev_repo = (None, None)
    for row in result:
        if prev_repo[0] == row.userid and (prev_repo[1] == row.repopath or row.repopath.startswith(prev_repo[1] + '/')):
            row.delete()
        else:
            prev_repo = (row.userid, row.repopath)

    # Fix username case insensitive unique
    if not _index_exists(connection, 'user_username_index'):
        duplicate_users = (
            UserObject.query.with_entities(func.lower(UserObject.username))
            .group_by(func.lower(UserObject.username))
            .having(func.count(UserObject.username) > 1)
        ).all()
        try:
            user_username_index.create()
        except IntegrityError:
            msg = (
                'Failure to upgrade your database to make Username case insensitive. '
                'You must downgrade and deleted duplicate Username. '
                '%s' % '\n'.join([str(k) for k in duplicate_users]),
            )
            logger.error(msg)
            print(msg, file=sys.stderr)
            raise SystemExit(12)

    # Fix SSH Key uniqueness - since 2.5.4
    if not _index_exists(connection, 'sshkey_fingerprint_index'):
        duplicate_sshkeys = (
            SshKey.query.with_entities(SshKey.fingerprint)
            .group_by(SshKey.fingerprint)
            .having(func.count(SshKey.fingerprint) > 1)
        ).all()
        try:
            sshkey_fingerprint_index.create()
        except IntegrityError:
            msg = (
                'Failure to upgrade your database to make SSH Keys unique. '
                'You must downgrade and deleted duplicate SSH Keys. '
                '%s' % '\n'.join([str(k) for k in duplicate_sshkeys]),
            )
            logger.error(msg)
            print(msg, file=sys.stderr)
            raise SystemExit(12)