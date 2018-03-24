import { SpellMetaData } from './../../model/spell-meta-data';
import { Action } from '@ngrx/store';

export enum SpellMetaDatasActionTypes {
  SET_SPELL_META_DATAS = '[SpellMetaData] Set Spell MetaDatas',
  UPDATE_SPELL_META_DATA = '[SpellMetaData] Update Spell MetaDatas',
  FETCH_SPELL_META_DATAS = '[SpellMetaData] Fetch Spell MetaDatas',
  STORE_SPELL_META_DATAS = '[SpellMetaData] Store  Spell MetaDatas'
}


export class SetSpellMetaDatas implements Action {
  readonly type = SpellMetaDatasActionTypes.SET_SPELL_META_DATAS;

  constructor(public payload: { [spell: string]: SpellMetaData }) { }
}

export class UpdateSpellMetaData implements Action {
  readonly type = SpellMetaDatasActionTypes.UPDATE_SPELL_META_DATA;

  constructor(public payload: { spell: string, metaData: SpellMetaData }) { }
}

export class FetchSpellMetaDatas implements Action {
  readonly type = SpellMetaDatasActionTypes.FETCH_SPELL_META_DATAS;
}

export class StoreSpellMetaDatas implements Action {
  readonly type = SpellMetaDatasActionTypes.STORE_SPELL_META_DATAS;
}

export type SpellMetaDatasActions =
  SetSpellMetaDatas
  | UpdateSpellMetaData
  | FetchSpellMetaDatas
  | StoreSpellMetaDatas;
