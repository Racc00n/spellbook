import { Observable } from 'rxjs/Observable';
import { AppState } from './../stores/app.reducers';
import { SpellsService } from './../services/spells.service';
import { Component, OnInit, OnDestroy, ChangeDetectorRef} from '@angular/core';
import { state, trigger, transition, style, animate } from '@angular/animations';
import { Spell } from '../model/spell';
import { SpellLevel } from '../model/spell-level';
import { Store } from '@ngrx/store';
import { StoreSpellLevels } from '../stores/spell-levels/spell-levels.actions';
import * as fromSpellLevels from './../stores/spell-levels/spell-levels.reducers';

@Component({
  selector: 'app-spells-use',
  templateUrl: './spells-use.component.html',
  styleUrls: ['./spells-use.component.scss'],
  animations: [
    trigger('spellRemoval', [
      state('in', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('* => void', [
        animate(200, style({
          transform: 'translateX(100px)',
          opacity: 0
        }))
      ])
    ]),
  ]

})
export class SpellsUseComponent implements OnInit, OnDestroy {
  spells: Spell[];  
  spellLevelsState: Observable<fromSpellLevels.State>;

  constructor(private store:Store<AppState>,
              private spellService: SpellsService,
              private changeRef:  ChangeDetectorRef) { }

  ngOnInit() {    
    this.spells = this.spellService.spells;
    this.spellLevelsState = this.store.select('spellLevels');
  }

  ngOnDestroy() {
    this.store.dispatch(new StoreSpellLevels());
  }

  spellRemovalDone(shouldDetectChanges: boolean) {
    if (shouldDetectChanges) {
      this.changeRef.detectChanges();
    }
  }

}
