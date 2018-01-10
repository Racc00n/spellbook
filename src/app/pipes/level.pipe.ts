import { SpellsService } from './../services/spells.service';
import { Pipe, PipeTransform } from '@angular/core';
import { Spell } from '../model/spell';


@Pipe({
  name: 'level'
})
export class LevelPipe implements PipeTransform {
  constructor(private spellsService: SpellsService) {

  }
  transform(spells: Spell[], level: string): Spell[] {
    if (!level || level.length === 0){
      return [];
    }
    return spells.filter(spell =>
      spell.level.includes(this.spellsService.spellClass + ' ' + level)
    );    
  }

}
