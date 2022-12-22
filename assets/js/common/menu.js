

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


// $(document).ready(function () {
//     //Modalbox Open
//     $('.item').click(function () {
//         smoother.paused(true);
//     });

//     //Modalbox Close
//     $('.lg-close').click(function () {
//         smoother.paused(false);
//     });
// });







    






