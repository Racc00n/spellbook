import { ModelService } from './../services/model.service';
import { Component, OnInit, OnDestroy, ChangeDetectorRef} from '@angular/core';
import { state, trigger, transition, style, animate } from '@angular/animations';
import { Spell } from '../model/spell';
import { SpellLevel } from '../model/spell-level';


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
  spellLevels: SpellLevel[];

  constructor(private changeRef:  ChangeDetectorRef, private modelService: ModelService) { }

  ngOnInit() {
    this.spellLevels = this.modelService.spellLevels;
    this.spells = this.modelService.spells;
  }

  ngOnDestroy() {
    this.modelService.saveSpellsMetaData();
  }

  spellRemovalDone(shouldDetectChanges: boolean) {
    if (shouldDetectChanges) {
      this.changeRef.detectChanges();
    }
  }

}
