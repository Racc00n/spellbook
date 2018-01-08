import { TestBed, inject, async } from '@angular/core/testing';
import { SpellsServiceMock } from './../services/spells.service.mock';
import { LevelPipe } from './level.pipe';
import { PersistanceService } from '../services/persistance.service';
import { SpellsService } from '../services/spells.service';
import { SpellClass } from '../model/spell-class.enum';
import { spellMocks } from '../model/spell.mock';

describe('LevelPipe', () => {  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [        
        LevelPipe        
      ],      
      providers: [
        { provide: SpellsService, useClass: SpellsServiceMock },
        LevelPipe
      ]
    }).compileComponents();
  }));
  it('create an instance', inject([LevelPipe], (levelPipe) => {
    expect(levelPipe).toBeTruthy();    
  })); 

  it('should filter out all spells that are not in the current selected level', inject([LevelPipe], (levelPipe:LevelPipe) => {
    const spellsService: SpellsServiceMock = TestBed.get(SpellsService);
    spellsService.spellClass = SpellClass.sorcererWizard;
    const spells = [];
    Object.assign(spells, spellMocks);    
    const result = levelPipe.transform(spells,'1');
    expect(result.length).toBe(1);
    expect(result[0].level.includes('1')).toBeTruthy();
  })); 
});
