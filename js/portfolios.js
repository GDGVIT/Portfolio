$(document).ready(function () {

    checkDark();

    $('#dark-light-toggle').click(function () {
        toggleDark();
        checkDark();
    })

    // Scroll Clicks
    $("#down-arrow").click(function () {
        $('html, body').animate({
            scrollTop: $("#our-portfolios-scroll").offset().top
        }, 900);
    })

    // Icons Expanders
    $('#board-expander').click(function () {
        if (!$('#board').hasClass('icons-expanded')) {
            $('#board').addClass('icons-expanded');
            $('#board-expander').children().children().text('Show Less');
        }
        else {
            $('#board').removeClass('icons-expanded');
            $('#board-expander').children().children().text('Show All');
        }
        $('html, body').animate({
            scrollTop: $("#board").offset().top - 300
        }, 300);
    })

    $('#github-repo-expander').click(function () {
        if (!$('#github-repos').hasClass('icons-expanded')) {
            $('#github-repos').addClass('icons-expanded');
            $('#github-repo-expander').children().children().text('Show Less');
        }
        else {
            $('#github-repos').removeClass('icons-expanded');
            $('#github-repo-expander').children().children().text('Show All');
        }
    })

    // Close Menu
    $('#menu-close').click(function () {
        $('.main-menu').fadeOut(100);
    })

    $("#main").on('scroll', function () {

        if ($(this).scrollTop() > 0) {
            if (!$('.navbar').hasClass('navbar-scrolled')) {
                $('.navbar').addClass('navbar-scrolled');
            }
        } else {
            if ($('.navbar').hasClass('navbar-scrolled')) {
                $('.navbar').removeClass('navbar-scrolled');
            }
        }
    });

    $('html').css('overflow-x', 'initial');
})

var toggleDark = function () {
    if (!$('body').hasClass('dark')) {
        localStorage.setItem('dark', true);
    }
    else {
        localStorage.setItem('dark', false);
    }
}

var checkDark = function () {

    var dark = localStorage.getItem('dark');

    if (dark === 'true') {
        $('body').addClass('dark');
        $('.dark-light-toggle').children().text('I want light mode');
    }
    else {
        $('body').removeClass('dark');
        $('.dark-light-toggle').children().text('I want dark mode');
    }

}
