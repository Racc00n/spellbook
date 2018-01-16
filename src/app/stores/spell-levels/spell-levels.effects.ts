import { AppState } from './../app.reducers';
import { SpellLevel } from './../../model/spell-level';
import { Observable } from 'rxjs/Observable';
import { PersistanceService } from './../../services/persistance.service';
import { FetchSpellLevels, StoreSpellLevels, SpellLevelsActionTypes, SetSpellLevels } from './spell-levels.actions';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/observable/fromPromise';
import { Store } from '@ngrx/store';

@Injectable()
export class SpellLevelsEffects {

  constructor(private actions: Actions,
              private store: Store<AppState>,
              private persistance: PersistanceService) { }

  @Effect()
  spellLevelsFetch = this.actions
    .ofType(SpellLevelsActionTypes.FETCH_SPELL_LEVELS)
    .withLatestFrom(this.store.select('spells'))
    .switchMap(([action, spellsState]) => {
      return Observable.fromPromise(this.persistance.fetchSpellLevelsByClass(spellsState.spellClass));
    })
    .map(spellLevels => new SetSpellLevels(spellLevels));

  @Effect({ dispatch: false })
  spellLevelStore = this.actions
    .ofType(SpellLevelsActionTypes.STORE_SPELL_LEVELS)
    .withLatestFrom(this.store.select('spellLevels'))
    .withLatestFrom(this.store.select('spells'))
    .switchMap(([[action, spellLevelsState],spellsState]) => {
      return Observable.fromPromise(this.persistance.storeSpellLevelsByClass(spellLevelsState.spellLevels, spellsState.spellClass));
    });
}