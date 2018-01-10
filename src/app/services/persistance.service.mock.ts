import { SpellClass } from './../model/spell-class.enum';
import { Spell } from './../model/spell';

export class PersistanceServiceMock {
  spellsMock:Spell[];
  getSpellsByClass(spellClass: SpellClass): Promise<Spell[]> {
    const result = new Promise<Spell[]>((resolve, reject) => {
      resolve(this.spellsMock);
    });
    return result;
  }
}