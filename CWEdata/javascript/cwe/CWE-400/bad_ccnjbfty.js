import Noco from '../Noco';
import Model from './Model';
import Column from './Column';
import {
  CacheDelDirection,
  CacheGetType,
  CacheScope,
  MetaTable
} from '../utils/globals';
import View from './View';
import { FilterType, UITypes } from 'nocodb-sdk';
import NocoCache from '../cache/NocoCache';

export default class Filter {
  id: string;

  fk_model_id?: string;
  fk_view_id?: string;
  fk_hook_id?: string;
  fk_column_id?: string;
  fk_parent_id?: string;

  comparison_op?:
    | 'eq'
    | 'neq'
    | 'not'
    | 'like'
    | 'nlike'
    | 'empty'
    | 'notempty'
    | 'null'
    | 'notnull'
    | 'gt'
    | 'lt'
    | 'gte'
    | 'lte'
    | 'ge'
    | 'le'
    | 'in'
    | 'isnot'
    | 'is'
    | 'btw'
    | 'nbtw';
  value?: string;

  logical_op?: string;
  is_group?: boolean;
  children?: Filter[];
  project_id?: string;
  base_id?: string;
  column?: Column;

  constructor(data: Filter | FilterType) {
    Object.assign(this, data);
  }

  public async getModel(ncMeta = Noco.ncMeta): Promise<Model> {
    return this.fk_view_id
      ? (await View.get(this.fk_view_id, ncMeta)).getModel(ncMeta)
      : Model.getByIdOrName(
          {
            id: this.fk_model_id
          },
          ncMeta
        );
  }

  public static async insert(
    filter: Partial<FilterType>,
    ncMeta = Noco.ncMeta
  ) {
    const insertObj = {
      id: filter.id,
      fk_view_id: filter.fk_view_id,
      fk_hook_id: filter.fk_hook_id,
      fk_column_id: filter.fk_column_id,
      comparison_op: filter.comparison_op,
      value: filter.value,
      fk_parent_id: filter.fk_parent_id,

      is_group: filter.is_group,
      logical_op: filter.logical_op,

      project_id: filter.project_id,
      base_id: filter.base_id,
      order: await ncMeta.metaGetNextOrder(MetaTable.FILTER_EXP, {
        [filter.fk_hook_id ? 'fk_hook_id' : 'fk_view_id']: filter.fk_hook_id
          ? filter.fk_hook_id
          : filter.fk_view_id
      })
    };
    if (!(filter.project_id && filter.base_id)) {
      const model = await Column.get({ colId: filter.fk_column_id }, ncMeta);
      insertObj.project_id = model.project_id;
      insertObj.base_id = model.base_id;
    }

    const row = await ncMeta.metaInsert2(
      null,
      null,
      MetaTable.FILTER_EXP,
      insertObj
    );
    if (filter?.children?.length) {
      await Promise.all(
        filter.children.map(f =>
          this.insert({ ...f, fk_parent_id: row.id }, ncMeta)
        )
      );
    }
    return await this.redisPostInsert(row.id, filter, ncMeta);
  }

  static async redisPostInsert(
    id,
    filter: Partial<FilterType>,
    ncMeta = Noco.ncMeta
  ) {
    if (!(id && (filter.fk_view_id || filter.fk_hook_id))) {
      throw new Error(
        `Mandatory fields missing in FITLER_EXP cache population : id(${id}), fk_view_id(${filter.fk_view_id}), fk_hook_id(${filter.fk_hook_id})`
      );
    }
    const key = `${CacheScope.FILTER_EXP}:${id}`;
    let value = await NocoCache.get(key, CacheGetType.TYPE_OBJECT);
    if (!value) {
      /* get from db */
      value = await ncMeta.metaGet2(null, null, MetaTable.FILTER_EXP, id);
      // pushing calls for Promise.all
      const p = [];
      /* store in redis */
      p.push(NocoCache.set(key, value));
      /* append key to relevant lists */
      if (filter.fk_view_id) {
        p.push(
          NocoCache.appendToList(
            CacheScope.FILTER_EXP,
            [filter.fk_view_id],
            key
          )
        );
      }
      if (filter.fk_hook_id) {
        p.push(
          NocoCache.appendToList(
            CacheScope.FILTER_EXP,
            [filter.fk_hook_id],
            key
          )
        );
      }
      if (filter.fk_parent_id) {
        if (filter.fk_view_id) {
          p.push(
            NocoCache.appendToList(
              CacheScope.FILTER_EXP,
              [filter.fk_view_id, filter.fk_parent_id],
              key
            )
          );
        }
        if (filter.fk_hook_id) {
          p.push(
            NocoCache.appendToList(
              CacheScope.FILTER_EXP,
              [filter.fk_hook_id, filter.fk_parent_id],
              key
            )
          );
        }
        p.push(
          NocoCache.appendToList(
            CacheScope.FILTER_EXP,
            [filter.fk_parent_id],
            key
          )
        );
      }
      if (filter.fk_column_id) {
        p.push(
          NocoCache.appendToList(
            CacheScope.FILTER_EXP,
            [filter.fk_column_id],
            key
          )
        );
      }
      await Promise.all(p);
    }
    return new Filter(value);
  }

  static async update(id, filter: Partial<Filter>, ncMeta = Noco.ncMeta) {
    const updateObj = {
      fk_column_id: filter.fk_column_id,
      comparison_op: filter.comparison_op,
      value: filter.value,
      fk_parent_id: filter.fk_parent_id,

      is_group: filter.is_group,
      logical_op: filter.logical_op
    };
    // get existing cache
    const key = `${CacheScope.FILTER_EXP}:${id}`;
    let o = await NocoCache.get(key, CacheGetType.TYPE_OBJECT);
    // update alias
    if (o) {
      o = { ...o, ...updateObj };
      // set cache
      await NocoCache.set(key, o);
    }
    // set meta
    await ncMeta.metaUpdate(null, null, MetaTable.FILTER_EXP, updateObj, id);
  }

  static async delete(id: string, ncMeta = Noco.ncMeta) {
    const filter = await this.get(id);

    const deleteRecursively = async (filter: Filter) => {
      if (!filter) return;
      for (const f of (await filter?.getChildren()) || [])
        await deleteRecursively(f);
      await ncMeta.metaDelete(null, null, MetaTable.FILTER_EXP, filter.id);
      await NocoCache.deepDel(
        CacheScope.FILTER_EXP,
        `${CacheScope.FILTER_EXP}:${filter.id}`,
        CacheDelDirection.CHILD_TO_PARENT
      );
    };
    await deleteRecursively(filter);
  }

  public getColumn(): Promise<Column> {
    if (!this.fk_column_id) return null;
    return Column.get({
      colId: this.fk_column_id
    });
  }

  public async getGroup(ncMeta = Noco.ncMeta): Promise<Filter> {
    if (!this.fk_parent_id) return null;
    let filterObj = await NocoCache.get(
      `${CacheScope.FILTER_EXP}:${this.fk_parent_id}`,
      2
    );
    if (!filterObj) {
      filterObj = await ncMeta.metaGet2(null, null, MetaTable.FILTER_EXP, {
        id: this.fk_parent_id
      });
      await NocoCache.set(
        `${CacheScope.FILTER_EXP}:${this.fk_parent_id}`,
        filterObj
      );
    }
    return filterObj && new Filter(filterObj);
  }

  public async getChildren(ncMeta = Noco.ncMeta): Promise<Filter[]> {
    if (this.children) return this.children;
    if (!this.is_group) return null;
    let childFilters = await NocoCache.getList(CacheScope.FILTER_EXP, [
      this.id
    ]);
    if (!childFilters.length) {
      childFilters = await ncMeta.metaList2(null, null, MetaTable.FILTER_EXP, {
        condition: {
          fk_parent_id: this.id
        },
        orderBy: {
          order: 'asc'
        }
      });
      await NocoCache.setList(CacheScope.FILTER_EXP, [this.id], childFilters);
    }
    return childFilters && childFilters.map(f => new Filter(f));
  }

  // public static async getFilter({
  //   viewId
  // }: {
  //   viewId: string;
  // }): Promise<Filter> {
  //   if (!viewId) return null;
  //
  //   const filterObj = await ncMeta.metaGet2(
  //     null,
  //     null,
  //     MetaTable.FILTER_EXP,
  //     { fk_view_id: viewId, fk_parent_id: null }
  //   );
  //   return filterObj && new Filter(filterObj);
  // }

  public static async getFilterObject(
    {
      viewId,
      hookId
    }: {
      viewId?: string;
      hookId?: string;
    },
    ncMeta = Noco.ncMeta
  ): Promise<FilterType> {
    let filters = await NocoCache.getList(CacheScope.FILTER_EXP, [
      viewId || hookId
    ]);
    if (!filters.length) {
      filters = await ncMeta.metaList2(null, null, MetaTable.FILTER_EXP, {
        condition: viewId ? { fk_view_id: viewId } : { fk_hook_id: hookId },
        orderBy: {
          order: 'asc'
        }
      });

      await NocoCache.setList(
        CacheScope.FILTER_EXP,
        [viewId || hookId],
        filters
      );
    }

    const result: FilterType = {
      is_group: true,
      children: [],
      logical_op: 'AND'
    };

    const grouped = {};
    const idFilterMapping = {};

    for (const filter of filters) {
      if (!filter._fk_parent_id) {
        result.children.push(filter);
        idFilterMapping[result.id] = result;
      } else {
        grouped[filter._fk_parent_id] = grouped[filter._fk_parent_id] || [];
        grouped[filter._fk_parent_id].push(filter);
        idFilterMapping[filter.id] = filter;
        filter.column = await new Filter(filter).getColumn();
        if (filter.column?.uidt === UITypes.LinkToAnotherRecord) {
        }
      }
    }

    for (const [id, children] of Object.entries(grouped)) {
      if (idFilterMapping?.[id]) idFilterMapping[id].children = children;
    }

    // if (!result) {
    //   return (await Filter.insert({
    //     fk_view_id: viewId,
    //     is_group: true,
    //     logical_op: 'AND'
    //   })) as any;
    // }
    return result;
  }

  static async deleteAll(viewId: string, ncMeta = Noco.ncMeta) {
    const filter = await this.getFilterObject({ viewId }, ncMeta);

    const deleteRecursively = async filter => {
      if (!filter) return;
      for (const f of filter?.children || []) await deleteRecursively(f);
      if (filter.id) {
        await ncMeta.metaDelete(null, null, MetaTable.FILTER_EXP, filter.id);
        await NocoCache.deepDel(
          CacheScope.FILTER_EXP,
          `${CacheScope.FILTER_EXP}:${filter.id}`,
          CacheDelDirection.CHILD_TO_PARENT
        );
      }
    };
    await deleteRecursively(filter);
  }
  static async deleteAllByHook(hookId: string, ncMeta = Noco.ncMeta) {
    const filter = await this.getFilterObject({ hookId }, ncMeta);

    const deleteRecursively = async filter => {
      if (!filter) return;
      for (const f of filter?.children || []) await deleteRecursively(f);
      if (filter.id) {
        await ncMeta.metaDelete(null, null, MetaTable.FILTER_EXP, filter.id);
        await NocoCache.deepDel(
          CacheScope.FILTER_EXP,
          `${CacheScope.FILTER_EXP}:${filter.id}`,
          CacheDelDirection.CHILD_TO_PARENT
        );
      }
    };
    await deleteRecursively(filter);
  }

  public static async get(id: string, ncMeta = Noco.ncMeta) {
    let filterObj =
      id &&
      (await NocoCache.get(
        `${CacheScope.FILTER_EXP}:${id}`,
        CacheGetType.TYPE_OBJECT
      ));
    if (!filterObj) {
      filterObj = await ncMeta.metaGet2(null, null, MetaTable.FILTER_EXP, {
        id
      });
      await NocoCache.set(`${CacheScope.FILTER_EXP}:${id}`, filterObj);
    }
    return filterObj && new Filter(filterObj);
  }

  static async rootFilterList(
    { viewId }: { viewId: any },
    ncMeta = Noco.ncMeta
  ) {
    let filterObjs = await NocoCache.getList(CacheScope.FILTER_EXP, [viewId]);
    if (!filterObjs.length) {
      filterObjs = await ncMeta.metaList2(null, null, MetaTable.FILTER_EXP, {
        condition: { fk_view_id: viewId },
        orderBy: {
          order: 'asc'
        }
      });
      await NocoCache.setList(CacheScope.FILTER_EXP, [viewId], filterObjs);
    }
    return filterObjs?.map(f => new Filter(f));
  }

  static async rootFilterListByHook(
    { hookId }: { hookId: any },
    ncMeta = Noco.ncMeta
  ) {
    let filterObjs = await NocoCache.getList(CacheScope.FILTER_EXP, [hookId]);
    if (!filterObjs.length) {
      filterObjs = await ncMeta.metaList2(null, null, MetaTable.FILTER_EXP, {
        condition: { fk_hook_id: hookId },
        orderBy: {
          order: 'asc'
        }
      });
      await NocoCache.setList(CacheScope.FILTER_EXP, [hookId], filterObjs);
    }
    return filterObjs?.map(f => new Filter(f));
  }

  static async parentFilterList(
    {
      viewId,
      parentId
    }: {
      viewId: any;
      parentId: any;
    },
    ncMeta = Noco.ncMeta
  ) {
    let filterObjs = await NocoCache.getList(CacheScope.FILTER_EXP, [
      viewId,
      parentId
    ]);
    if (!filterObjs.length) {
      filterObjs = await ncMeta.metaList2(null, null, MetaTable.FILTER_EXP, {
        condition: {
          fk_parent_id: parentId,
          fk_view_id: viewId
        },
        orderBy: {
          order: 'asc'
        }
      });
      await NocoCache.setList(
        CacheScope.FILTER_EXP,
        [viewId, parentId],
        filterObjs
      );
    }
    return filterObjs?.map(f => new Filter(f));
  }
  static async parentFilterListByHook(
    {
      hookId,
      parentId
    }: {
      hookId: any;
      parentId: any;
    },
    ncMeta = Noco.ncMeta
  ) {
    let filterObjs = await NocoCache.getList(CacheScope.FILTER_EXP, [
      hookId,
      parentId
    ]);
    if (!filterObjs.length) {
      filterObjs = await ncMeta.metaList2(null, null, MetaTable.FILTER_EXP, {
        condition: {
          fk_parent_id: parentId,
          fk_hook_id: hookId
        },
        orderBy: {
          order: 'asc'
        }
      });
      await NocoCache.setList(
        CacheScope.FILTER_EXP,
        [hookId, parentId],
        filterObjs
      );
    }
    return filterObjs?.map(f => new Filter(f));
  }
}