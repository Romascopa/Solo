/* ===================================================
                        Preloader
=================================================== */
$(window).on('load', function () { // makes sure whole site is loaded
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});

/* ===================================================
                        Team Members
=================================================== */
$(function () {
    $('#team-members').owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
});

/* ===================================================
                        Progress Bars
=================================================== */
$(function () {

    $("#progress-elements").waypoint(function () {

        $('.progress-bar').each(function () {
            $(this).animate({
                width: $(this).attr('aria-valuenow') + "%"
            }, 1000);
        });

        this.destroy();
    }, {
        offset: 'bottom-in-view'
    });

    /*
   
   */
});

/* ===================================================
                    Responsive Tabs
=================================================== */
$(function () {
    $("#services-tabs").responsiveTabs({
        animation: 'slide'
    });
});

/* ===================================================
                    Portfolio
=================================================== */
$(window).on('load', function () {
    // Initialize isotope
    $("#isotope-container").isotope({

    });

    //filter items on button click
    $("#isotope-filters").on('click', 'button', function () {
        // get filter value
        var filterValue = $(this).attr('data-filter');

        // filter the portfolio view
        $("#isotope-container").isotope({
            filter: filterValue
        });

        // activate the button
        $("#isotope-filters").find('.active').removeClass('active');
        $(this).addClass('active');
    });
});

/* ===================================================
                    Magnifier
=================================================== */
$(function () {
    $("#portfolio-wrapper").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});