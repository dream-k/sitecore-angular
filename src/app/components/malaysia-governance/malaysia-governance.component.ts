import { Component, OnInit, Input } from '@angular/core';
import { ComponentRendering } from '@sitecore-jss/sitecore-jss-angular';

@Component({
  selector: 'app-malaysia-governance',
  templateUrl: './malaysia-governance.component.html',
  styleUrls: ['./malaysia-governance.component.css']
})
export class MalaysiaGovernanceComponent implements OnInit {
  @Input() rendering: ComponentRendering;

  constructor() { }

  ngOnInit() {
    // remove this after implementation is done
    console.log('malaysia-governance component initialized with component data', this.rendering);
    
  }
}
