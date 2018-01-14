import { SpellClassSelectionComponent } from './spell-class-selection.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: SpellClassSelectionComponent},
    ]),
  ],
  declarations: [
    SpellClassSelectionComponent
  ]
})
export class SpellClassSelectionModule { }
