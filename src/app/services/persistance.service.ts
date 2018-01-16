import { SpellMetaData } from './../model/spell-meta-data';
import { SpellClass } from './../model/spell-class.enum';
import { defaultSpellLevels } from './../data/default-spell-levels';
import { SpellLevel } from './../model/spell-level';
import { Spell } from './../model/spell';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export const SPELL_LEVELS = 'spellLevels';
export const SPELLS_METADATA = 'spellsMetaData';
export const SPELL_CLASS = 'spellClass';

@Injectable()
export class PersistanceService {

  constructor(private http: HttpClient) { }

  fetchSpellClass(): Promise<SpellClass> {
    const result = new Promise<SpellClass>((resolve, reject) => {
      try {
        const spellClass = <SpellClass>JSON.parse(localStorage.getItem(SPELL_CLASS));
        spellClass ? resolve(spellClass) : resolve(SpellClass.sorcererWizard);
      } catch (error) {
        reject('Unable to load spellClass: ' + error);
      }
    });
    return result;
  }

  storeSpellClass(spellClass: SpellClass): Promise<void> {
    const result = new Promise<void>((resolve, reject) => {
      try {
        (localStorage.setItem(SPELL_CLASS, JSON.stringify(spellClass)));
        resolve();
      } catch (error) {
        reject('Unable to save spellClass: ' + error);
      }
    });
    return result;
  }

  fetchSpellLevelsByClass(spellClass: SpellClass): Promise<SpellLevel[]> {
    const result = new Promise<SpellLevel[]>((resolve, reject) => {
      try {
        const spellLevels = <SpellLevel[]>JSON.parse(localStorage.getItem(SPELL_LEVELS + spellClass));
        spellLevels ? resolve(spellLevels) : resolve(defaultSpellLevels);
      } catch (error) {
        reject('Unable to load spellLevels: ' + error);
      }
    });
    return result;
  }

  storeSpellLevelsByClass(spellLevels: SpellLevel[], spellClass: SpellClass): Promise<void> {
    const result = new Promise<void>((resolve, reject) => {
      try {
        (localStorage.setItem(SPELL_LEVELS + spellClass, JSON.stringify(spellLevels)));
        resolve();
      } catch (error) {
        reject('Unable to save spellLevels: ' + error);
      }
    });
    return result;
  }

  fetchSpellsByClass(spellClass: SpellClass): Promise<Spell[]> {
    const result = new Promise<Spell[]>((resolve, reject) => {
      const subscription = this.http.get('../assets/spells.json').subscribe((data: { spells: Spell[] }) => {
        try {
          const spells: Spell[] = data.spells;
          const filteredSpells = 
            spells
            .filter(spell => spell.level.includes(spellClass))
          resolve(filteredSpells);
        } catch (error) {
          reject('could not load spells ' + error);
        } finally {
          subscription.unsubscribe();
        }
      });
    });
    return result;
  }

  storeSpellsMetaDataByClass(spellsMetaData: { [spell: string]: SpellMetaData }, spellClass: SpellClass): Promise<void> {
    const result = new Promise<void>((resolve, reject) => {
      try {
        (localStorage.setItem(SPELLS_METADATA + spellClass, JSON.stringify(spellsMetaData)));
        resolve();
      } catch (error) {
        reject('Unable to save spells metadata: ' + error);
      }
    });
    return result;
  }

  fetchSpellsMetaDataByClass(spellClass: SpellClass): Promise<{ [spell: string]: SpellMetaData }> {
    const result = new Promise<{ [spell: string]: SpellMetaData }>((resolve, reject) => {
      try {
        const spellMetaData: { [spell: string]: SpellMetaData } =
          JSON.parse(localStorage.getItem(SPELLS_METADATA + spellClass)) || {};
        resolve(spellMetaData);
      } catch (error) {
        reject('Unable to load SpellMetaDatas: ' + error);
      }
    });
    return result;
  }

}