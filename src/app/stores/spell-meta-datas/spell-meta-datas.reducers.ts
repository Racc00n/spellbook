import { SpellMetaDatasActions, SpellMetaDatasActionTypes } from './spell-meta-datas.actions';
import { SpellMetaData } from './../../model/spell-meta-data';

export interface State {
  spellMetaDatas: {[spell:string] : SpellMetaData}
}

const initialState: State = { 
  spellMetaDatas: {} 
};

export function SpellMetaDatasReducer(state = initialState, action:SpellMetaDatasActions) {
  switch (action.type) {
    case SpellMetaDatasActionTypes.SET_SPELL_META_DATAS:
      return {
        ...state,
        spellMetaDatas: action.payload
      };
    case SpellMetaDatasActionTypes.UPDATE_SPELL_META_DATA:            
      return {
        ...state,
        spellMetaDatas: {
          ...state.spellMetaDatas,
          [action.payload.spell]: action.payload.metaData
        }
      };  
    default:
      return state;
  }
}