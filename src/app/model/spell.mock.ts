import { Spell } from './spell';
export const spellMocks: Spell[] = [
  <Spell>{
    name: 'someSpell',
    level: 'Sor/Wiz 1',
    school: 'Conjuration',
    components: 'V, S, M, F',
    castingtime: '1 standard action',
    range: 'Long (400 ft. + 40 ft./level)',
    effect: 'One amazing spell',
    duration: '1 round + 1 round per three levels',
    savingthrow: 'None',
    spellresistance: 'No',
    description: 'An amazing spell that does nothing long text',
    shortdescription: 'An Amazing spell that does nothing short text'
  },
  <Spell>{
    name: 'someSpell 2',
    level: 'Sor/Wiz 2',
    school: 'Conjuration',
    components: 'V, S',
    castingtime: '1 standard action',
    range: 'Long (400 ft. + 40 ft./level)',
    effect: 'another amazing spell',
    duration: '1 round + 1 round per three levels',
    savingthrow: 'None',
    spellresistance: 'No',
    description: 'An amazing spell 2 that does nothing long text',
    shortdescription: 'An Amazing spell 2 that does nothing short text'
  }
];