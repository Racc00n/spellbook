import { RouterModule, RouterLink, RouterLinkWithHref } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { SpellsSetupComponent } from './spells-setup.component';
import { PersistanceService } from '../services/persistance.service';
import { ModelService } from './../services/model.service';
import { Spell } from '../model/spell';
import { LevelPipe } from '../pipes/level.pipe';
import { RouterTestingModule } from '@angular/router/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { SpellMetaData } from '../model/spell-meta-data';
import { defaultSpellLevels } from '../data/default-spell-levels';

@Component({ template: '' })
export class DummyComponent {

}
describe('SpellsSetupComponent', () => {
  let component: SpellsSetupComponent;
  let fixture: ComponentFixture<SpellsSetupComponent>;
  let modelService: ModelService;
  let spells: Spell[];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SpellsSetupComponent,
        LevelPipe,
        DummyComponent],
      providers: [PersistanceService, ModelService],
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([
        { path: 'spells-per-day', component: DummyComponent },
        { path: 'spells-use', component: DummyComponent }
      ])]
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
        effect: 'One amazing spell',
        duration: '1 round + 1 round per three levels',
        savingthrow: 'None',
        spellresistance: 'No',
        description: 'An amazing spell that does nothing long text',
        shortdescription: 'An Amazing spell that does nothing short text',
        metaData: new SpellMetaData(true,3,0)
      },
      <Spell>{
        name: 'someSpell 2',
        level: 'Sor/Wiz 2',
        school: 'Conjuration',
        components: 'V, S',
        castingtime: '1 standard action',
        range: 'Long (400 ft. + 40 ft./level)',
        effect: 'another amazing spell',
        duration: '1 round + 1 round per three levels',
        savingthrow: 'None',
        spellresistance: 'No',
        description: 'An amazing spell 2 that does nothing long text',
        shortdescription: 'An Amazing spell 2 that does nothing short text',
        metaData: new SpellMetaData(true,2,0)
      }
    ];
    spyOnProperty(modelService, 'spells', 'get').and.returnValue(spells);
    spyOnProperty(modelService, 'spellLevels', 'get').and.returnValue(defaultSpellLevels);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have spells defined', fakeAsync(() => {    
    tick();
    expect(component.spells.length).toBeGreaterThan(0);
  }));
  it('should include a router link to spells-per-day', ()=> {    
    const routerLinkElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
    const firstElementIndex = routerLinkElements.findIndex(de => de.properties['href'].includes('/spells-per-day'));
    expect(firstElementIndex).toBeGreaterThan(-1);        
  });
  it('should include a router link to spells-use', ()=> {    
    const routerLinkElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
    const firstElementIndex = routerLinkElements.findIndex(de => de.properties['href'].includes('/spells-use'));
    expect(firstElementIndex).toBeGreaterThan(-1); 
  });
  it('should match the remainingUses to preparedUses of all spells when clicking on Replenish ', ()=> {    
    const debugElement = fixture.debugElement.query(By.css('button'));
    const replenishButton:HTMLButtonElement = debugElement.nativeElement;
    replenishButton.click();
    expect(spells.filter((spell)=> spell.metaData.preparedUses === spell.metaData.remainingUses).length).toEqual(2);    
  });
});
