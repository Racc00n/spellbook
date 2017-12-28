import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  SpellsUseComponent } from "./spells-use.component";
import { RouterModule } from '@angular/router';

import { KnownPipe } from "../pipes/known.pipe";
import { RemainingUsesPipe } from "../pipes/remaining-uses.pipe";
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: SpellsUseComponent},
    ]),
    SharedModule
  ],
  declarations: [
    SpellsUseComponent,    
    KnownPipe,
    RemainingUsesPipe
  ]
})
export class SpellsUseModule { }
