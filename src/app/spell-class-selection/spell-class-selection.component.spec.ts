import { SpellsServiceMock } from './../services/spells.service.mock';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellClassSelectionComponent } from './spell-class-selection.component';
import { SpellsService } from '../services/spells.service';

describe('SpellClassSelectionComponent', () => {
  let component: SpellClassSelectionComponent;
  let fixture: ComponentFixture<SpellClassSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpellClassSelectionComponent ],
      providers: [{ provide: SpellsService, useClass: SpellsServiceMock}]
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
