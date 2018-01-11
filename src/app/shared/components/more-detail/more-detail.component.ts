import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-more-detail',
  templateUrl: './more-detail.component.html',
  styleUrls: ['./more-detail.component.scss']
})
export class MoreDetailComponent implements OnInit {
  @Input() text:string = '';
  constructor() { }

  ngOnInit() {
  }

  onClick() {
    alert(this.text);
  }

}
