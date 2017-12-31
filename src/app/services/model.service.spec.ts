import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SpellLevel } from './../model/spell-level';
import { Spell } from './../model/spell';

import { defaultSpellLevels } from './../data/default-spell-levels';
import { PersistanceService } from './persistance.service';
import { TestBed, inject, fakeAsync, tick } from '@angular/core/testing';

import { ModelService } from './model.service';
import { SpellMetaData } from '../model/spell-meta-data';
import { SpellClass } from '../model/spell-class.enum';

let persistanceService:PersistanceService;
let spells:Spell[];
describe('ModelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ModelService,
        PersistanceService,
      ],
      imports: [
        HttpClientTestingModule
      ]
    });
    persistanceService = TestBed.get(PersistanceService);
    spells = [<Spell>{
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
    }];
    spyOn(persistanceService, 'loadSpellLevels').and.callFake(() => {
      return new Promise<SpellLevel[]>((resolve, reject) => {
        resolve(defaultSpellLevels);
      });    
    });
    spyOn(persistanceService, 'getSpellsByClass').and.callFake(() => {
      return new Promise<Spell[]>((resolve, reject) => {
        resolve(spells);
      });
    });
    spyOn(persistanceService, 'saveSpellsMetaDataByClass').and.callFake(()=>{
      return new Promise<void>((resolve,reject)=>{})
    });
    
  });

  it('should be created', inject([ModelService], (service: ModelService) => {
    expect(service).toBeTruthy();
  }));

  it('should return an empty list of spell levels first',
    inject([ModelService], (service: ModelService) => {
      expect(service.spellLevels).toEqual([]);
    })
  );
  it('should return an the list of spellLevels after a tick',
    fakeAsync(inject([ModelService], (service: ModelService) => {
      const spellLevels = service.spellLevels;
      tick();
      expect(service.spellLevels).toEqual(defaultSpellLevels);
    }))
  );

  it('should point to the same array every time you call spellLevels, before and after a tick',
    fakeAsync(inject([ModelService], (service: ModelService) => {
      const spellLevels = service.spellLevels;
      tick();
      expect(service.spellLevels).toBe(spellLevels);
    }))
  );
  
  it('should return an empty list of spells first',
    inject([ModelService], (service: ModelService) => {
      expect(service.spells).toEqual([]);
    })
  );

  it('should return an the list of spells after a tick',
    fakeAsync(inject([ModelService], (service: ModelService) => {
      const spells = service.spells;
      tick();
      expect(service.spells.length).toBeGreaterThan(0);      
    }))
  );

  it('should return an the list of spells (after a tick) with filled metadata if such exists',
    fakeAsync(inject([ModelService], (service: ModelService) => {
      const metaData = {
        'someSpell': new SpellMetaData(true,3,0),
        'someSpell 2': new SpellMetaData(true,2,0)
      }
      spyOn(persistanceService, 'loadSpellsMetaDataByClass').and.callFake(()=>{
        return new Promise<{ [spell: string]: SpellMetaData }>((resolve,reject)=>{
          resolve(metaData);
        })
      });
      const spells = service.spells;
      tick();
      expect(service.spells[0].metaData).toBeDefined();      
    }))
  );

  it('should return an the list of spells (after a tick) with filled metadata even if metadata doesn`t exist',
    fakeAsync(inject([ModelService], (service: ModelService) => {
      const metaData = {};
      spyOn(persistanceService, 'loadSpellsMetaDataByClass').and.callFake(()=>{
        return new Promise<{ [spell: string]: SpellMetaData }>((resolve,reject)=>{
          resolve(metaData);
        })
      });
      const spells = service.spells;
      tick();
      expect(service.spells[0].metaData).toBeDefined();      
    }))
  );
  it('should save metadata only for spells that have non-default value', inject([ModelService], (service: ModelService) => {
    const metaData = {
      'someSpell': new SpellMetaData(true,3,0),
      'someSpell 2': new SpellMetaData(false,0,0)
    }

    spells[0].metaData = metaData['someSpell'];
    spells[1].metaData = metaData['someSpell 2'];

    spyOnProperty(service, 'spells', 'get').and.returnValue(spells);
    service.saveSpellsMetaData();
    expect(persistanceService.saveSpellsMetaDataByClass).toHaveBeenCalledWith({ 'someSpell': metaData['someSpell']}, SpellClass.sorcererWizard);
  }))
});
