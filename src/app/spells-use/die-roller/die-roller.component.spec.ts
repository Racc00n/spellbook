import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DieRollerComponent } from './die-roller.component';

describe('DieRollerComponent', () => {
  let component: DieRollerComponent;
  let fixture: ComponentFixture<DieRollerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DieRollerComponent ]
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
