import { defaultSpellLevels } from './../data/default-spell-levels';
import { SpellLevel } from './../model/spell-level';
import { TestBed, inject } from '@angular/core/testing';

import { PersistanceService } from './persistance.service';

describe('PersistanceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersistanceService]
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
  });
  it('should be created', inject([PersistanceService], (service: PersistanceService) => {
    expect(service).toBeTruthy();
  }));

  it('should be able to save a spell levels array using local storage', inject([PersistanceService], (service: PersistanceService) => {
    const spellLevels: SpellLevel[] = [];
    service.saveSpellLevels(spellLevels).then(() => {
      expect(localStorage.getItem(PersistanceService.SPELL_LEVELS)).toBeDefined();
    });

  }));

  it('should be able to load a spell levels array using the local storage', inject([PersistanceService], (service: PersistanceService) => {
    localStorage.setItem(PersistanceService.SPELL_LEVELS, '[]');
    service.loadSpellLevels().then((spellLevels) => {
      expect(spellLevels).toBeDefined();
    });
  }));
  it('should return the default spell levels if none are saved', inject([PersistanceService], (service: PersistanceService) => {
    service.loadSpellLevels().then((spellLevels) => {
      expect(spellLevels).toBe(defaultSpellLevels);
    });
  }));
});
