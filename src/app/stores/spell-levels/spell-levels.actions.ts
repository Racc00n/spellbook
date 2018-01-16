import { Action } from '@ngrx/store';
import { SpellLevel } from '../../model/spell-level';

export enum SpellLevelsActionTypes {
  SET_SPELL_LEVELS = '[SpellLevel] Set Spell Levels',
  UPDATE_SPELL_LEVEL = '[SpellLevel] Update Spell Level',
  UPDATE_SELECTED_SPELL_LEVEL_LABEL = '[SpellLevel] Update Selected Spell Level Lablel',
  FETCH_SPELL_LEVELS = '[SpellLevel] Fetch Spell Levels',
  STORE_SPELL_LEVELS = '[SpellLevel] Store Spell Levels'
}

export class SetSpellLevels implements Action {
  readonly type = SpellLevelsActionTypes.SET_SPELL_LEVELS;

  constructor(public payload: SpellLevel[]) { }
}

export class UpdateSpellLevel implements Action {
  readonly type = SpellLevelsActionTypes.UPDATE_SPELL_LEVEL;

  constructor(public payload: { index: number, numOfSpells: number }) { }
}

export class UpdateSelectedSpellLevelLabel implements Action {
  readonly type = SpellLevelsActionTypes.UPDATE_SELECTED_SPELL_LEVEL_LABEL;
  constructor(public payload: string) { }
}

export class FetchSpellLevels implements Action {
  readonly type = SpellLevelsActionTypes.FETCH_SPELL_LEVELS;
}

export class StoreSpellLevels implements Action {
  readonly type = SpellLevelsActionTypes.STORE_SPELL_LEVELS;
}

export type SpellLevelsActions =
    SetSpellLevels 
  | UpdateSpellLevel 
  | FetchSpellLevels
  | StoreSpellLevels 
  | UpdateSelectedSpellLevelLabel;