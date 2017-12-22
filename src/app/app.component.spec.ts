import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ModelService } from './services/model.service';
import { PersistanceService } from './services/persistance.service';
import { SpellPerDayComponent } from './spell-per-day/spell-per-day.component';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { SpellsSetupComponent } from './spells-setup/spells-setup.component';
import { LevelPipe } from './pipes/level.pipe';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        SpellPerDayComponent,
        SpellsSetupComponent,
        LevelPipe
      ],
      providers: [
        PersistanceService,
        ModelService
      ],
      imports: [HttpClientTestingModule]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  // it(`should have as title 'app'`, async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('app');
  // }));
  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  // }));
});
