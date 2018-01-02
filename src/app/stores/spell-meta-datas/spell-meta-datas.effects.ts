import { SpellsService } from './../../services/spells.service';
import { FETCH_SPELL_META_DATAS, FetchSpellMetaDatas, SET_SPELL_META_DATAS, STORE_SPELL_META_DATAS } from './spell-meta-datas.actions';
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
              private persistance: PersistanceService,
              private spellsService: SpellsService) { }

  @Effect()
  spellMetaDatasFetch = this.actions
    .ofType(FETCH_SPELL_META_DATAS)
    .switchMap((action: FetchSpellMetaDatas) => {
      return Observable.fromPromise(
        this.persistance.loadSpellsMetaDataByClass(
          this.spellsService.spellClass
        )
      );
    }).map((spellMetaDatas) => {
      return {
        type: SET_SPELL_META_DATAS,
        payload: spellMetaDatas
      }
    });

  @Effect({ dispatch: false })
  spellMetaDatasStore = this.actions
    .ofType(STORE_SPELL_META_DATAS)
    .withLatestFrom(this.store.select('spellMetaDatas'))
    .switchMap(([action, state]) => {
      return Observable.fromPromise(
        this.persistance.saveSpellsMetaDataByClass(
          state.spellMetaDatas,
          this.spellsService.spellClass
        )
      );
    });
}