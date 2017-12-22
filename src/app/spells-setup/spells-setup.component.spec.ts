import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { SpellsSetupComponent } from './spells-setup.component';
import { PersistanceService } from '../services/persistance.service';
import { ModelService } from './../services/model.service';
import { Spell } from '../model/spell';
import { LevelPipe } from '../pipes/level.pipe';

describe('SpellsSetupComponent', () => {
  let component: SpellsSetupComponent;
  let fixture: ComponentFixture<SpellsSetupComponent>;
  let modelService: ModelService;
  let spells: Spell[];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SpellsSetupComponent, LevelPipe],
      providers: [PersistanceService, ModelService],
      imports: [HttpClientTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpellsSetupComponent);
    component = fixture.componentInstance;
    modelService = fixture.debugElement.injector.get(ModelService);
    spells = [
      <Spell>{
        name: 'someSpell',
        level: 'Sor/Wiz 1',
        school: 'Conjuration',
        components: 'V, S, M, F',
        castingtime: '1 standard action',
        range: 'Long (400 ft. + 40 ft./level)',
        effect: 'One arrow of acid',
        duration: '1 round + 1 round per three levels',
        savingthrow: 'None',
        spellresistance: 'No',
        description: 'An amazing spell that does nothing long text',
        shortdescription: 'An Amazing spell that does nothing short text'
      }
    ];
    spyOnProperty(modelService, 'spells', 'get').and.returnValue(spells);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have spells defined', fakeAsync(() => {
    fixture.detectChanges();
    tick();
    // expect(modelService.spells.length).toBeGreaterThan(0);
    expect(component.spells.length).toBeGreaterThan(0);
  }));
});
