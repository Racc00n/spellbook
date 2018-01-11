import { AppState } from './../stores/app.reducers';
import { Observable } from 'rxjs/Observable';
import * as fromSpellMetaDatas from './../stores/spell-meta-datas/spell-meta-datas.reducers';
import { Spell } from '../model/spell';
import { SpellClass } from '../model/spell-class.enum';
import { Store } from '@ngrx/store';

export class SpellsServiceMock {
  spells: Spell[];
  spellClass: SpellClass;

  constructor() { }

  public init() {
  }

  private populateSpells() {
  }

}
