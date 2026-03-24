$(function () {
    $("nav").mouseenter(function () {
        $(".header").addClass("down");
    });
    $("nav").mouseleave(function () {
        $(".header").removeClass("down");
    });
});

//visual swiper slider//

const visualSwiper = new Swiper(".sw-visual", {
    loop: true,
    speed: 2000,
    effect: "fade",
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

const menuSwiper = new Swiper(".sw-menu", {
    loop: true,
    speed: 1000,
    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
    },
    slidesPerView: 4,
    navigation: {
        prevEl: ".menu-tab-contents .btn-prev",
        nextEl: ".menu-tab-contents .btn-next",
    },
    breakpoints: {
        1281: {
            //1281 픽셀 이상일 때
            slidesPerView: 4,
        },
        681: {
            //681 픽셀 이상일 때
            slidesPerView: 4,
        },
        361: {
            //361 픽셀 이상일 때
            slidesPerView: 4,
        },
    },
});
const newsSwiper = new Swiper(".sw-news", {
    loop: true,
    speed: 1000,
    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
    },
    slidesPerView: 3,
    navigation: {
        prevEl: ".news-tab-contents .btn-prev",
        nextEl: ".news-tab-contents .btn-next",
    },
    breakpoints: {
        1281: {
            //1281 픽셀 이상일 때
            slidesPerView: 3,
        },
        681: {
            //681 픽셀 이상일 때
            slidesPerView: 2,
        },
        361: {
            //361 픽셀 이상일 때
            slidesPerView: 1,
        },
    },
});
