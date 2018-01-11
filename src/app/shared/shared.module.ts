import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LevelPipe } from '../pipes/level.pipe';
import { NumberPickerComponent } from './components/number-picker/number-picker.component';
import { MoreDetailComponent } from './components/more-detail/more-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LevelPipe,
    NumberPickerComponent,
    MoreDetailComponent
  ],
  exports: [
    LevelPipe,
    NumberPickerComponent,
    MoreDetailComponent
  ]

})
export class SharedModule { }
