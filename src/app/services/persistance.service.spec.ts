import { SpellClass } from './../model/spell-class.enum';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { defaultSpellLevels } from './../data/default-spell-levels';
import { SpellLevel } from './../model/spell-level';
import { TestBed, inject } from '@angular/core/testing';

import { PersistanceService, SPELL_LEVELS, SPELLS_METADATA, SPELL_CLASS } from './persistance.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Spell } from '../model/spell';
import { error } from 'util';
import 'rxjs/add/observable/of';
import { SpellMetaData } from '../model/spell-meta-data';

describe('PersistanceService', () => {
  let service: PersistanceService;
  let spellClass: SpellClass;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PersistanceService
      ],
      imports: [HttpClientTestingModule]
    });
    let store = {};

    const mockLocalStorage = {
      getItem: (key: string): string => {
        return key in store ? store[key] : null;
      },
      setItem: (key: string, value: string) => {
        store[key] = `${value}`;
      },
      removeItem: (key: string) => {
        delete store[key];
      },
      clear: () => {
        store = {};
      }
    };
    spyOn(localStorage, 'getItem')
      .and.callFake(mockLocalStorage.getItem);
    spyOn(localStorage, 'setItem')
      .and.callFake(mockLocalStorage.setItem);
    spyOn(localStorage, 'removeItem')
      .and.callFake(mockLocalStorage.removeItem);
    spyOn(localStorage, 'clear')
      .and.callFake(mockLocalStorage.clear);
    service = TestBed.get(PersistanceService);
    spellClass = SpellClass.sorcererWizard;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should load the spell class using local storage if exists', () => {
    localStorage.setItem(SPELL_CLASS, JSON.stringify(SpellClass.cleric));
    service.fetchSpellClass().then(
      fetchedSpellClass => {
        expect(fetchedSpellClass).toEqual(SpellClass.cleric);
      },
      error => {
        console.log(error);
        fail();
      });
  });

  it('should return the default spell class (SpellClass.sorcererWizard) if doesn`t exist on local storage', () => {
    service.fetchSpellClass().then(
      fetchedSpellClass => {
        expect(fetchedSpellClass).toEqual(SpellClass.sorcererWizard);
      },
      error => {
        console.log(error);
        fail();
      });
  });

  it('should be able to save the spellClass using local storage', () => {
    const storedSpellClass = SpellClass.sorcererWizard;
    service.storeSpellClass(storedSpellClass).then(
      () => {
        expect(JSON.parse(localStorage.getItem(SPELL_CLASS))).toEqual(storedSpellClass);
      },
      error => {
        console.log(error);
        fail();
      });
  });

  it('should be able to save a spell levels array using local storage', () => {
    const spellLevels: SpellLevel[] = [];
    service.storeSpellLevelsByClass(spellLevels, spellClass).then(
      () => {
        expect(JSON.parse(localStorage.getItem(SPELL_LEVELS + spellClass))).toEqual([]);
      },
      error => {
        console.log(error);
        fail();
      });
  });

  it('should be able to load a spell levels array using the local storage', () => {
    localStorage.setItem(SPELL_LEVELS + spellClass, '[]');
    service.fetchSpellLevelsByClass(spellClass).then(
      spellLevels => {
        expect(spellLevels).toEqual([]);
      },
      error => {
        console.log(error);
        fail();
      });
  });

  it('should return the default spell levels if none are saved', () => {
    service.fetchSpellLevelsByClass(spellClass).then(
      spellLevels => {
        expect(spellLevels).toBe(defaultSpellLevels);
      },
      error => {
        console.log(error);
        fail();
      });
  });

  it('should return an array of spells for a specific spell class', inject([HttpClient, HttpTestingController],
    (http: HttpClient, backend: HttpTestingController) => {
      const spellsMock = [
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
          level: 'Clr 2',
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

      service.fetchSpellsByClass(SpellClass.sorcererWizard).then(
        spells => {
          expect(spells.length).toEqual(1);
          expect(spells[0].level).toContain(SpellClass.sorcererWizard);
        },
        error => {
          console.log(error);
          fail();
        });

      backend.match({
        url: '../assets/spells.json',
        method: 'GET'
      })[0].flush({ spells: spellsMock });
    }));
  it('should store the spell metatdata by class in the local storage', () => {
    const metaDataMocks = {
      'some spell': new SpellMetaData(true, 2, 2),
      'another spell': new SpellMetaData(true, 3, 3)
    };
    const localStorageKey = SPELLS_METADATA + SpellClass.sorcererWizard;
    service.storeSpellsMetaDataByClass(metaDataMocks, SpellClass.sorcererWizard).then(
      () => {
        expect(localStorage.getItem(localStorageKey)).toEqual(JSON.stringify(metaDataMocks));
      },
      error => {
        console.log(error);
        fail();
      }
    );
  });
  it('should fetch the spell metadata by class from the local storage', () => {
    const metaDataMocks = {
      'some spell': new SpellMetaData(true, 2, 2),
      'another spell': new SpellMetaData(true, 3, 3)
    };
    const localStorageKey = SPELLS_METADATA + SpellClass.sorcererWizard;
    localStorage.setItem(localStorageKey, JSON.stringify(metaDataMocks));
    service.fetchSpellsMetaDataByClass(SpellClass.sorcererWizard).then(
      metaDatas => {
        expect(JSON.stringify(metaDatas)).toEqual(JSON.stringify(metaDataMocks));
      },
      error => {
        console.log(error);
        fail();
      }
    )
  });
});
