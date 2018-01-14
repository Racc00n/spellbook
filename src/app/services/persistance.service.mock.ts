import { SpellMetaData } from './../model/spell-meta-data';
import { SpellClass } from './../model/spell-class.enum';
import { Spell } from './../model/spell';

export class PersistanceServiceMock {
  spellsMock:Spell[];
  spellMetaDatas:{ [spell: string]: SpellMetaData }
  spellClass: SpellClass;
  fetchSpellClass(): Promise<SpellClass> {
    const result = new Promise<SpellClass>((resolve, reject) => {
      resolve(this.spellClass)
    });
    return result;
  }

  getSpellsByClass(spellClass: SpellClass): Promise<Spell[]> {
    const result = new Promise<Spell[]>((resolve, reject) => {
      resolve(this.spellsMock);
    });
    return result;
  }

  fetchSpellsMetaDataByClass(spellClass: SpellClass): Promise<{ [spell: string]: SpellMetaData }> {
    const result = new Promise<{ [spell: string]: SpellMetaData }>((resolve, reject) => {
      resolve(this.spellMetaDatas);
    });
    return result;
  }


}