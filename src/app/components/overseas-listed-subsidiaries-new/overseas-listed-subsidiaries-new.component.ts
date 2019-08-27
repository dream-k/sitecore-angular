import { Component, OnInit, Input } from '@angular/core';
import { ComponentRendering } from '@sitecore-jss/sitecore-jss-angular';

@Component({
  selector: 'app-overseas-listed-subsidiaries-new',
  templateUrl: './overseas-listed-subsidiaries-new.component.html',
  styleUrls: ['./overseas-listed-subsidiaries-new.component.css']
})
export class OverseasListedSubsidiariesNewComponent implements OnInit {
  @Input() rendering: ComponentRendering;

  constructor() { }

  ngOnInit() {
    // remove this after implementation is done
    console.log('overseas-listed-subsidiaries-new component initialized with component data', this.rendering);
  }
}
