import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DieRollerComponent } from './die-roller.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Component } from '@angular/core';

@Component({ template: '' })
export class DummyComponent { }

describe('DieRollerComponent', () => {
  let component: DieRollerComponent;
  let fixture: ComponentFixture<DieRollerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DieRollerComponent, DummyComponent ],
      imports: [
        RouterTestingModule.withRoutes([{path: '', component: DummyComponent}])
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DieRollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
