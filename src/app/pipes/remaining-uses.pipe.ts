import { Pipe, PipeTransform } from '@angular/core';
import { Spell } from '../model/spell';

@Pipe({
  name: 'remainingUses',
  pure: false
})
export class RemainingUsesPipe implements PipeTransform {

  transform(value: Spell[], args?: any): Spell[] {
    return value.filter(spell => spell.metaData.remainingUses > 0);
  }

}
