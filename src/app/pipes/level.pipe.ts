import { SpellClass } from './../model/spell-class.enum';
import { Pipe, PipeTransform } from '@angular/core';
import { Spell } from '../model/spell';


@Pipe({
  name: 'level'
})
export class LevelPipe implements PipeTransform {
  constructor() {

  }
  transform(spells: Spell[], level: string, spellClass: SpellClass): Spell[] {
    if (!level || level.length === 0) {
      return [];
    }
    return spells.filter(spell => spell.level.includes(spellClass + ' ' + level));
  }
}
