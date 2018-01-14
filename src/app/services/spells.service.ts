import { FetchSpellLevels } from './../stores/spell-levels/spell-levels.actions';
import { SpellClass } from './../model/spell-class.enum';
import { FetchSpellMetaDatas } from './../stores/spell-meta-datas/spell-meta-datas.actions';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { AppState } from './../stores/app.reducers';
import { PersistanceService } from './persistance.service';
import { SpellMetaData } from '../model/spell-meta-data';
import { Spell } from '../model/spell';
import * as fromSpellMetaDatas from './../stores/spell-meta-datas/spell-meta-datas.reducers';

@Injectable()
export class SpellsService {
  private subscription;
  private spellsIndex: { [name: string]: Spell }; // for performance purposes.
  private spellMetaDatasState: Observable<fromSpellMetaDatas.State>;
  private _spellClass: SpellClass;
  spells: Spell[];  

  constructor(private store: Store<AppState>,
    private persistance: PersistanceService) {
    this.spells = [];
    this.spellsIndex = {};
    this._spellClass = SpellClass.sorcererWizard;
  }

  public get spellClass():SpellClass {
    return this._spellClass;
  }

  public set spellClass(value:SpellClass) {
    this._spellClass = value;
    this.store.dispatch(new FetchSpellLevels());    
    this.populateSpells();
  }

  public async init() {
    this.spellMetaDatasState = this.store.select('spellMetaDatas');
    let spellClass =  await this.persistance.fetchSpellClass();        
    this.spellClass = spellClass;
  }

  private async populateSpells() {
    this.spellsIndex = {};
    const spellsReponse = await this.persistance.getSpellsByClass(this.spellClass);
    if (this.spells.length > 0 ) {
      this.spells.length = 0;
    }
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
  
  save() {
    this.persistance.storeSpellClass(this.spellClass);
  }
}
