import { Component, OnInit, Input } from '@angular/core';
import { ComponentRendering } from '@sitecore-jss/sitecore-jss-angular';
// declare var $:any;
// declare var AOS:any;
@Component({
  selector: 'app-csr-governance',
  templateUrl: './csr-governance.component.html',
  styleUrls: ['./csr-governance.component.css']
})
export class CsrGovernanceComponent implements OnInit {
  @Input() rendering: ComponentRendering;

  constructor() { }

  ngOnInit() {
    // remove this after implementation is done
    console.log('csr-governance component initialized with component data', this.rendering);
//     $(window).scroll(function () {

//       var scroll = $(window).scrollTop();



//       if (scroll >= 50) {

//           $(".clearHeader").addClass("stickyHeader");

//       } else {

//           $(".clearHeader").removeClass("stickyHeader");

//       }

//       if (scroll >= 50) {

//           $("body").addClass("activeBody");

//       } else {

//           $("body").removeClass("activeBody");

//       }

//   });

//   AOS.init({
//     duration: 800,
//   });
  }
}
