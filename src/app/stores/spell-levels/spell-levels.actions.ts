import { Action } from '@ngrx/store';
import { SpellLevel } from '../../model/spell-level';

export const SET_SPELL_LEVELS = 'SET_SPELL_LEVELS';
export const UPDATE_SPELL_LEVEL = 'UPDATE_SPELL_LEVEL';
export const UPDATE_SELECTED_SPELL_LEVEL_LABEL = 'UPDATE_SELECTED_SPELL_LEVEL_LABEL';
export const FETCH_SPELL_LEVELS = 'FETCH_SPELL_LEVELS';
export const STORE_SPELL_LEVELS = 'STORE_SPELL_LEVELS';


export class SetSpellLevels implements Action {
  readonly type = SET_SPELL_LEVELS;

  constructor(public payload: SpellLevel[]) { }
}

export class UpdateSpellLevel implements Action {
  readonly type = UPDATE_SPELL_LEVEL;

  constructor(public payload: { index: number, numOfSpells: number }) { }
}

export class UpdateSelectedSpellLevelLabel implements Action {
  readonly type = UPDATE_SELECTED_SPELL_LEVEL_LABEL;
  constructor(public payload: string) { }
}

export class FetchSpellLevels implements Action {
  readonly type = FETCH_SPELL_LEVELS;
}

export class StoreSpellLevels implements Action {
  readonly type = STORE_SPELL_LEVELS;
}

export type SpellLevelsActions =
  SetSpellLevels |
  UpdateSpellLevel |
  FetchSpellLevels |
  StoreSpellLevels |
  UpdateSelectedSpellLevelLabel;