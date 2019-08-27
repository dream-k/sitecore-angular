import { Component, OnInit, Input } from '@angular/core';
import { ComponentRendering } from '@sitecore-jss/sitecore-jss-angular';

@Component({
  selector: 'app-thailand-corporate-profile',
  templateUrl: './thailand-corporate-profile.component.html',
  styleUrls: ['./thailand-corporate-profile.component.css']
})
export class ThailandCorporateProfileComponent implements OnInit {
  @Input() rendering: ComponentRendering;

  constructor() { }

  ngOnInit() {
    // remove this after implementation is done
    console.log('thailand-corporate-profile component initialized with component data', this.rendering);
  }
}
