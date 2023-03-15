// JavaScript Document
$(function () {
    //BACK TO TOP
    $("body").append('<div class="backtotop"><i class="fa fa-angle-up" aria-hidden="true"></i></div>');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 10) {
            $('.backtotop').fadeIn();
        } else {
            $('.backtotop').fadeOut();
        }
    });

    $(".backtotop").click(function () {
        $("html, body").animate({scrollTop: 0}, 1000);
    }); // END BACK TO TOP

    // ADD SLIDEDOWN ANIMATION TO DROPDOWN //
    jQuery(function ($) {
        if ($(window).width() > 769) {
            $('ul.nav li.dropdown').hover(function () {
                $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
            }, function () {
                $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
            });
        }
    });
});