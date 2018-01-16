import { SpellClass } from './../../model/spell-class.enum';
import { Action } from '@ngrx/store';

import { Spell } from '../../model/spell';

export enum SpellActionTypes {
  SET_SPELLS = '[Spell] Set Spells', 
  UPDATE_SPELL_CLASS = '[Spell] Update Spell Class',
  FETCH_SPELLS = '[Spell] Fetch Spells',  
  FETCH_SPELL_CLASS = '[Spell] Fetch Spell Class',
  STORE_SPELL_CLASS = '[Spell] Store Spell Class',
}

export class SetSpells implements Action {
  readonly type = SpellActionTypes.SET_SPELLS;

  constructor(public payload: Spell[] ) {}
}

export class UpdateSpellClass implements Action {
  readonly type = SpellActionTypes.UPDATE_SPELL_CLASS;

  constructor(public payload:SpellClass) {}
}

export class FetchSpells implements Action {
 readonly type = SpellActionTypes.FETCH_SPELLS;
}

export class FetchSpellClass implements Action {
  readonly type = SpellActionTypes.FETCH_SPELL_CLASS;
 }
 
 export class StoreSpellClass implements Action {
   readonly type = SpellActionTypes.STORE_SPELL_CLASS;
 }

export type SpellActions =
    SetSpells  
  | UpdateSpellClass
  | FetchSpells 
  | FetchSpellClass
  | StoreSpellClass;