import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RemainingUsesPipe } from './../pipes/remaining-uses.pipe';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellsUseComponent } from './spells-use.component';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Component } from '@angular/core';
import { KnownPipe } from '../pipes/known.pipe';
import { LevelPipe } from '../pipes/level.pipe';
import { ModelService } from '../services/model.service';
import { PersistanceService } from '../services/persistance.service';
@Component({ template: '' })
export class DummyComponent {

}
describe('SpellsUseComponent', () => {
  let component: SpellsUseComponent;
  let fixture: ComponentFixture<SpellsUseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SpellsUseComponent,
        RemainingUsesPipe,
        KnownPipe,
        LevelPipe,
        DummyComponent
      ],
      imports: [
        RouterTestingModule.withRoutes(
          [{
            path: 'spells-setup', component: DummyComponent
          }]),
        HttpClientTestingModule
    ],
      providers: [
        ModelService,
        PersistanceService
      ]
    }).compileComponents();
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
