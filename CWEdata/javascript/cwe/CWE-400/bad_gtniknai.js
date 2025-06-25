import { UserType } from 'nocodb-sdk';
import { CacheGetType, CacheScope, MetaTable } from '../utils/globals';
import Noco from '../Noco';
import extractProps from '../meta/helpers/extractProps';
import NocoCache from '../cache/NocoCache';
export default class User implements UserType {
  id: number;

  /** @format email */
  email: string;

  password?: string;
  salt?: string;
  firstname: string;
  lastname: string;
  username?: string;
  refresh_token?: string;
  invite_token?: string;
  invite_token_expires?: number | Date;
  reset_password_expires?: number | Date;
  reset_password_token?: string;
  email_verification_token?: string;
  email_verified: boolean;
  roles?: string;
  token_version?: string;

  constructor(data: User) {
    Object.assign(this, data);
  }

  public static async insert(user: Partial<User>, ncMeta = Noco.ncMeta) {
    const insertObj = extractProps(user, [
      'id',
      'email',
      'password',
      'salt',
      'firstname',
      'lastname',
      'username',
      'refresh_token',
      'invite_token',
      'invite_token_expires',
      'reset_password_expires',
      'reset_password_token',
      'email_verification_token',
      'email_verified',
      'roles',
      'token_version'
    ]);

    if (insertObj.email) {
      insertObj.email = insertObj.email.toLowerCase();
    }

    const { id } = await ncMeta.metaInsert2(
      null,
      null,
      MetaTable.USERS,
      insertObj
    );

    await NocoCache.del(CacheScope.INSTANCE_META);

    return this.get(id, ncMeta);
  }
  public static async update(id, user: Partial<User>, ncMeta = Noco.ncMeta) {
    const updateObj = extractProps(user, [
      'email',
      'password',
      'salt',
      'firstname',
      'lastname',
      'username',
      'refresh_token',
      'invite_token',
      'invite_token_expires',
      'reset_password_expires',
      'reset_password_token',
      'email_verification_token',
      'email_verified',
      'roles',
      'token_version'
    ]);

    if (updateObj.email) {
      updateObj.email = updateObj.email.toLowerCase();
    } else {
      // set email prop to avoid generation of invalid cache key
      updateObj.email = (await this.get(id, ncMeta))?.email?.toLowerCase();
    }
    // get existing cache
    const keys = [
      // update user:<id>
      `${CacheScope.USER}:${id}`,
      // update user:<email>
      `${CacheScope.USER}:${user.email}`
    ];
    for (const key of keys) {
      let o = await NocoCache.get(key, CacheGetType.TYPE_OBJECT);
      if (o) {
        o = { ...o, ...updateObj };
        // set cache
        await NocoCache.set(key, o);
      }
    }
    // as <projectId> is unknown, delete user:<email>___<projectId> in cache
    await NocoCache.delAll(CacheScope.USER, `${user.email}___*`);

    // set meta
    return await ncMeta.metaUpdate(null, null, MetaTable.USERS, updateObj, id);
  }
  public static async getByEmail(_email: string, ncMeta = Noco.ncMeta) {
    const email = _email?.toLowerCase();
    let user =
      email &&
      (await NocoCache.get(
        `${CacheScope.USER}:${email}`,
        CacheGetType.TYPE_OBJECT
      ));
    if (!user) {
      user = await ncMeta.metaGet2(null, null, MetaTable.USERS, {
        email
      });
      await NocoCache.set(`${CacheScope.USER}:${email}`, user);
    }
    return user;
  }

  static async isFirst(ncMeta = Noco.ncMeta) {
    const isFirst = !(await NocoCache.getAll(`${CacheScope.USER}:*`))?.length;
    if (isFirst)
      return !(await ncMeta.metaGet2(null, null, MetaTable.USERS, {}));
    return false;
  }

  static async count(ncMeta = Noco.ncMeta) {
    return (
      await ncMeta
        .knex(MetaTable.USERS)
        .count('id', { as: 'count' })
        .first()
    )?.count;
  }

  static async get(userId, ncMeta = Noco.ncMeta) {
    let user =
      userId &&
      (await NocoCache.get(
        `${CacheScope.USER}:${userId}`,
        CacheGetType.TYPE_OBJECT
      ));
    if (!user) {
      user = await ncMeta.metaGet2(null, null, MetaTable.USERS, userId);
      await NocoCache.set(`${CacheScope.USER}:${userId}`, user);
    }
    return user;
  }

  static async getByRefreshToken(refresh_token, ncMeta = Noco.ncMeta) {
    const user = await ncMeta.metaGet2(null, null, MetaTable.USERS, {
      refresh_token
    });
    return user;
  }
}