const swiper = new Swiper(".swiperList", {
    effect: "coverflow",
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 3,
    coverflowEffect: {
        rotate: 10,
        stretch: 0,
        depth: 100,
        modifier: 2,
        slideShadows: true,
    },

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: ".slider-arrow-next",
        prevEl: ".slider-arrow-prev",
    },
});
