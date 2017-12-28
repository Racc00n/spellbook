
import { SpellClass } from '../model/spell-class.enum';
import { SpellLevel } from '../model/spell-level';
import { Injectable } from '@angular/core';
import { PersistanceService } from './persistance.service';
import { Spell } from '../model/spell';
import { SpellMetaData } from '../model/spell-meta-data';

@Injectable()
export class ModelService {

  private _spellClass: SpellClass;
  private _spellLevels: SpellLevel[];
  private _spells: Spell[];
  private _spellsByLevel: { [level: string]: Spell[] };

  constructor(private persistance: PersistanceService) {
    this._spellClass = SpellClass.sorcererWizard; // TODO - this should be dynamic later on
    this._spellsByLevel = {};
  }

  get spellClass(): SpellClass {
    return this._spellClass;
  }

  get spellLevels(): SpellLevel[] {
    if (!this._spellLevels) {
      this._spellLevels = [];
      this.populateSpellLevels();
    }

    return this._spellLevels;
  }

  private async populateSpellLevels() {
    const levels = await this.persistance.loadSpellLevels();
    this._spellLevels.push(...levels);
  }

  get spells(): Spell[] {
    if (!this._spells) {
      this._spells = [];
      this.populateSpells();
    }

    return this._spells;
  }

  private async populateSpells() {
    const spellsReponse = await this.persistance.getSpellsByClass(this._spellClass);
    const spellsMetaDataReponse = await this.persistance.loadSpellsMetaDataByClass(this._spellClass);
    this._spells.push(...spellsReponse);
    this._spells.map(spell => spell.metaData = spellsMetaDataReponse[spell.name] || new SpellMetaData());
  }

  getSpellsByLevel(level: string) {
    if (!this._spellsByLevel[level]) {
      this._spellsByLevel[level] = [];
    }
    if (this._spellsByLevel[level].length === 0) {
      const filteredSpells = this.spells.filter(spell =>
        spell.level.includes(this.spellClass + ' ' + level)
      );
      this._spellsByLevel[level] = filteredSpells;      
    }
    return this._spellsByLevel[level];
  }

  saveSpellsMetaData() {
    const spellsMetaDatas: { [spell: string]: SpellMetaData } = {};
    for (let spell of this.spells) {
      spellsMetaDatas[spell.name] = spell.metaData;
    }

    this.persistance.saveSpellsMetaDataByClass(spellsMetaDatas, this.spellClass);
  }

  saveSpellLevels() {
    this.persistance.saveSpellLevels(this.spellLevels);
  }

  saveAll() {
    this.saveSpellsMetaData();
    this.saveSpellLevels();
  }
}