/*!
  * Theme Js
  */

      $(document).ready(function() {
      $('#fullpage').fullpage({
      //  sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
          navigation: true,
        navigationPosition: 'right',
        anchors: ['Home', 'Who', 'About','Services','Portfolio','Contact'],

        navigationTooltips: ['Home', 'Who', 'About','Services','Portfolio','Contact']
      });
    });


    $(function () {
    
  var filterList = {
  
    init: function () {
    
      // MixItUp plugin
      // http://mixitup.io
      $('#portfoliolist').mixItUp({
        selectors: {
          target: '.portfolio',
          filter: '.filter' 
        },
        load: {
          filter: '.app' // show app tab on first load
        }     
      });               
    
    }

  };
  
  // Run the show!
  filterList.init();
  
});   


    window.onscroll = function() {myFunction()};

var header = document.getElementById("filters");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

$(function () {
  $(document).scroll(function () {
    var $nav = $(".menu");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});
