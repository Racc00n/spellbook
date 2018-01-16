import { SpellLevel } from '../../model/spell-level';
import { defaultSpellLevels } from '../../data/default-spell-levels';
import { SpellLevelsActions, SpellLevelsActionTypes } from './spell-levels.actions';

export interface State {
  spellLevels: SpellLevel[];
  selectedSpellLevelLabel: string;
}

const initialState: State = {
  spellLevels: defaultSpellLevels,
  selectedSpellLevelLabel: defaultSpellLevels[0].label
};

export function SpellLevelReducer(state = initialState, action: SpellLevelsActions): State {
  switch (action.type) {
    case SpellLevelsActionTypes.SET_SPELL_LEVELS:
      return {
        ...state,
        spellLevels: action.payload
      };
    case SpellLevelsActionTypes.UPDATE_SPELL_LEVEL: {
      const index = action.payload.index;
      const original = state.spellLevels[index];
      const updated = { ...original, numOfSpells: action.payload.numOfSpells };
      const spellLevels = [ ...state.spellLevels ];
      spellLevels[index] = updated;
      return {
        ...state,
        spellLevels: spellLevels
      };
    };
    case SpellLevelsActionTypes.UPDATE_SELECTED_SPELL_LEVEL_LABEL:
      return {
        ...state,
        selectedSpellLevelLabel : action.payload
      }
    default:
      return state;
  }
}