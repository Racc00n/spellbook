import { PersistanceService } from './../services/persistance.service';
import { SpellLevel } from './../model/spell-level';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spell-per-day',
  templateUrl: './spell-per-day.component.html',
  styleUrls: ['./spell-per-day.component.scss']
})
export class SpellPerDayComponent implements OnInit {
  levels: SpellLevel[];
  constructor(private persistance: PersistanceService) { }

  ngOnInit() {
   this.populateLevels();
  }

  async populateLevels() {
    this.levels = await this.persistance.loadSpellLevels();
  }

}
