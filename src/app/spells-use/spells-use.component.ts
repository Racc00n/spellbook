import { ModelService } from './../services/model.service';
import { Component, OnInit } from '@angular/core';
import { Spell } from '../model/spell';
import { SpellLevel } from '../model/spell-level';

@Component({
  selector: 'app-spells-use',
  templateUrl: './spells-use.component.html',
  styleUrls: ['./spells-use.component.scss']
})
export class SpellsUseComponent implements OnInit {
  spells: Spell[];
  spellLevels: SpellLevel[];

  constructor(private modelService: ModelService) { }

  ngOnInit() {
    this.spellLevels = this.modelService.spellLevels;
    this.spells = this.modelService.spells;
  }

}
