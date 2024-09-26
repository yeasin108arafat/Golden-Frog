$(document).ready(function() {

    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#header').addClass('scrolled');
        } else {
            $('#header').removeClass('scrolled');
        }
    });


    // PARALLAX
    // const parallax = document.getElementById("parallax");
    //     // Parallax Effect for DIV 1
    //     window.addEventListener("scroll", function () {
    //     let offset = window.pageYOffset;
    //     parallax.style.backgroundPositionY = offset * 0.2 + "px";
    //     // DIV 1 background will move slower than other elements on scroll.
    // });

    // const grid = document.querySelector('.product-grid-content');

    // function addItems() {
    //     for (let i = 0; i < 3; i++) {
    //         const item = document.createElement('div');
    //         item.classList.add('grid-item');
    //         const img = document.createElement('img');
    //         img.src = `https://source.unsplash.com/random/${Math.floor(Math.random() * 100) + 200}x${Math.floor(Math.random() * 100) + 200}`;
    //         item.appendChild(img);
    //         grid.appendChild(item);
    //     }
    // }

    // // Load initial items
    // addItems();

    // // Optional: Load more items on scroll or button click
    // window.addEventListener('scroll', () => {
    //     if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
    //         addItems();
    //     }
    // });

    
    $(".testimonial-content").owlCarousel({
        loop: true,
        items: 3,
        margin: 30,
        dots: true,
        nav: false,
        mouseDrag: true,
        autoplay: false,
        autoplayTimeout: 4000,
        smartSpeed: 300
    });



});