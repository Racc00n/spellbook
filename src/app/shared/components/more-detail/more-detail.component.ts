import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-more-detail',
  templateUrl: './more-detail.component.html',
  styleUrls: ['./more-detail.component.scss']
})
export class MoreDetailComponent implements OnInit {
  @Input() spell:string = '';
  constructor(private router:Router,
              private route:ActivatedRoute) { }

  ngOnInit() {
  }

  onClick() {
    this.router.navigate(['text-description', this.spell],{ relativeTo: this.route })
    // alert(this.text);
  }

}
