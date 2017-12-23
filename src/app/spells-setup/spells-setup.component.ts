import { SpellLevel } from './../model/spell-level';
import { Spell } from './../model/spell';
import { Component, OnInit } from '@angular/core';
import { ModelService } from '../services/model.service';

@Component({
  selector: 'app-spells-setup',
  templateUrl: './spells-setup.component.html',
  styleUrls: ['./spells-setup.component.scss']
})
export class SpellsSetupComponent implements OnInit {
  spells: Spell[];
  spellLevels: SpellLevel[];
  selectedSpellLevel: string;
  totalPreparedSpells: number;
  totalAllowedSpells: number;
  constructor(private modelService: ModelService) { }

  ngOnInit() {
    this.spells = this.modelService.spells;
    this.spellLevels = this.modelService.spellLevels;
    this.selectedSpellLevel = '';
    this.totalPreparedSpells = 0;
    this.totalAllowedSpells = 0;
  }

  onSelectedSpellLevelChange(newLevel) {
    this.selectedSpellLevel = newLevel;
    this.totalPreparedSpells = 0;
    for (let spell of this.modelService.getSpellsByLevel(newLevel)) {
      this.totalPreparedSpells += spell.metaData.preparedUses;
    }
    for (let spellLevel of this.modelService.spellLevels) {
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

}
