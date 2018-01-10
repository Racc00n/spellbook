import { SpellLevel } from '../../model/spell-level';
import { defaultSpellLevels } from '../../data/default-spell-levels';
import { SpellLevelsActions, SET_SPELL_LEVELS, UPDATE_SPELL_LEVEL, UPDATE_SELECTED_SPELL_LEVEL_LABEL } from './spell-levels.actions';


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
    case SET_SPELL_LEVELS:
      return {
        ...state,
        spellLevels: action.payload
      };
    case UPDATE_SPELL_LEVEL: {
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
    case UPDATE_SELECTED_SPELL_LEVEL_LABEL:
      return {
        ...state,
        selectedSpellLevelLabel : action.payload
      }
    default:
      return state;
  }
}

// function findSpellLevelIndex(searchItem:SpellLevel, array:SpellLevel[]):number {
//     for(let i=0; i< array.length; i++){
//         const currentSpellLevel = array[i];
//         if (currentSpellLevel.label === searchItem.label) {
//             return i;
//         }
//     }
//     return -1;
// }