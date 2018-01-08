import { spellMocks } from './../model/spell.mock';
import { RemainingUsesPipe } from './remaining-uses.pipe';
import { Spell } from '../model/spell';
import { SpellMetaData } from '../model/spell-meta-data';

describe('RemainingUsesPipe', () => {
  it('create an instance', () => {
    const pipe = new RemainingUsesPipe();
    expect(pipe).toBeTruthy();
  });
  it('should filter spells that don`t have remaining uses',() => {
    const pipe = new RemainingUsesPipe();
    let spells:Spell[] = [];
    Object.assign(spells, spellMocks);    
    
    spells[0].metaData = new SpellMetaData(true,2,0);
    spells[1].metaData = new SpellMetaData(true,3,3);    
    
    const result = pipe.transform(spells);
    expect(result.length).toBe(1);
    expect(result[0]).toBe(spells[1]);
  });
});
