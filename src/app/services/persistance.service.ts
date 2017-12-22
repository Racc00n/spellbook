import { SpellClass } from './../model/spell-class.enum';
import { defaultSpellLevels } from './../data/default-spell-levels';
import { SpellLevel } from './../model/spell-level';
import { Spell } from './../model/spell';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class PersistanceService {
  static SPELL_LEVELS = 'spellLevels';

  constructor(private http: HttpClient) { }

  loadSpellLevels(): Promise<SpellLevel[]> {
    const result = new Promise<SpellLevel[]>((resolve, reject) => {
      try {
        const spellLevels = <SpellLevel[]>JSON.parse(localStorage.getItem(PersistanceService.SPELL_LEVELS));
        spellLevels ? resolve(spellLevels) : resolve(defaultSpellLevels);
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

  getSpellsByClass(spellClass: SpellClass): Promise<Spell[]> {
    const result = new Promise<Spell[]>((resolve, reject) => {
      const subscription = this.http.get('../assets/spells.json').subscribe((data: {spells: Spell[]}) => {
        try {
          const spells: Spell[] = data.spells;
          const filteredSpells = spells.filter(spell => spell.level.includes(spellClass));
          resolve(spells);
        } catch (error) {
          reject('could not load spells ' + error);
        } finally {
          subscription.unsubscribe();
        }
      });
    });
    return result;
  }

}
