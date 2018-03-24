import { StoreMock } from './../stores/store.mock';
import { StoreSpellLevels } from './../stores/spell-levels/spell-levels.actions';
import { Observable } from 'rxjs/Observable';
import { SpellLevel } from './../model/spell-level';
import { defaultSpellLevels } from './../data/default-spell-levels';
import { By } from '@angular/platform-browser';
import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

import { SpellPerDayComponent } from './spell-per-day.component';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule } from '@angular/router';
import { Component, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromSpellLevels from './../stores/spell-levels/spell-levels.reducers';
import { UpdateSpellLevel } from '../stores/spell-levels/spell-levels.actions';
import { NumberPickerComponent } from '../shared/components/number-picker/number-picker.component';
@Component({
  template: ''
})
export class DummyComponent { }

describe('SpellPerDayComponent', () => {
  let component: SpellPerDayComponent;
  let fixture: ComponentFixture<SpellPerDayComponent>;
  let store: StoreMock;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SpellPerDayComponent,
        DummyComponent,
        NumberPickerComponent
      ],
      providers: [
        { provide: Store, useClass: StoreMock }
      ],
      imports: [
        RouterTestingModule.withRoutes([
          { path: 'spells-setup', component: DummyComponent }
        ])],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    store = TestBed.get(Store);
    fixture = TestBed.createComponent(SpellPerDayComponent);
    component = fixture.componentInstance;
    store.stateMap = {};
    store.subjectsMap = {};
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update state when changing numOfSpells of a spellLevel', () => {
    const index = 0;
    const level = defaultSpellLevels[index];
    const numOfSpells = level.numOfSpells + 1;
    const spy = spyOn(store, 'dispatch');
    component.onSpellLevelChange(0, level, numOfSpells);
    expect(spy).toHaveBeenCalledWith(new UpdateSpellLevel({
      index,
      numOfSpells
    }));
  });

  it('should store spell levels when component is destroyed', () => {
    const spy = spyOn(store, 'dispatch');
    fixture.destroy();
    expect(spy).toHaveBeenCalledWith(new StoreSpellLevels());
  });

  describe('SpellLevels tests', () => {
    let state;
    beforeEach(fakeAsync(() => {
      state = <fromSpellLevels.State>{
        selectedSpellLevelLabel: '0',
        spellLevels: defaultSpellLevels
      };
      store.stateMap['spellLevels'] = state;
      fixture.detectChanges();
      tick();
    }));

    it('should have spell levels defined', () => {
      component.spellLevelsState.subscribe(currentState => {
        expect(currentState).toEqual(state);
      });
    });

    it('should display the spell levels labels in the headers ', () => {
      const headerElements = fixture.debugElement.queryAll(By.css('tr>th'));
      const th = (<HTMLTableHeaderCellElement>headerElements[1].nativeElement);
      expect(headerElements.length).toEqual(defaultSpellLevels.length + 1);
      expect(th.textContent).toEqual(defaultSpellLevels[0].label);

    });

    it('should display the spell levels num of spells in the inputs ', () => {
      const elements = fixture.debugElement.queryAll(By.css('tr>td'));
      const input = elements[1].query(By.directive(NumberPickerComponent)).componentInstance;
      expect(elements.length).toEqual(defaultSpellLevels.length + 1);
      expect(input.value).toEqual(defaultSpellLevels[0].numOfSpells);
    });

    it('should trigger the onSpellChange function when firing an input event from the input', () => {
      const spy = spyOn(component, 'onSpellLevelChange');
      const input = fixture.debugElement.query(By.directive(NumberPickerComponent)).nativeElement;
      input.dispatchEvent(new Event('input'));
      expect(spy).toHaveBeenCalled();
    });
  });
});
