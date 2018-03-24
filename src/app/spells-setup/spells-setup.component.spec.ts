import { UpdateSpellLevel } from './../stores/spell-levels/spell-levels.actions';
import { reducers, AppState } from './../stores/app.reducers';
import { MoreDetailComponent } from './../shared/components/more-detail/more-detail.component';
import { NumberPickerComponent } from './../shared/components/number-picker/number-picker.component';
import { spellMocks } from './../model/spell.mock';
import { SpellClass } from './../model/spell-class.enum';
import { UpdateSpellMetaData } from './../stores/spell-meta-datas/spell-meta-datas.actions';
import { Store, StoreModule } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

import { RouterModule, RouterLink, RouterLinkWithHref } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { SpellsSetupComponent } from './spells-setup.component';
import { Spell } from '../model/spell';
import { LevelPipe } from '../pipes/level.pipe';
import { SpellMetaData } from '../model/spell-meta-data';
import { defaultSpellLevels } from '../data/default-spell-levels';

import * as fromSpellLevels from './../stores/spell-levels/spell-levels.reducers';
import { SetSpells } from '../stores/spells/spells.actions';
import { UpdateSelectedSpellLevelLabel } from '../stores/spell-levels/spell-levels.actions';
@Component({ template: '' })
export class DummyComponent {

}
describe('SpellsSetupComponent', () => {
  let component: SpellsSetupComponent;
  let fixture: ComponentFixture<SpellsSetupComponent>;
  let spells: Spell[];
  let store: Store<AppState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SpellsSetupComponent,
        LevelPipe,
        DummyComponent,
        NumberPickerComponent,
        MoreDetailComponent
      ],
      providers: [
        Store
      ],
      imports: [
        RouterTestingModule.withRoutes([
          { path: 'spells-per-day', component: DummyComponent },
          { path: 'spells-use', component: DummyComponent }
        ]),
        StoreModule.forRoot(reducers)
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpellsSetupComponent);
    component = fixture.componentInstance;
    const state1 = <fromSpellLevels.State>{
      selectedSpellLevelLabel: '1',
      spellLevels: defaultSpellLevels
    };

    spells = [];
    Object.assign(spells, spellMocks);
    spells[0].metaData = new SpellMetaData(true, 3, 0);
    spells[1].metaData = new SpellMetaData(true, 2, 0);
    store = TestBed.get(Store);
    store.dispatch(new SetSpells(spells));
    store.dispatch(new UpdateSelectedSpellLevelLabel('1'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should have spells defined', () => {
  //   expect(component.spells.length).toBeGreaterThan(0);
  // });
  it('should include a router link to spells-per-day', () => {
    const routerLinkElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
    const firstElementIndex = routerLinkElements.findIndex(de => de.properties['href'].includes('/spells-per-day'));
    expect(firstElementIndex).toBeGreaterThan(-1);
  });
  it('should include a router link to spells-use', () => {
    const routerLinkElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
    const firstElementIndex = routerLinkElements.findIndex(de => de.properties['href'].includes('/spells-use'));
    expect(firstElementIndex).toBeGreaterThan(-1);
  });
  it('should match the remainingUses to preparedUses of all spells when clicking on Replenish ', () => {
    const debugElement = fixture.debugElement.query(By.css('button'));
    const replenishButton: HTMLButtonElement = debugElement.nativeElement;
    const spy = spyOn(store, 'dispatch');
    replenishButton.click();
    expect(spy).toHaveBeenCalledWith(new UpdateSpellMetaData({
      spell: 'someSpell',
      metaData: { ...new SpellMetaData(true, 3, 3) }
    }));
  });

  it('should display spells of the correct level', () => {
    const spell = spells[0];
    const debugRow = fixture.debugElement.query(By.css('tbody>tr'));
    const debugUsesInput = debugRow.query(By.directive(NumberPickerComponent)).componentInstance;
    const debugKnown = debugRow.query(By.css('td>i'));

    expect(debugUsesInput.value).toEqual(spell.metaData.preparedUses);
    expect(debugKnown.classes['fa-check-square']).toEqual(true);
    expect(debugKnown.classes['fa-square-o']).toEqual(false);
  });
  it('should display spells of the correct level after changing the level', fakeAsync(() => {
    store.dispatch(new UpdateSelectedSpellLevelLabel('2'));
    fixture.detectChanges();
    tick();
    const spell = spells[1];
    const debugRow = fixture.debugElement.query(By.css('tbody>tr'));
    const debugUsesInput = debugRow.query(By.directive(NumberPickerComponent)).componentInstance;
    const debugKnown = debugRow.query(By.css('td>i'));

    expect(debugUsesInput.value).toEqual(spell.metaData.preparedUses);
    expect(debugKnown.classes['fa-check-square']).toEqual(true);
  }));

  it('should update total allowed spells according to spell level ', fakeAsync(() => {
    defaultSpellLevels[2].numOfSpells = 4;
    store.dispatch( new UpdateSpellLevel({ index: 2, numOfSpells: 4 }));
    store.dispatch(new UpdateSelectedSpellLevelLabel('2'));
    fixture.detectChanges();
    tick();
    expect(component.totalAllowedSpells).toBe(4);
  }));
});
