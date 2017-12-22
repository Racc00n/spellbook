import { Pipe, PipeTransform } from '@angular/core';
import { Spell } from '../model/spell';
import { ModelService } from '../services/model.service';

@Pipe({
  name: 'level'
})
export class LevelPipe implements PipeTransform {
  constructor(private modelService: ModelService) {

  }
  transform(spells: Spell[], level: string): Spell[] {
    if (!level || level.length === 0){
      return [];
    }
    return this.modelService.getSpellsByLevel(level);
  }

}
