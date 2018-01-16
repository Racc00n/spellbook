import { StoreMock } from './../stores/store.mock';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SpellClassSelectionComponent } from './spell-class-selection.component';
import { Store } from '@ngrx/store';

describe('SpellClassSelectionComponent', () => {
  let component: SpellClassSelectionComponent;
  let fixture: ComponentFixture<SpellClassSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpellClassSelectionComponent ],
      providers: [{ provide:Store, useClass:StoreMock }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpellClassSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
