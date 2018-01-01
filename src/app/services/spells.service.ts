import { Injectable } from '@angular/core';
import { PersistanceService } from './persistance.service';
import { SpellClass } from '../model/spell-class.enum';
import { SpellMetaData } from '../model/spell-meta-data';
import { Spell } from '../model/spell';

@Injectable()
export class SpellsService {
  spells:Spell[];
  spellClass:SpellClass;

  constructor(private persistance:PersistanceService) { 
    this.spells = [];
    this.spellClass = SpellClass.sorcererWizard;
  }

  public init() {
    this.populateSpells();
  }
  
  private async populateSpells() {
    const spellsReponse = await this.persistance.getSpellsByClass(this.spellClass);    
    this.spells.push(...spellsReponse);
    this.spells.map(spell => spell.metaData = new SpellMetaData());
  }
  

}
