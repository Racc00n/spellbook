import { AppState } from './../stores/app.reducers';
import { Pipe, PipeTransform } from '@angular/core';
import { Spell } from '../model/spell';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/take';

@Pipe({
  name: 'level'
})
export class LevelPipe implements PipeTransform {
  constructor(private store: Store<AppState>) {

  }
  transform(spells: Spell[], level: string): Spell[] {
    if (!level || level.length === 0){
      return [];
    }
    
    let result:Spell[];

    this.store.select('spells').take(1).subscribe(state => {      
      result =  spells.filter(spell =>      
        spell.level.includes(state.spellClass + ' ' + level)
      );    
    });
    return result;    
  }
}
