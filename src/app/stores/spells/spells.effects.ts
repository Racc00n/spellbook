import { FetchSpellMetaDatas } from './../spell-meta-datas/spell-meta-datas.actions';
import { FetchSpellLevels } from './../spell-levels/spell-levels.actions';
import { SpellMetaData } from './../../model/spell-meta-data';
import { Observable } from 'rxjs/Observable';
import { SpellActionTypes, FetchSpells, UpdateSpellClass, SetSpells } from './spells.actions';
import { PersistanceService } from './../../services/persistance.service';
import { AppState } from './../app.reducers';
import { Actions, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class SpellsEffects {
  
  constructor(private actions: Actions,
              private store: Store<AppState>,
              private persistance: PersistanceService) {}

  @Effect()
  spellsFetch = this.actions
    .ofType(SpellActionTypes.FETCH_SPELLS)
    .withLatestFrom(this.store.select('spells'))
    .switchMap(([action, state]) => {
      return Observable.fromPromise(
        this.persistance.fetchSpellsByClass(state.spellClass))
    })
    .withLatestFrom(this.store.select('spellMetaDatas'))
    .map( ([spells, metaDataState]) => {
      const updateSpells = spells.map(spell => {
        spell.metaData = metaDataState.spellMetaDatas[spell.name] || new SpellMetaData(); //need to see what to do about meta data
        return spell;
      });
      return new SetSpells(updateSpells);
    });

  
  @Effect()
  spellClassFetch = this.actions
    .ofType(SpellActionTypes.FETCH_SPELL_CLASS)
    .switchMap(action => {
      return Observable.fromPromise(
        this.persistance.fetchSpellClass());
    })
    .mergeMap(spellClass =>{ 
      return [
        new UpdateSpellClass(spellClass),
        new FetchSpells(),
        new FetchSpellLevels(),
        new FetchSpellMetaDatas()
      ]
    })
    // .map(spellClass => {
    //   return new UpdateSpellClass(spellClass);
    // });
  
  @Effect({dispatch: false})
  spellClassStore = this.actions
    .ofType(SpellActionTypes.STORE_SPELL_CLASS)
    .withLatestFrom(this.store.select('spells'))
    .switchMap(([action, state]) => {
      return Observable.fromPromise(
        this.persistance.storeSpellClass(state.spellClass));    
    });  
}