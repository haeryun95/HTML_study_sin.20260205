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
    slidePrtView: 4,
    navigation: {
        prevEl: ".btn-prev",
        nextEl: ".btn-next",
    },
    breakpoints: {
        1281: {
            //1281 픽셀 이상일 때
            slidePrtView: 4,
        },
        681: {
            //681 픽셀 이상일 때
            slidePrtView: 4,
        },
        361: {
            //361 픽셀 이상일 때
            slidePrtView: 4,
        },
    },
});
