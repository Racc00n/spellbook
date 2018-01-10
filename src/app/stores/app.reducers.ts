import {ActionReducerMap } from '@ngrx/store';

import * as fromSpellLevels from './spell-levels/spell-levels.reducers';
import * as fromSpellMetaDatas from './spell-meta-datas/spell-meta-datas.reducers';

export interface AppState {
  spellLevels: fromSpellLevels.State,
  spellMetaDatas: fromSpellMetaDatas.State
}

export const reducers: ActionReducerMap<AppState> = {
  spellLevels: fromSpellLevels.SpellLevelReducer,
  spellMetaDatas: fromSpellMetaDatas.SpellMetaDatasReducer
}