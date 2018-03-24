import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import { AppState } from '../../../stores/app.reducers';
import { Observable } from 'rxjs/Observable';
import * as fromSpells from './../../../stores/spells/spells.reducers';
import { Location } from '@angular/common';
import 'rxjs/add/operator/withLatestFrom';


@Component({
  selector: 'app-text-description',
  templateUrl: './text-description.component.html',
  styleUrls: ['./text-description.component.scss']
})
export class TextDescriptionComponent implements OnInit, OnDestroy {
  spellsState: Observable<fromSpells.State>;
  text: string;
  spellName: string;

  private subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private location: Location) { }

  ngOnInit() {
    this.spellsState = this.store.select('spells');
    this.subscription =
      this.route.params
        .withLatestFrom(this.spellsState)
        .subscribe(([params, currentSpellsState]) => {
          this.spellName = params['spell'];
          this.text = currentSpellsState.entities[this.spellName].description;
        });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onCloseClicked() {
    this.location.back();
  }


}

