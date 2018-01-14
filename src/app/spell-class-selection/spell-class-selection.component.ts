import { SpellsService } from './../services/spells.service';
import { SpellClass } from './../model/spell-class.enum';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spell-class-selection',
  templateUrl: './spell-class-selection.component.html',
  styleUrls: ['./spell-class-selection.component.scss']
})
export class SpellClassSelectionComponent implements OnInit {
  spellClasses: {spellClass: SpellClass ,label:string}[] ;
  selectedSpellClass: SpellClass;
  constructor(private spellsService: SpellsService) {
    this.spellClasses = [];
   }

  ngOnInit() {
    this.selectedSpellClass = this.spellsService.spellClass;
    this.spellClasses = Object.keys(SpellClass).map(
      key => ({ spellClass: <SpellClass>SpellClass[key as any], label: key})
    );
  }

  onSelectedSpellLevelChange(newValue:SpellClass) {
    // this.selectedSpellClass = newValue;
    this.spellsService.spellClass = newValue;
  }

}
