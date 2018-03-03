/* ===================================================
                        Preloader
=================================================== */
$(window).on('load', function() { // makes sure whole site is loaded
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});