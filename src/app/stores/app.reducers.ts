import {ActionReducerMap } from '@ngrx/store';

import * as fromSpellLevels from './spell-levels/spell-levels.reducers';

export interface AppState {
  spellLevels: fromSpellLevels.State
}

export const reducers: ActionReducerMap<AppState> = {
  spellLevels: fromSpellLevels.SpellLevelReducer
}