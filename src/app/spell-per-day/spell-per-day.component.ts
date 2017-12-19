import { PersistanceService } from './../services/persistance.service';
import { SpellLevel } from './../model/spell-level';
import { Component, OnInit } from '@angular/core';
import { ModelService } from '../services/model.service';

@Component({
  selector: 'app-spell-per-day',
  templateUrl: './spell-per-day.component.html',
  styleUrls: ['./spell-per-day.component.scss']
})
export class SpellPerDayComponent implements OnInit {
  levels: SpellLevel[];
  constructor(private modelService: ModelService) { }

  ngOnInit() {
    this.levels = this.modelService.spellLevels;
  }
}
