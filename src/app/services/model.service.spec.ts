import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SpellLevel } from './../model/spell-level';
import { defaultSpellLevels } from './../data/default-spell-levels';
import { PersistanceService } from './persistance.service';
import { TestBed, inject, fakeAsync, tick } from '@angular/core/testing';

import { ModelService } from './model.service';

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
    const persistanceService = TestBed.get(PersistanceService);
    spyOn(persistanceService, 'loadSpellLevels').and.callFake(() => {
      return new Promise<SpellLevel[]>((resolve, reject) => {
        resolve(defaultSpellLevels);
      });
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
});
