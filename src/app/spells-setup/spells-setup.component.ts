import { LevelPipe } from './../pipes/level.pipe';
import { UpdateSelectedSpellLevelLabel } from './../stores/spell-levels/spell-levels.actions';
import { Observable } from 'rxjs/Observable';
import { UpdateSpellMetaData, StoreSpellMetaDatas } from './../stores/spell-meta-datas/spell-meta-datas.actions';
import { SpellLevel } from './../model/spell-level';
import { Spell } from './../model/spell';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { trigger, state, transition, animate, style } from '@angular/animations';
import { AppState } from '../stores/app.reducers';
import { Store } from '@ngrx/store';
import { SpellMetaData } from '../model/spell-meta-data';
import * as fromSpellLevels from './../stores/spell-levels/spell-levels.reducers';
import * as fromSpells from './../stores/spells/spells.reducers';

import { Subscription } from 'rxjs/Subscription';
import { SpellClass } from '../model/spell-class.enum';
import 'rxjs/add/operator/take';


@Component({
  selector: 'app-spells-setup',
  templateUrl: './spells-setup.component.html',
  styleUrls: ['./spells-setup.component.scss'],
  animations: [
    trigger(
      'alert',
      [
        transition(
          ':enter', [
            style({ transform: 'translateY(100%)' }),
            animate(250, style({ transform: 'translateY(0)' }))
          ]),
        transition(
          ':leave', [
            style({ transform: 'translateY(0)', }),
            animate(250, style({ transform: 'translateY(100%)' }))
          ])
      ]
    )
  ]
})
export class SpellsSetupComponent implements OnInit, OnDestroy {
  spellLevelSubscription: Subscription;
  spellLevelsState: Observable<fromSpellLevels.State>;
  spellsState: Observable<fromSpells.State>;
  selectAllSpells = fromSpells.selectAll;
  totalPreparedSpells: number;
  totalAllowedSpells: number;
  replenishClicked: boolean;

  constructor(private store: Store<AppState>) {

  }

  ngOnInit() {
    this.spellLevelsState = this.store.select('spellLevels');
    this.spellsState = this.store.select('spells');

    this.totalPreparedSpells = 0;
    this.totalAllowedSpells = 0;
    this.spellLevelSubscription = this.spellLevelsState.subscribe(state => {
      for (const spellLevel of state.spellLevels) {
        if (spellLevel.label === state.selectedSpellLevelLabel) {
          this.totalAllowedSpells = spellLevel.numOfSpells;
          break;
        }
      }
      let spells: Spell[];
      let spellClass: SpellClass;
      this.spellsState
        .take(1)
        .subscribe(lastSpellsState => {
          spellClass = lastSpellsState.spellClass;
          spells = fromSpells.selectAll(lastSpellsState);
        });


      this.totalPreparedSpells = 0;
      new LevelPipe()
        .transform(spells, state.selectedSpellLevelLabel, spellClass)
        .map(spell => this.totalPreparedSpells += spell.metaData.preparedUses);
    });
  }

  ngOnDestroy() {
    this.store.dispatch(new StoreSpellMetaDatas());
    this.spellLevelSubscription.unsubscribe();
  }

  onSelectedSpellLevelChange(newLevelLabel: string) {
    this.store.dispatch(new UpdateSelectedSpellLevelLabel(newLevelLabel));
  }

  onPreparedUsesChanged(spell: Spell, newValue: number) {
    this.totalPreparedSpells += newValue - spell.metaData.preparedUses;
    this.store.dispatch(new UpdateSpellMetaData({
      spell: spell.name,
      metaData: { ...spell.metaData, preparedUses: newValue, remainingUses: newValue }
    }));
  }

  onReplenishClicked() {
    let spells: Spell[];
    this.spellsState
      .take(1)
      .subscribe(lastSpellsState => {
        spells = fromSpells.selectAll(lastSpellsState);
      });

    for (const spell of spells) {
      if (spell.metaData.known && spell.metaData.preparedUses > 0) {
        this.store.dispatch(new UpdateSpellMetaData({
          spell: spell.name,
          metaData: {
            ...spell.metaData,
            remainingUses: spell.metaData.preparedUses
          }
        }));
      }
    }
    this.replenishClicked = true;
    setTimeout(() => {
      this.replenishClicked = false;
    }, 1500);
  }

  onSpellKnownChange(spell: Spell) {
    const metaData: SpellMetaData = { ...spell.metaData, known: !spell.metaData.known };
    this.store.dispatch(new UpdateSpellMetaData({ spell: spell.name, metaData }));
  }
  onSpellInfoClicked(spell: Spell) {
    alert(spell.description);
  }
}
