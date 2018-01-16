import {ActionReducerMap } from '@ngrx/store';

import * as fromSpellLevels from './spell-levels/spell-levels.reducers';
import * as fromSpellMetaDatas from './spell-meta-datas/spell-meta-datas.reducers';
import * as fromSpells from './spells/spells.reducers';

export interface AppState {
  spellLevels: fromSpellLevels.State,
  spellMetaDatas: fromSpellMetaDatas.State,
  spells: fromSpells.State
}

export const reducers: ActionReducerMap<AppState> = {
  spellLevels: fromSpellLevels.SpellLevelReducer,
  spellMetaDatas: fromSpellMetaDatas.SpellMetaDatasReducer,
  spells: fromSpells.SpellsReducer
}