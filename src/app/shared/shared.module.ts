import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LevelPipe } from '../pipes/level.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LevelPipe
  ],
  exports: [
    LevelPipe
  ]

})
export class SharedModule { }
