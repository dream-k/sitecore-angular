import { Component, OnInit, Input } from '@angular/core';
import { ComponentRendering } from '@sitecore-jss/sitecore-jss-angular';
// declare var $:any;
// declare var AOS:any;

@Component({
  selector: 'app-corporate-profile',
  templateUrl: './corporate-profile.component.html',
  styleUrls: ['./corporate-profile.component.css']
})
export class CorporateProfileComponent implements OnInit {
  @Input() rendering: ComponentRendering;

  constructor() { }

  ngOnInit() {
    // remove this after implementation is done
    console.log('corporate-profile component initialized with component data', this.rendering);
    // $(window).scroll(function () {

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

  ngAfterViewInit() {
    // $(".collapse.in").each(function () {
    //   $(this).siblings(".panel-heading").find(".glyphicon01").addClass("rotate");
    // });

    // // Toggle plus minus icon on show hide of collapse element
    // $(".collapse").on('show.bs.collapse', function () {
    //     $(this).parent().find(".glyphicon01").addClass("rotate");
    // }).on('hide.bs.collapse', function () {
    //     $(this).parent().find(".glyphicon01").removeClass("rotate");
    // });

    // $(".mobile_menu").slideMobileMenu({
    //   onMenuLoad: function (menu) {
    //       console.log(menu)
    //       console.log("menu loaded")
    //   },
    //   onMenuToggle: function (menu, opened) {
    //       console.log(opened)
    //   }
    // });

    // var $scope = $(".scope");
    //     // scopeWHalf = $scope.width() / 2;
    // $(document).on("mousemove", function (e) {
    //     //	$scope.css({"left": e.pageX - scopeWHalf, "top": e.pageY - scopeWHalf});
    // });

    // $('.ui-newsticker').newsticker();

    // $('.owl-carousel').owlCarousel({
    //   loop: true,
    //   margin: 10,
    //   nav: false,
    //   items: 1,
    //   autoplay: false,
    //   responsive: {
    //       0: {items: 1,},
    //       600: {items: 1},
    //       1000: {items: 1},
    //   }
    // });

    // var $scope = $("#bannerItem1 .scope");
    // var pos = $scope.position();
    // $scope.css({
    //     "left": -500,
    //     "top": 50
    // });
    // $scope.css("visibility", "visible");
    // $scope.animate({
    //     "left": pos.left,
    //     "top": pos.top
    // }, 1000);
  }
}
