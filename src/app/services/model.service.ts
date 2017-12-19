import { SpellLevel } from './../model/spell-level';
import { Injectable } from '@angular/core';
import { PersistanceService } from './persistance.service';

@Injectable()
export class ModelService {

  private _spellLevels: SpellLevel[];

  constructor(private persistance: PersistanceService) { }

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


}
