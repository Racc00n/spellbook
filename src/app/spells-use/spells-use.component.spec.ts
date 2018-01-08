import { spellMocks } from './../model/spell.mock';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { defaultSpellLevels } from './../data/default-spell-levels';
import { StoreMock } from './../stores/store.mock';
import { SpellsService } from './../services/spells.service';
import { RemainingUsesPipe } from './../pipes/remaining-uses.pipe';
import { SpellsUseComponent } from './spells-use.component';
import { RouterTestingModule } from '@angular/router/testing';
import { KnownPipe } from '../pipes/known.pipe';
import { LevelPipe } from '../pipes/level.pipe';
import { PersistanceService } from '../services/persistance.service';
import { SpellsServiceMock } from '../services/spells.service.mock';
import { Spell } from '../model/spell';
import { SpellMetaData } from '../model/spell-meta-data';
import { SpellClass } from '../model/spell-class.enum';
import * as fromSpellLevels from './../stores/spell-levels/spell-levels.reducers';
import { By } from '@angular/platform-browser';
import { UpdateSpellMetaData, StoreSpellMetaDatas } from '../stores/spell-meta-datas/spell-meta-datas.actions';

@Component({ template: '' })
export class DummyComponent {}
describe('SpellsUseComponent', () => {
  let component: SpellsUseComponent;
  let fixture: ComponentFixture<SpellsUseComponent>;
  let store: StoreMock;
  let spellsService: SpellsServiceMock;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SpellsUseComponent,
        RemainingUsesPipe,
        KnownPipe,
        LevelPipe,
        DummyComponent        
      ],
      imports: [
        RouterTestingModule.withRoutes(
          [{
            path: 'spells-setup', component: DummyComponent
          }]),
        BrowserAnimationsModule
    ],
      providers: [
        { provide: SpellsService, useClass: SpellsServiceMock },        
        { provide: Store, useClass: StoreMock }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpellsUseComponent);
    component = fixture.componentInstance;
    spellsService = TestBed.get(SpellsService); 
    store = TestBed.get(Store); 
    store.stateMap = {};
    store.subjectsMap = {};
    const state1 = <fromSpellLevels.State>{
      selectedSpellLevelLabel: '1',
      spellLevels: defaultSpellLevels
    }
    
    store.stateMap['spellLevels'] = state1;
    let spells:Spell[] = [];
    Object.assign(spells, spellMocks);
    spells[0].metaData =  new SpellMetaData(true,3,3);
    spells[1].metaData =  new SpellMetaData(true,2,2);
    spellsService.spells = spells;
    spellsService.spellClass = SpellClass.sorcererWizard;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display spells and their data', () => {
    const spellRows = fixture.debugElement.queryAll(By.css('tr'));
    expect(spellRows.length).toBe(2);
    const spell1Tds = spellRows[0].queryAll(By.css('td'));
    const spell1 = spellsService.spells[0];
    expect(+spell1Tds[0].nativeElement.innerText).toEqual(spell1.metaData.remainingUses);
    expect(spell1Tds[2].nativeElement.innerText).toEqual(spell1.name);
  });

  it('should dispatch an update for decreasing the remainingUses by 1 when clicking on use button', () => {
    const firstCastButton = fixture.debugElement.query(By.css('tr button'));    
    const spell1 = spellsService.spells[0];
    const spy = spyOn(store, 'dispatch');
    firstCastButton.nativeElement.click();    
    expect(spy).toHaveBeenCalledWith(new UpdateSpellMetaData({
      spell: spell1.name, 
      metaData: new SpellMetaData(
        spell1.metaData.known, 
        spell1.metaData.preparedUses,
        spell1.metaData.remainingUses - 1)          
    }));
  });
  
  it('should store the spellMetaDatas when destorying the component ', () => {
    const spy = spyOn(store, 'dispatch');
    fixture.destroy();    
    expect(spy).toHaveBeenCalledWith(new StoreSpellMetaDatas());
  }); 
});
