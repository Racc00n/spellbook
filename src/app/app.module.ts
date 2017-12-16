import { PersistanceService } from './services/persistance.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SpellPerDayComponent } from './spell-per-day/spell-per-day.component';


@NgModule({
  declarations: [
    AppComponent,
    SpellPerDayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ PersistanceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
