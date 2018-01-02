import { LevelPipe } from './../pipes/level.pipe';
import { UpdateSelectedSpellLevelLabel } from './../stores/spell-levels/spell-levels.actions';
import { Observable } from 'rxjs/Observable';
import { SpellsService } from './../services/spells.service';
import { UpdateSpellMetaData, StoreSpellMetaDatas } from './../stores/spell-meta-datas/spell-meta-datas.actions';
import { SpellLevel } from './../model/spell-level';
import { Spell } from './../model/spell';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { trigger, state, transition, animate, style } from '@angular/animations';
import { AppState } from '../stores/app.reducers';
import { Store } from '@ngrx/store';
import { SpellMetaData } from '../model/spell-meta-data';
import * as fromSpellLevels from './../stores/spell-levels/spell-levels.reducers';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-spells-setup',
  templateUrl: './spells-setup.component.html',
  styleUrls: ['./spells-setup.component.scss'],
  animations: [
    trigger('alert', [
      state('in', style({
        opacity: 0,
      })),
      transition('* => void', [
        animate(250, style({
          opacity: 0
        }))
      ]),
      transition('void => *', [
        animate(250, style({
          opacity: 1
        }))
      ])
    ]),
  ]
})
export class SpellsSetupComponent implements OnInit, OnDestroy {
  spellLevelSubscription: Subscription;
  spells: Spell[];
  spellLevelsState: Observable<fromSpellLevels.State>;    
  totalPreparedSpells: number;
  totalAllowedSpells: number;
  replenishClicked: boolean;

  constructor(private store: Store<AppState>,
    private spellService: SpellsService) { }

  ngOnInit() {
    this.spellLevelsState = this.store.select('spellLevels');
    this.spells = this.spellService.spells;
    this.totalPreparedSpells = 0;
    this.totalAllowedSpells = 0;
    this.spellLevelSubscription = this.spellLevelsState.subscribe(state => {
      for (const spellLevel of state.spellLevels) {
        if (spellLevel.label === state.selectedSpellLevelLabel) {
          this.totalAllowedSpells = spellLevel.numOfSpells;
          break;
        }
      }
      this.totalPreparedSpells = 0;
      new LevelPipe(this.spellService)
        .transform(this.spells,state.selectedSpellLevelLabel)      
        .map(spell=>this.totalPreparedSpells += spell.metaData.preparedUses);
    });
  }

  ngOnDestroy() {
    this.store.dispatch(new StoreSpellMetaDatas());
    this.spellLevelSubscription.unsubscribe();
  }

  onSelectedSpellLevelChange(newLevelLabel: string) {
    this.store.dispatch(new UpdateSelectedSpellLevelLabel(newLevelLabel));   
  }

  onPreparedUsesChanged(spell: Spell, event: any) {
    let newValue: number = +event.target.value;
    const oldValue: number = spell.metaData.preparedUses;
    if (isNaN(newValue)) {
      newValue = 0;
      event.target.value = newValue;
    } else if (this.totalPreparedSpells + newValue - oldValue > this.totalAllowedSpells) {
      newValue = oldValue;
      event.target.value = newValue;
    }
    this.store.dispatch(new UpdateSpellMetaData({
      spell: spell.name,
      metaData: { ...spell.metaData, preparedUses: newValue, remainingUses: newValue }
    }));

    this.totalPreparedSpells += newValue - oldValue;
  }

  onReplenishClicked() {
    for (const spell of this.spells) {
      if (spell.metaData.known && spell.metaData.preparedUses > 0) {
        this.store.dispatch(new UpdateSpellMetaData({
          spell: spell.name,
          metaData: { ...spell.metaData, remainingUses: spell.metaData.preparedUses }
        }));
      }
    }
    this.replenishClicked = true;
    setTimeout(() => {
      this.replenishClicked = false;
    }, 2000);
  }

  onSpellKnownChange(spell: Spell) {
    const metaData: SpellMetaData = { ...spell.metaData, known: !spell.metaData.known };
    this.store.dispatch(new UpdateSpellMetaData({ spell: spell.name, metaData }));
  }


}
