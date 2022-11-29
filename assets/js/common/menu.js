

$(function () {
    $(".mobile-menu").click(function (event) {
        event.stopPropagation();
        $("#hamburger-menu").addClass("open");
        $('.menu-content').addClass("open");
        $('.mobile-menu-content').addClass('visible');
        $('.menu-close').addClass('visible');
        smoother.paused(true);
    });

    $(".menu-close").click(function (event) {
        event.stopPropagation();
        $("#hamburger-menu").removeClass("open");
        $('.menu-content').removeClass("open");
        $('.mobile-menu-content').removeClass('visible');
        $('.menu-close').removeClass('visible');
        smoother.paused(false);
    });

    $(".cookies-close").click(function (event) {
        $(".cookies").removeClass("visible");
    });


    //Header Menu
    $(document).ready(function () {
        $(function () {
            var header = $("header");
    
            $(window).scroll(function () {
                var scroll = $(window).scrollTop();
                if (scroll >= 50) {
                    header.addClass("scrolled");
                } else {
                    header.removeClass("scrolled");
                }
            });
        });
    });

    $(document).ready(function () {
        'use strict';
        var c, currentScrollTop = 0,
            navbar = $('header');
    
        $(window).scroll(function () {
            var a = $(window).scrollTop();
            var b = navbar.height();
    
            currentScrollTop = a;
    
            if (c < currentScrollTop && a > b + b) {
                navbar.addClass("scrollUp");
            } else if (c > currentScrollTop && !(a <= b)) {
                navbar.removeClass("scrollUp");
            }
            c = currentScrollTop;
    
            console.log(a);
        });
    })

    $(".top").click(function (event) {
        $("header").removeClass("scrollUp");
    });

});



    






