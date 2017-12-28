import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  SpellsSetupComponent } from "./spells-setup.component";
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: SpellsSetupComponent},
    ]),
    SharedModule
  ],
  declarations: [
    SpellsSetupComponent,    
  ],
})
export class SpellsSetupModule { }
