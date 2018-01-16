import { SpellMetaData } from './../../model/spell-meta-data';
import { SpellMetaDatasActionTypes, SpellMetaDatasActions } from './../spell-meta-datas/spell-meta-datas.actions';
import { SpellActions, SpellActionTypes } from './spells.actions';
import { SpellClass } from './../../model/spell-class.enum';
import { Spell } from '../../model/spell';
import { EntityState, EntityAdapter } from '@ngrx/entity';
import { createEntityAdapter } from '@ngrx/entity/src/create_adapter';

export interface State extends EntityState<Spell> {
  spellClass: SpellClass;
}

export const adapter:EntityAdapter<Spell> = createEntityAdapter<Spell>({
  selectId: spell => spell.name,
  sortComparer: false
});
export const initialState: State = adapter.getInitialState({
  spellClass: SpellClass.sorcererWizard
});

function spellMetasDataToSpellsUpdate(spellMetaDatas: { [spell: string]: SpellMetaData }) {
  const result:{ id:string, changes: Partial<Spell>}[] = [];
  for (let key in spellMetaDatas){
    result.push({
      id: key,
      changes: {metaData: spellMetaDatas[key]}
    });
  }
  return result;
}

export function SpellsReducer( state = initialState, action:SpellActions | SpellMetaDatasActions):State {
  switch(action.type){
    case SpellActionTypes.SET_SPELLS:       
      return adapter.addAll(action.payload, state);    
    case SpellActionTypes.UPDATE_SPELL_CLASS:
      return { ...state, spellClass: action.payload };
    case SpellMetaDatasActionTypes.UPDATE_SPELL_META_DATA:
      return adapter.updateOne({ 
          id: action.payload.spell, 
          changes: { metaData: action.payload.metaData }
      }, state);
    case SpellMetaDatasActionTypes.SET_SPELL_META_DATAS:
      return adapter.updateMany(
        spellMetasDataToSpellsUpdate(action.payload), state);
    default:
      return state;
  }
}