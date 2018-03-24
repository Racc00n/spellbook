import { SpellClass } from './../model/spell-class.enum';
import { StoreMock } from './../stores/store.mock';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SpellClassSelectionComponent } from './spell-class-selection.component';
import { Store } from '@ngrx/store';

describe('SpellClassSelectionComponent', () => {
  let component: SpellClassSelectionComponent;
  let fixture: ComponentFixture<SpellClassSelectionComponent>;
  let store: StoreMock;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SpellClassSelectionComponent],
      providers: [{ provide: Store, useClass: StoreMock }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    store = TestBed.get(Store);
    store.stateMap = {spells: {spellClass: SpellClass.sorcererWizard}};
    store.subjectsMap = {};
    fixture = TestBed.createComponent(SpellClassSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
