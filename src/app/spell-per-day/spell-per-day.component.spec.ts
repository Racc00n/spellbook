import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellPerDayComponent } from './spell-per-day.component';
import { PersistanceService } from '../services/persistance.service';

describe('SpellPerDayComponent', () => {
  let component: SpellPerDayComponent;
  let fixture: ComponentFixture<SpellPerDayComponent>;
  let persistanceService: PersistanceService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpellPerDayComponent ],
      providers: [PersistanceService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpellPerDayComponent);
    component = fixture.componentInstance;
    persistanceService = fixture.debugElement.injector.get(PersistanceService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
