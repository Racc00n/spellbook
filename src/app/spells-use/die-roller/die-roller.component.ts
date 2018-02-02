import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-die-roller',
  templateUrl: './die-roller.component.html',
  styleUrls: ['./die-roller.component.scss']
})
export class DieRollerComponent implements OnInit {  
  constructor(private location: Location) { }
  @ViewChild('iframe') iframe;

  ngOnInit() {
    console.log(`iframe ${this.iframe}`);
  }

  onCloseClicked() {    
    this.location.back();
  }

  onIFrameLoad(event) {
    console.log('iframe loaded',document.activeElement);
    console.log('iframe loaded event',event);
    if (document.activeElement instanceof HTMLBodyElement){
      (<HTMLBodyElement>document.activeElement).blur();
      event.path[0].contentWindow.addEventListener('focus',(event)=>{
        event.target.blur();        
      });
    } else {

    }    
  }
  
  loseFocus(event) {
    console.log(`lose Focus ${event}`);
    event.target.blur();
  }

}
