import { AppState } from './../app.reducers';
import { SpellLevel } from './../../model/spell-level';
import { Observable } from 'rxjs/Observable';
import { PersistanceService } from './../../services/persistance.service';
import { FETCH_SPELL_LEVELS, FetchSpellLevels, SET_SPELL_LEVELS, STORE_SPELL_LEVELS, StoreSpellLevels } from './spell-levels.actions';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/observable/fromPromise';
import { Store } from '@ngrx/store';

@Injectable()
export class SpellLevelsEffects {

  constructor(private actions$: Actions,
              private store: Store<AppState>,
              private persistance: PersistanceService) { }

  @Effect()
  spellLevelsFetch = this.actions$
    .ofType(FETCH_SPELL_LEVELS)
    .switchMap((action: FetchSpellLevels) => {
      return Observable.fromPromise(this.persistance.loadSpellLevels())
    }).map((spellLevels) => {
      return {
        type: SET_SPELL_LEVELS,
        payload: spellLevels
      }
    });

  @Effect({ dispatch: false })
  spellLevelStore = this.actions$
    .ofType(STORE_SPELL_LEVELS)
    .withLatestFrom(this.store.select('spellLevels'))
    .switchMap(([action, state]) => {
      return Observable.fromPromise(this.persistance.saveSpellLevels(state.spellLevels));
    });
}