import { FetchSpellClass, StoreSpellClass } from './stores/spells/spells.actions';
import { StoreSpellMetaDatas } from './stores/spell-meta-datas/spell-meta-datas.actions';
import { AppState } from './stores/app.reducers';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { FetchSpellLevels, StoreSpellLevels } from './stores/spell-levels/spell-levels.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router,
    private store: Store<AppState>) {
    router.navigate(['']);
  }

  ngOnInit() {
    this.store.dispatch(new FetchSpellClass());
    window.addEventListener('beforeunload', () => this.storeAll());
  }

  storeAll() {
    this.store.dispatch(new StoreSpellMetaDatas());
    this.store.dispatch(new StoreSpellLevels());    
    this.store.dispatch(new StoreSpellClass());        
  }
}
