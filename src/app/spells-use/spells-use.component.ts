import { Router, ActivatedRoute } from '@angular/router';
import { UpdateSpellMetaData, StoreSpellMetaDatas } from './../stores/spell-meta-datas/spell-meta-datas.actions';
import { Observable } from 'rxjs/Observable';
import { AppState } from './../stores/app.reducers';
import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { state, trigger, transition, style, animate } from '@angular/animations';
import { Spell } from '../model/spell';
import { SpellLevel } from '../model/spell-level';
import { Store } from '@ngrx/store';
import { StoreSpellLevels } from '../stores/spell-levels/spell-levels.actions';
import * as fromSpellLevels from './../stores/spell-levels/spell-levels.reducers';
import * as fromSpells from './../stores/spells/spells.reducers';
import { SpellMetaData } from '../model/spell-meta-data';


@Component({
  selector: 'app-spells-use',
  templateUrl: './spells-use.component.html',
  styleUrls: ['./spells-use.component.scss'],
  animations: [
    trigger('spellRemoval', [
      transition(':leave', [
        style({
          opacity: 1,
          transform: 'translateX(0)'
        }),
        animate(200, style({
          transform: 'translateX(100px)',
          opacity: 0
        }))
      ])
    ]),
  ]

})
export class SpellsUseComponent implements OnInit, OnDestroy {

  spellLevelsState: Observable<fromSpellLevels.State>;
  spellsState: Observable<fromSpells.State>;
  selectAllSpells = fromSpells.selectAll;
  isDiceRollerShown = false;
  isRollActive = true;
  isRootHidden = false;
    
  constructor(
    private store: Store<AppState>,
    private changeRef: ChangeDetectorRef,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.spellLevelsState = this.store.select('spellLevels');
    this.spellsState = this.store.select('spells');
  }

  ngOnDestroy() {
    this.store.dispatch(new StoreSpellMetaDatas());
  }

  spellRemovalDone(shouldDetectChanges: boolean) {
    if (shouldDetectChanges) {
      this.changeRef.detectChanges();
    }
  }

  castSpellClicked(spell) {
    this.store.dispatch(
      new UpdateSpellMetaData({
        spell: spell.name,
        metaData: new SpellMetaData(
          spell.metaData.known,
          spell.metaData.preparedUses,
          spell.metaData.remainingUses - 1)
      })
    );
    if (this.isRollActive) {
      this.isDiceRollerShown = true;

      this.router.navigate(['die-roller'], { relativeTo: this.route });
    }
  }

  spellsTrackBy(index: number, spell: Spell) {
    return spell.name;
  }

  toggleRoll() {
    this.isRollActive = !this.isRollActive;
  }
}
