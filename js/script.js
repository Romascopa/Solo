/* ===================================================
                        Preloader
=================================================== */
$(window).on('load', function() { // makes sure whole site is loaded
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});

/* ===================================================
                        Team Members
=================================================== */
$(function() {
    $('#team-members').owlCarousel({
        items:2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
});