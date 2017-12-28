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

@NgModule({
  declarations: [
    AppComponent    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    PersistanceService,
    ModelService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
