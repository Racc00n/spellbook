import { FetchSpellMetaDatas, SetSpellMetaDatas, SpellMetaDatasActionTypes } from './spell-meta-datas.actions';
import { PersistanceService } from './../../services/persistance.service';
import { AppState } from './../app.reducers';
import { Observable } from 'rxjs/Observable';
import { Actions, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/observable/fromPromise';

@Injectable()
export class SpellMetaDatasEffects {

  constructor(private actions: Actions,
              private store: Store<AppState>,
              private persistance: PersistanceService) { }

  @Effect()
  spellMetaDatasFetch = this.actions
    .ofType(SpellMetaDatasActionTypes.FETCH_SPELL_META_DATAS)
    .withLatestFrom(this.store.select('spells'))
    .switchMap(([action, state]) => {
      return Observable.fromPromise(
        this.persistance.fetchSpellsMetaDataByClass(
          state.spellClass
        )
      );
    })
    .map(spellMetaDatas =>
      new SetSpellMetaDatas(spellMetaDatas)
    );

  @Effect({ dispatch: false })
  spellMetaDatasStore = this.actions
    .ofType(SpellMetaDatasActionTypes.STORE_SPELL_META_DATAS)
    .withLatestFrom(this.store.select('spellMetaDatas'))
    .withLatestFrom(this.store.select('spells'))
    .switchMap(([[action, spellMetaDatasState], spellState]) => {
      return Observable.fromPromise(
        this.persistance.storeSpellsMetaDataByClass(
          spellMetaDatasState.spellMetaDatas,
          spellState.spellClass
        )
      );
    });
}