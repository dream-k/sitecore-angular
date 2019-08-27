import { Component, OnInit, Input } from '@angular/core';
import { ComponentRendering } from '@sitecore-jss/sitecore-jss-angular';
// declare var $:any;
// declare var AOS:any;
@Component({
  selector: 'app-investor-relations-new',
  templateUrl: './investor-relations-new.component.html',
  styleUrls: ['./investor-relations-new.component.css']
})
export class InvestorRelationsNewComponent implements OnInit {
  @Input() rendering: ComponentRendering;

  constructor() { }

  ngOnInit() {
    // remove this after implementation is done
    console.log('investor-relations-new component initialized with component data', this.rendering);
  //   $(window).scroll(function () {

  //     var scroll = $(window).scrollTop();



  //     if (scroll >= 50) {

  //         $(".clearHeader").addClass("stickyHeader");

  //     } else {

  //         $(".clearHeader").removeClass("stickyHeader");

  //     }

  //     if (scroll >= 50) {

  //         $("body").addClass("activeBody");

  //     } else {

  //         $("body").removeClass("activeBody");

  //     }

  // });

  // AOS.init({
  //   duration: 800,
  // });

  }
}
