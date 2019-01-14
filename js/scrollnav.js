$(function() {
    var header = $(".navbar");

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 100) {
          header.addClass("bg-dark");
          header.removeClass("nav-trans");
        } else {
          header.addClass("nav-trans");
          header.removeClass("bg-dark");
        }
    });
});
