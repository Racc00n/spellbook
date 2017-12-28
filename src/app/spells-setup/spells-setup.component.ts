import { SpellLevel } from './../model/spell-level';
import { Spell } from './../model/spell';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ModelService } from '../services/model.service';
import { trigger, state, transition, animate, style} from '@angular/animations';

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
  spells: Spell[];
  spellLevels: SpellLevel[];
  selectedSpellLevel: string;
  totalPreparedSpells: number;
  totalAllowedSpells: number;
  replenishClicked:boolean;

  constructor(private modelService: ModelService) { }

  ngOnInit() {
    this.spells = this.modelService.spells;
    this.spellLevels = this.modelService.spellLevels;
    this.selectedSpellLevel = this.modelService.spellLevels.length > 0 ? this.modelService.spellLevels[0].label : '';
    this.totalPreparedSpells = 0;
    this.totalAllowedSpells = 0;
  }

  ngOnDestroy() {
    this.modelService.saveSpellsMetaData();
  }

  onSelectedSpellLevelChange(newLevel) {
    this.selectedSpellLevel = newLevel;
    this.totalPreparedSpells = 0;
    for (const spell of this.modelService.getSpellsByLevel(newLevel)) {
      this.totalPreparedSpells += spell.metaData.preparedUses;
    }
    for (const spellLevel of this.modelService.spellLevels) {
      if (spellLevel.label === this.selectedSpellLevel) {
        this.totalAllowedSpells = spellLevel.numOfSpells;
        break;
      }
    }
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
    spell.metaData.preparedUses = newValue;
    spell.metaData.remainingUses = newValue;
    this.totalPreparedSpells += newValue - oldValue;
  }

  onReplenishClicked() {
    for (const spell of this.spells) {
      spell.metaData.remainingUses = spell.metaData.preparedUses;
    }

    this.replenishClicked = true;
    setTimeout(()=>{
      this.replenishClicked = false;
    }, 2000);
  }

}
