import { StoreSpellMetaDatas } from './stores/spell-meta-datas/spell-meta-datas.actions';
import { AppState } from './stores/app.reducers';
import { SpellsService } from './services/spells.service';
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
    private store: Store<AppState>,
    private spellsService: SpellsService) {
    router.navigate(['']);
  }

  ngOnInit() {
    this.spellsService.init();
    this.store.dispatch(new FetchSpellLevels());
    window.addEventListener('beforeunload', () => this.storeAll());
  }

  storeAll() {
    this.store.dispatch(new StoreSpellMetaDatas());
    this.store.dispatch(new StoreSpellLevels());
  }
}
