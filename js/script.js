$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#header').addClass('scrolled');
        } else {
            $('#header').removeClass('scrolled');
        }
    });
});