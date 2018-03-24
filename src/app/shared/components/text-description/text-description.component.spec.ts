import { spellMocks } from './../../../model/spell.mock';
import { Store } from '@ngrx/store';
import { StoreMock } from './../../../stores/store.mock';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextDescriptionComponent } from './text-description.component';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';
import 'rxjs/add/observable/from';

@Component({ template: '' })
export class DummyComponent { }

describe('TextDescriptionComponent', () => {
  let component: TextDescriptionComponent;
  let fixture: ComponentFixture<TextDescriptionComponent>;
  let store: StoreMock;
  let location: Location;
  let route: ActivatedRoute;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TextDescriptionComponent,
        DummyComponent
      ],
      providers: [
        { provide: Store, useClass: StoreMock },
        { provide: ActivatedRoute, useValue: { 'params': Observable.from([{ 'spell': spellMocks[0].name }]) } }
      ],
      imports: [
        RouterTestingModule.withRoutes([{path: '', component: DummyComponent}])]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextDescriptionComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);
    location = TestBed.get(Location);
    route = TestBed.get(ActivatedRoute);
    const spells = Object.assign(spellMocks);
    const entities = {};
    spells.map(spell => {
      entities[spell.name] = spell;
    });
    store.stateMap = { spells: {entities}  };
    store.subjectsMap = {};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
