const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },

    autoplay: {
        delay: 5000,
    },

    slidesPerView: 1,

    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 15
        },
        
        992: {
            slidesPerView: 3,
            spaceBetween: 20
        }
    }

});