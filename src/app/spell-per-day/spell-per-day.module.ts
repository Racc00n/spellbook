import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpellPerDayComponent } from "./spell-per-day.component";
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: SpellPerDayComponent},
    ])
  ],
  declarations: [
    SpellPerDayComponent    
  ]
})
export class SpellPerDayModule {

}
