// Plugin @RokoCB :: Return the visible amount of px
// of any element currently in viewport.
// stackoverflow.com/questions/24768795/
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >500) {
      alert('adasd');
        $(".clearHeader").addClass("darkHeader");
    } else {
        $(".clearHeader").removeClass("darkHeader");
    }
});