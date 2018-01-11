import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-number-picker',
  templateUrl: './number-picker.component.html',
  styleUrls: ['./number-picker.component.scss']
})
export class NumberPickerComponent implements OnInit {
  @Output() input:EventEmitter<number>;
  @Input() min:number = 0;
  @Input() max:number = Number.MAX_VALUE;
  @Input() value:number = 0;
  @Input() disabled:boolean = false;  

  constructor() {
    this.input = new EventEmitter<number>();
   }

  ngOnInit() {
  }
  
  downClicked() {
    if (this.value > this.min){
      this.emitInputEvent(--this.value);
    } else {
      this.value = this.min;
      this.emitInputEvent(this.value);
    }
  }

  private emitInputEvent(value) {
    this.input.emit(value); 
  }

  upClicked() {
    if (this.value < this.max){
      this.emitInputEvent(++this.value);     
    } else {
      this.value = this.max;
      this.emitInputEvent(this.value);
    }    
  }
}
