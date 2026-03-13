const swiper = new Swiper(".swiperList", {
    loop: true,
    // autoplay: true,
    grabCursor: true,
    slidesPerView: 3,
    spaceBetween: 14,
    // If we need pagination
    pagination: {
        el: ".slider-pagination",
        clickable: true,
        type: "fraction",
    },

    // Navigation arrows
    navigation: {
        nextEl: ".slider-arrow-next",
        prevEl: ".slider-arrow-prev",
    },
});
