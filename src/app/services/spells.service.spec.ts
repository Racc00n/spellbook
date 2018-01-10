import { SpellMetaData } from './../model/spell-meta-data';
import { PersistanceServiceMock } from './persistance.service.mock';
import { PersistanceService } from './persistance.service';
import { FetchSpellMetaDatas } from './../stores/spell-meta-datas/spell-meta-datas.actions';
import { TestBed, inject, fakeAsync, tick } from '@angular/core/testing';

import { SpellsService } from './spells.service';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { AppState } from '../stores/app.reducers';
import * as fromSpellMetaDatas from './../stores/spell-meta-datas/spell-meta-datas.reducers';
import { Spell } from '../model/spell';
import { StoreMock } from '../stores/store.mock';

describe('SpellsService', () => {
  let service:SpellsService;
  let persistance:PersistanceServiceMock;
  let store:StoreMock;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
                  SpellsService,
                  {provide: Store, useClass: StoreMock  },
                  {provide: PersistanceService, useClass: PersistanceServiceMock  }                   
                ]
    });
    service = TestBed.get(SpellsService);
    store = TestBed.get(Store);  
    persistance = TestBed.get(PersistanceService);  
    store.stateMap = {
      'spellMetaDatas': <fromSpellMetaDatas.State>{
        spellMetaDatas: {'someSpell' : new SpellMetaData(true,2,2)}
     }
    };
    store.subjectsMap = {};
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
    persistance.spellsMock =  spellsMock;
  });

  it('should be created', () => {    
    expect(service).toBeTruthy();
  });
  
  it('should fetch spells metadata on init',fakeAsync(() => {
    const spy = spyOn(store,'dispatch');
    service.init();
    tick();
    expect(spy).toHaveBeenCalledWith(new FetchSpellMetaDatas());    
  }));

  it('should fetch spells on init and insert their metadata (if none, then should be default metadata)', fakeAsync(() => {    
    service.init();
    tick();
    expect(service.spells.length).toBe(2);
    expect(service.spells[0].metaData).toEqual(new SpellMetaData(true,2,2));
    expect(service.spells[1].metaData).toEqual(new SpellMetaData());
  }));
});
