import { Component, OnInit, Input } from '@angular/core';
import { ComponentRendering } from '@sitecore-jss/sitecore-jss-angular';

@Component({
  selector: 'app-malaysia-public-disclosures',
  templateUrl: './malaysia-public-disclosures.component.html',
  styleUrls: ['./malaysia-public-disclosures.component.css']
})
export class MalaysiaPublicDisclosuresComponent implements OnInit {
  @Input() rendering: ComponentRendering;

  constructor() { }

  ngOnInit() {
    // remove this after implementation is done
    console.log('malaysia-public-disclosures component initialized with component data', this.rendering);
  }
}
