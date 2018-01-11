import { FetchSpellMetaDatas } from './../stores/spell-meta-datas/spell-meta-datas.actions';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { AppState } from './../stores/app.reducers';
import { PersistanceService } from './persistance.service';
import { SpellClass } from '../model/spell-class.enum';
import { SpellMetaData } from '../model/spell-meta-data';
import { Spell } from '../model/spell';
import * as fromSpellMetaDatas from './../stores/spell-meta-datas/spell-meta-datas.reducers';

@Injectable()
export class SpellsService {
  private subscription;
  private spellsIndex: { [name: string]: Spell }; // for performance purposes.
  private spellMetaDatasState: Observable<fromSpellMetaDatas.State>;
  spells: Spell[];
  spellClass: SpellClass;

  constructor(private store: Store<AppState>,
    private persistance: PersistanceService) {
    this.spells = [];
    this.spellsIndex = {};
    this.spellClass = SpellClass.sorcererWizard;
  }

  public init() {
    this.spellMetaDatasState = this.store.select('spellMetaDatas');
    this.populateSpells();
  }

  private async populateSpells() {
    this.spellsIndex = {};
    const spellsReponse = await this.persistance.getSpellsByClass(this.spellClass);
    this.spells.push(...spellsReponse);
    this.spells.map(spell => {
      spell.metaData = new SpellMetaData();
      this.spellsIndex[spell.name] = spell;
    });
    this.store.dispatch(new FetchSpellMetaDatas());
    this.subscription = this.subscription ||
      this.spellMetaDatasState.subscribe(spellMetaDataState => {
        for (let spell in spellMetaDataState.spellMetaDatas) {
          this.spellsIndex[spell].metaData = spellMetaDataState.spellMetaDatas[spell];
        }
      });
  }
}
