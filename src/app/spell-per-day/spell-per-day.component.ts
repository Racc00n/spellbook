import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { AppState } from './../stores/app.reducers';
import { PersistanceService } from './../services/persistance.service';
import { SpellLevel } from './../model/spell-level';
import * as fromSpellLevels from './../stores/spell-levels/spell-levels.reducers';
import { StoreSpellLevels, UpdateSpellLevel, FetchSpellLevels } from '../stores/spell-levels/spell-levels.actions';



@Component({
  selector: 'app-spell-per-day',
  templateUrl: './spell-per-day.component.html',
  styleUrls: ['./spell-per-day.component.scss']
})
export class SpellPerDayComponent implements OnInit, OnDestroy {
  spellLevelsState: Observable<fromSpellLevels.State>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.spellLevelsState = this.store.select('spellLevels');
  }

  ngOnDestroy() {
    this.store.dispatch(new StoreSpellLevels());
  }

  onSpellLevelChange(index: number, level: SpellLevel, numOfSpells: number) {
    this.store.dispatch(new UpdateSpellLevel({
      index,
      numOfSpells
    }));
  }
}
