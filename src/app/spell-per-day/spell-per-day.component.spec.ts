import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ModelService } from './../services/model.service';
import { SpellLevel } from './../model/spell-level';
import { defaultSpellLevels } from './../data/default-spell-levels';
import { By } from '@angular/platform-browser';
import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

import { SpellPerDayComponent } from './spell-per-day.component';
import { PersistanceService } from '../services/persistance.service';
import { LevelPipe } from '../pipes/level.pipe';


describe('SpellPerDayComponent', () => {
  let component: SpellPerDayComponent;
  let fixture: ComponentFixture<SpellPerDayComponent>;
  let persistanceService: PersistanceService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SpellPerDayComponent, LevelPipe],
      providers: [PersistanceService, ModelService],
      imports: [HttpClientTestingModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpellPerDayComponent);
    component = fixture.componentInstance;
    persistanceService = fixture.debugElement.injector.get(PersistanceService);
    spyOn(persistanceService, 'loadSpellLevels').and.callFake(() => {
      return new Promise<SpellLevel[]>((resolve, reject) => {
        resolve(defaultSpellLevels);
      });
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have spell levels defined', fakeAsync(() => {
    fixture.detectChanges();
    tick();
    expect(component.levels.length).toBeGreaterThan(0);
  }));
});
