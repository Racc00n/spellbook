import { TextDescriptionComponent } from './../shared/components/text-description/text-description.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  SpellsSetupComponent } from "./spells-setup.component";
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: SpellsSetupComponent, children: [
        { path: 'text-description/:spell', component: TextDescriptionComponent},
      ]}      
    ]),
    SharedModule
  ],
  declarations: [
    SpellsSetupComponent
  ],
})
export class SpellsSetupModule { }
