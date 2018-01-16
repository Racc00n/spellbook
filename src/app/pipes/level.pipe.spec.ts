import { StoreMock } from './../stores/store.mock';
import { TestBed, inject, async } from '@angular/core/testing';
import { LevelPipe } from './level.pipe';
import { PersistanceService } from '../services/persistance.service';
import { SpellClass } from '../model/spell-class.enum';
import { spellMocks } from '../model/spell.mock';
import { Store } from '@ngrx/store';

describe('LevelPipe', () => {  
  let store:StoreMock;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [        
        LevelPipe        
      ],      
      providers: [        
        LevelPipe,
        { provide: Store, useClass: StoreMock }
      ]
    }).compileComponents();
  }));
  beforeEach(() => {
    store = TestBed.get(Store);
    store.stateMap = {'spells': {spellClass: SpellClass.sorcererWizard}}
    store.subjectsMap = {};
  });
  it('create an instance', inject([LevelPipe], (levelPipe) => {
    expect(levelPipe).toBeTruthy();    
  })); 

  it('should filter out all spells that are not in the current selected level', inject([LevelPipe], (levelPipe:LevelPipe) => {
    const spells = [];
    Object.assign(spells, spellMocks);    
    const result = levelPipe.transform(spells,'1');
    expect(result.length).toBe(1);
    expect(result[0].level.includes('1')).toBeTruthy();
  })); 
});
