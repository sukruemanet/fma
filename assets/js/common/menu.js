

$(function () {
    $(".mobile-menu").click(function (event) {
        event.stopPropagation();
        $("#hamburger-menu").addClass("open");
        $('.menu-content').addClass("open");
        $('.mobile-menu-content').addClass('visible');
        $('.menu-close').addClass('visible');
        smoother.paused(true);
    });
});






    






