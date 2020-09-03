$(document).ready(function () {

  $('.owl-carousel').owlCarousel({
    items: 8,
    loop: true,
    margin: 10,
    merge: true,
    nav: true,
    navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
    responsive: {
      678: {
        mergeFit: true
      },
      1000: {
        mergeFit: false
      }
    }
  });

});