import { FetchSpellClass } from './stores/spells/spells.actions';
import { FetchSpellLevels, StoreSpellLevels } from './stores/spell-levels/spell-levels.actions';
import { StoreMock } from './stores/store.mock';
import { RouterTestingModule } from '@angular/router/testing';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { SpellsService } from './services/spells.service';
import { SpellsServiceMock } from './services/spells.service.mock';
import { StoreSpellMetaDatas } from './stores/spell-meta-datas/spell-meta-datas.actions';

@Component({
  template: ''
})
export class DummyComponent { }

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;
  let store: StoreMock;
  let spellsService: SpellsServiceMock;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        DummyComponent
      ],
      imports: [
        RouterTestingModule.withRoutes([
          { path: '', component: DummyComponent }
        ])
      ],
      providers: [
        { provide: Store, useClass: StoreMock },
        { provide: SpellsService, useClass: SpellsServiceMock },
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
    store = TestBed.get(Store);
    spellsService = TestBed.get(SpellsService);
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('should dispatch a fetch to the current spell class', () => {
    const spy = spyOn(store, 'dispatch');
    fixture.detectChanges();
    expect(spy).toHaveBeenCalledWith(new FetchSpellClass());
  });

  it('should store spell levels and spellmetadatas wehn window is beforeunload', () => {
    const storeDispatchSpy = spyOn(store, 'dispatch');
    fixture.detectChanges();
    window.dispatchEvent(new Event('beforeunload'));
    expect(storeDispatchSpy).toHaveBeenCalledWith(new StoreSpellMetaDatas());
    expect(storeDispatchSpy).toHaveBeenCalledWith(new StoreSpellLevels());
  });

});
