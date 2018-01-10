import { SpellMetaData } from './../../model/spell-meta-data';
import { Action } from '@ngrx/store';


export const SET_SPELL_META_DATAS = 'SET_SPELL_METADAT_AS';
export const UPDATE_SPELL_META_DATA = 'UPDATE_SPELL_META_DATA';
export const FETCH_SPELL_META_DATAS = 'FETCH_SPELL_META_DATAS';
export const STORE_SPELL_META_DATAS = 'STORE_SPELL_META_DATAS';

export class SetSpellMetaDatas implements Action {
  readonly type = SET_SPELL_META_DATAS;

  constructor(public payload:{ [spell: string]: SpellMetaData }) {}
}

export class UpdateSpellMetaData implements Action {
  readonly type = UPDATE_SPELL_META_DATA;

  constructor(public payload:{ spell:string, metaData: SpellMetaData }) {}
}

export class FetchSpellMetaDatas implements Action {
  readonly type = FETCH_SPELL_META_DATAS; 
}

export class StoreSpellMetaDatas implements Action {
  readonly type = STORE_SPELL_META_DATAS; 
}

export type SpellMetaDatasActions = SetSpellMetaDatas | UpdateSpellMetaData | FetchSpellMetaDatas | StoreSpellMetaDatas;