import { Injectable } from '@angular/core';
import 'rxjs/add/observable/from';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class StoreMock {
  stateMap: { [name: string]: any };
  subjectsMap:{[name:string]: BehaviorSubject<any> };

  select(name: string) { 
    if (!this.subjectsMap[name]) {
      this.subjectsMap[name] = new BehaviorSubject(this.stateMap[name]);
    }    
    return this.subjectsMap[name];
  }
  dispatch(action: any) { }
};