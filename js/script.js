$(document).ready(function() {

    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#header').addClass('scrolled');
        } else {
            $('#header').removeClass('scrolled');
        }
    });


    // PARALLAX
    const parallax = document.getElementById("parallax");
        // Parallax Effect for DIV 1
        window.addEventListener("scroll", function () {
        let offset = window.pageYOffset;
        parallax.style.backgroundPositionY = offset * 0.7 + "px";
        // DIV 1 background will move slower than other elements on scroll.
    });


});