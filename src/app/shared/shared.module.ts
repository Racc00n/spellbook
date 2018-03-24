import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LevelPipe } from '../pipes/level.pipe';
import { NumberPickerComponent } from './components/number-picker/number-picker.component';
import { MoreDetailComponent } from './components/more-detail/more-detail.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { TextDescriptionComponent } from './components/text-description/text-description.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LevelPipe,
    NumberPickerComponent,
    MoreDetailComponent,
    CheckboxComponent,
    TextDescriptionComponent
  ],
  exports: [
    LevelPipe,
    NumberPickerComponent,
    MoreDetailComponent,
    CheckboxComponent,
    TextDescriptionComponent
  ]

})
export class SharedModule { }
