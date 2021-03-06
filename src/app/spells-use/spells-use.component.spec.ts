import { SetSpells, UpdateSpellClass } from './../stores/spells/spells.actions';
import { UpdateSelectedSpellLevelLabel } from './../stores/spell-levels/spell-levels.actions';
import { AppState, reducers } from './../stores/app.reducers';
import { MoreDetailComponent } from './../shared/components/more-detail/more-detail.component';
import { spellMocks } from './../model/spell.mock';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { Store, StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

import { defaultSpellLevels } from './../data/default-spell-levels';
import { StoreMock } from './../stores/store.mock';
import { RemainingUsesPipe } from './../pipes/remaining-uses.pipe';
import { SpellsUseComponent } from './spells-use.component';
import { RouterTestingModule } from '@angular/router/testing';
import { KnownPipe } from '../pipes/known.pipe';
import { LevelPipe } from '../pipes/level.pipe';
import { PersistanceService } from '../services/persistance.service';
import { Spell } from '../model/spell';
import { SpellMetaData } from '../model/spell-meta-data';
import { SpellClass } from '../model/spell-class.enum';
import * as fromSpellLevels from './../stores/spell-levels/spell-levels.reducers';
import { By } from '@angular/platform-browser';
import { UpdateSpellMetaData, StoreSpellMetaDatas } from '../stores/spell-meta-datas/spell-meta-datas.actions';
import { DieRollerComponent } from './die-roller/die-roller.component';

@Component({ template: '' })
export class DummyComponent { }
describe('SpellsUseComponent', () => {
  let component: SpellsUseComponent;
  let fixture: ComponentFixture<SpellsUseComponent>;
  let store: Store<AppState>;
  let spells: Spell[];
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SpellsUseComponent,
        RemainingUsesPipe,
        MoreDetailComponent,
        KnownPipe,
        LevelPipe,
        DummyComponent,
        DieRollerComponent
      ],
      imports: [
        RouterTestingModule.withRoutes(
          [{
            path: 'spells-setup', component: DummyComponent
          }]),
        NoopAnimationsModule,
        StoreModule.forRoot(reducers)
      ],
      providers: [
        Store
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpellsUseComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);
    store.dispatch(new UpdateSelectedSpellLevelLabel('1'));
    spells = [];
    Object.assign(spells, spellMocks);
    spells[0].metaData = new SpellMetaData(true, 3, 3);
    spells[1].metaData = new SpellMetaData(true, 2, 2);
    store.dispatch(new SetSpells(spells));
    store.dispatch(new UpdateSpellClass(SpellClass.sorcererWizard));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display spells and their data', () => {
    const spellRows = fixture.debugElement.queryAll(By.css('tbody>tr'));
    expect(spellRows.length).toBe(2);
    const spell1Tds = spellRows[0].queryAll(By.css('td'));
    const spell1 = spells[0];
    expect(+spell1Tds[0].nativeElement.innerText).toEqual(spell1.metaData.remainingUses);
    expect(spell1Tds[2].nativeElement.innerText).toEqual(spell1.name);
  });

  it('should dispatch an update for decreasing the remainingUses by 1 when clicking on use button', () => {
    const firstCastButton = fixture.debugElement.query(By.css('tr button'));
    const spell1 = spells[0];
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
