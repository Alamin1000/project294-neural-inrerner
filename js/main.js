(function ($) {
  "use strict";

  // offcanvas-js
  $(".offcanvas-open").click(function () {
    $(".offcanvas-menu").addClass("active");
    $(".offcanvas-overlay").addClass("active");
  });
  $(".offcanvas-menu a").click(function () {
    $(".offcanvas-menu").removeClass("active");
    $(".offcanvas-overlay").removeClass("active");
  });
  $(".close-offcanvas").click(function () {
    $(".offcanvas-menu").removeClass("active");
    $(".offcanvas-overlay").removeClass("active");
  });
  $(document).mouseup(function (e) {
    var container = $(".offmenu");

    // If the target of the click isn't the container
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      $(".offcanvas-menu").removeClass("active");
      $(".offcanvas-overlay").removeClass("active");
    }
  });

  // owl-carousel
  let serviceSlider = $(".services-slider-active");
  serviceSlider.owlCarousel({
    loop: false,
    margin: 16,
    responsiveClass: true,
    nav: true,
    stagePadding: 116,
    items: 2,
    dotsEach: 1,
    dots: true,
    navText: [
      '<i class="far fa-chevron-left"></i>',
      '<i class="far fa-chevron-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
        stagePadding: 0,
        margin: 10,
      },
      575: {
        items: 1,
        stagePadding: 80,
      },
      991: {
        stagePadding: 40,
      },
      1199: {},
    },
  });
  serviceSlider.on("changed.owl.carousel", function (event) {
    setTimeout(function () {
      let sliderLength = serviceSlider[0].querySelectorAll(".owl-item").length;
      let lastDetect = serviceSlider[0]
        .querySelectorAll(".owl-item")
        [sliderLength - 1].classList.contains("active");
      if (lastDetect) {
        serviceSlider[0].classList.add("last-child-appear");
      } else {
        serviceSlider[0].classList.remove("last-child-appear");
      }
    }, 1);
  });
})(jQuery);

$(document).ready(function () {
  // scroll up
  $(function () {
    $.scrollUp();
  });

  // preloader
  $("#preloader").fadeOut(500);

  AOS.init();
});
