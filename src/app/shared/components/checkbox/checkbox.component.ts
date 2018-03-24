import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent{
  @Output() change = new EventEmitter<boolean>()
  @Input() checked:boolean  = false;

  constructor() { }
  
  onClick() { 
    this.change.emit(!this.checked);
  }

}
