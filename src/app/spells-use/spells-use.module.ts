import { TextDescriptionComponent } from './../shared/components/text-description/text-description.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  SpellsUseComponent } from "./spells-use.component";
import { RouterModule } from '@angular/router';

import { KnownPipe } from "../pipes/known.pipe";
import { RemainingUsesPipe } from "../pipes/remaining-uses.pipe";
import { SharedModule } from '../shared/shared.module';
import { DieRollerComponent } from './die-roller/die-roller.component';

@Component({template:''})
class EmptyComponent {}
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: SpellsUseComponent, children: [
        { path:'die-roller', component: EmptyComponent },
        { path:'text-description/:spell', component: TextDescriptionComponent }
      ]}
    ]),
    SharedModule
  ],
  declarations: [
    SpellsUseComponent,    
    KnownPipe,
    RemainingUsesPipe,
    DieRollerComponent,
    EmptyComponent    
  ]
})
export class SpellsUseModule { }
