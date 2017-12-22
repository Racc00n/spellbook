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
    for (let spellLevel of this.modelService.spellLevels) {
      if (spellLevel.label === this.selectedSpellLevel) {
        this.totalAllowedSpells = spellLevel.numOfSpells;
        break;
      }
    }
  }
}
