import { spellMocks } from './../model/spell.mock';
import { SpellMetaData } from './../model/spell-meta-data';
import { KnownPipe } from './known.pipe';
import { Spell } from '../model/spell';

describe('KnownPipe', () => {
  it('create an instance', () => {
    const pipe = new KnownPipe();
    expect(pipe).toBeTruthy();
  });
  
  it('should filter out spells that are not known',()=> {
    const pipe = new KnownPipe();
    let spells:Spell[] = [];
    Object.assign(spells, spellMocks);    
    spells[0].metaData = new SpellMetaData(false);
    spells[1].metaData = new SpellMetaData(true,2,2);
    
    const result = pipe.transform(spells);
    expect(result.length).toBe(1);
    expect(result[0]).toEqual(spells[1]);
  })
});
