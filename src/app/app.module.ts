import { SpellMetaDatasEffects } from './stores/spell-meta-datas/spell-meta-datas.effects';
import { AppRoutingModule } from './app-routing.module';
import { PersistanceService } from './services/persistance.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AnimationsModule } from './animations/animations.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { SpellLevelsEffects } from './stores/spell-levels/spell-levels.effects';
import { reducers } from './stores/app.reducers';
import { SpellsEffects } from './stores/spells/spells.effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AnimationsModule.forRoot(),
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([SpellLevelsEffects, SpellMetaDatasEffects, SpellsEffects])
  ],
  providers: [
    PersistanceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
