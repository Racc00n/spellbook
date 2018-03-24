import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-die-roller',
  templateUrl: './die-roller.component.html',
  styleUrls: ['./die-roller.component.scss']
})

export class DieRollerComponent implements OnInit {
  @ViewChild('iframe') iframe;
  @Input() disabled: boolean;

  constructor(private location: Location) { }

  ngOnInit() {
    console.log(`iframe ${this.iframe}`);
  }

  onCloseClicked() {
    this.location.back();
  }
}
