import { AppRoutingModule } from './app-routing.module';
import { ModelService } from './services/model.service';
import { PersistanceService } from './services/persistance.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SpellPerDayComponent } from './spell-per-day/spell-per-day.component';
import { HttpClientModule } from '@angular/common/http';
import { SpellsSetupComponent } from './spells-setup/spells-setup.component';
import { LevelPipe } from './pipes/level.pipe';
import { SpellsUseComponent } from './spells-use/spells-use.component';
import { KnownPipe } from './pipes/known.pipe';
import { RemainingUsesPipe } from './pipes/remaining-uses.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { SpellLevelsEffects } from './stores/spell-levels/spell-levels.effects';
import { reducers } from './stores/app.reducers';

@NgModule({
  declarations: [
    AppComponent    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([SpellLevelsEffects])
  ],
  providers: [
    PersistanceService,
    ModelService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
