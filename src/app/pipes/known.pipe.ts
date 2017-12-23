import { Spell } from './../model/spell';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'known'
})
export class KnownPipe implements PipeTransform {

  transform(value: Spell[], args?: any): Spell[] {
    return value.filter(spell => spell.metaData.known);
  }

}
