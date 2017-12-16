import { defaultSpellLevels } from './../data/default-spell-levels';
import { SpellLevel } from './../model/spell-level';
import { Injectable } from '@angular/core';


@Injectable()
export class PersistanceService {
  static SPELL_LEVELS = 'spellLevels';

  loadSpellLevels(): Promise<SpellLevel[]> {
    const result = new Promise<SpellLevel[]>((resolve, reject) => {
      try {
        const spellLevels = <SpellLevel[]>JSON.parse(localStorage.getItem(PersistanceService.SPELL_LEVELS));
        spellLevels? resolve(spellLevels) : resolve(defaultSpellLevels);
      } catch (error) {
        reject('Unable to load spellLevels: ' + error);
      }
    });
    return result;
  }

  saveSpellLevels(spellLevels: SpellLevel[]): Promise<void> {
    const result = new Promise<void>((resolve, reject) => {
      try {
        (localStorage.setItem(PersistanceService.SPELL_LEVELS, JSON.stringify(spellLevels)));
        resolve();
      } catch (error) {
        reject('Unable to save spellLevels: ' + error);
      }
    });
    return result;
  }

  constructor() { }

}
