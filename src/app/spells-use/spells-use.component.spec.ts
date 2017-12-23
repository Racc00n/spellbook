import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellsUseComponent } from './spells-use.component';

describe('SpellsUseComponent', () => {
  let component: SpellsUseComponent;
  let fixture: ComponentFixture<SpellsUseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpellsUseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpellsUseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
