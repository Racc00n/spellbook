import { Observable } from 'rxjs/Observable';
import { UpdateSpellClass } from './../stores/spells/spells.actions';
import { SpellClass } from './../model/spell-class.enum';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../stores/app.reducers';
import * as fromSpells from '../stores/spells/spells.reducers';
@Component({
  selector: 'app-spell-class-selection',
  templateUrl: './spell-class-selection.component.html',
  styleUrls: ['./spell-class-selection.component.scss']
})
export class SpellClassSelectionComponent implements OnInit {
  spellsState: Observable<fromSpells.State>;
  spellClasses: { spellClass: SpellClass, label: string }[];

  constructor(private store: Store<AppState>) {
    this.spellsState = store.select('spells');
    this.spellClasses = [];
  }

  ngOnInit() {
    this.spellClasses = Object.keys(SpellClass).map(
      key => ({ spellClass: <SpellClass>SpellClass[key as any], label: key })
    );
  }

  onSelectedSpellLevelChange(newValue: SpellClass) {
    this.store.dispatch(new UpdateSpellClass(newValue));
  }

}
