import { TestBed, inject } from '@angular/core/testing';

import { SpellsService } from './spells.service';

describe('SpellsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpellsService]
    });
  });

  it('should be created', inject([SpellsService], (service: SpellsService) => {
    expect(service).toBeTruthy();
  }));
});
