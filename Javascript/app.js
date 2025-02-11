var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("main-nav").style.top = "0";
  } else {
    document.getElementById("main-nav").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}

$(window).scroll(function() {
  $('.skill').each(function() {
      var top_of_element = $(this).offset().top;
      var bottom_of_element = $(this).offset().top + $(this).outerHeight();
      var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
      var top_of_screen = $(window).scrollTop();

      if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element) && !$(this).hasClass('is-visible')) {
          $(this).addClass('is-visible');
      }
  });
});