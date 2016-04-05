$(function () {
  "use strict";
  $(window).scroll(function() {
    var bannerHeight = $(".banner").height(); 
    var scroll = $(window).scrollTop();

    if (scroll >= bannerHeight) {
        $(".running-flash").addClass("fixed");
    } else {
        $(".running-flash").removeClass("fixed");
    }
  });
});