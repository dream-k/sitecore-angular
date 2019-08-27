import { Component, OnInit, Input } from '@angular/core';
import { ComponentRendering } from '@sitecore-jss/sitecore-jss-angular';

@Component({
  selector: 'app-malaysia-corporate-profile',
  templateUrl: './malaysia-corporate-profile.component.html',
  styleUrls: ['./malaysia-corporate-profile.component.css']
})
export class MalaysiaCorporateProfileComponent implements OnInit {
  @Input() rendering: ComponentRendering;

  constructor() { }

  ngOnInit() {
    // remove this after implementation is done
    console.log('malaysia-corporate-profile component initialized with component data', this.rendering);
  }
}
