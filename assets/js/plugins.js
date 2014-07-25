$(document).ready(function() {

  $('body a:link').click(function(event) { // the elements you click to scroll
    event.preventDefault();
    var link = this; // you need this if you are using hash links on ex: a href="#link" to id="link"
    $.smoothScroll({
      offset: 1, // adjusts where the scroll will stop so the height of the scrolling element plus the height of the element you are scrolling to.
      speed: 1000,
      scrollTarget: link.hash
    });
  });


  $('.carousel').carousel({
    interval: false
  });
// lazcreative.com/blog/adding-swipe-support-to-bootstrap-carousel-3-0/
  $(".carousel").swiperight(function() {
    $(this).carousel('prev');
  });
  $(".carousel").swipeleft(function() {
    $(this).carousel('next');
  });
});

$(document).ready(function(){
  if (Modernizr.touch) {
    // show the close overlay button
    $(".close-overlay").removeClass("hidden");
    // handle the adding of hover class when clicked
    $(".img").click(function(e){
        if (!$(this).hasClass("hover")) {
            $(this).addClass("hover");
        }
    });
    $(".fx-container").click(function(e){
        if (!$(this).hasClass("hover")) {
            $(this).addClass("hover");
        }
    });
    // handle the closing of the overlay
    $(".close-overlay").click(function(e){
        e.preventDefault();
        e.stopPropagation();
        if ($(this).closest(".img").hasClass("hover")) {
            $(this).closest(".img").removeClass("hover");
        }
    });
  } else {
    // handle the mouseenter functionality
    $(".img").mouseenter(function(){
        $(this).addClass("hover");
    })
    // handle the mouseleave functionality
    .mouseleave(function(){
        $(this).removeClass("hover");
    });
    $(".fx-container").mouseenter(function(){
        $(this).addClass("hover");
    })
        .mouseleave(function(){
        $(this).removeClass("hover");
    });

  }
});

$(document).ready(function(){                       
//Navigation Menu Slider
  $('#nav-expander').on('click',function(e){
    e.preventDefault();
    $('body').toggleClass('nav-expanded');
  });
  
  $('#nav-close, .main-menu a').on('click',function(e){
    closeNav(e);
  });
  
  //menu solution found on stackoverflow
  //stackoverflow.com/questions/16680543/hide-twitter-bootstrap-nav-collapse-on-click
  
  // Initialize navgoco with default options
  $(".main-menu").navgoco({
  caret: '<span class="caret"></span>',
  accordion: false,
  openClass: 'open',
  save: false,
    slide: {
        duration: 700,
        easing: 'swing'
    }
  });
});

function closeNav(e) {
  e.preventDefault();
  $('body').removeClass('nav-expanded');
}


