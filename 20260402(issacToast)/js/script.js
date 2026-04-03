// $(function(){})
// $(document).ready(function(){})

$(document).ready(function () {
    // popup-zone-close
    $(".popup-close li").click(function () {
        $(".popup-zone").stop().hide();
    });

    $("nav").mouseenter(function () {
        $(".header").addClass("down");
    });
    $("nav").mouseleave(function () {
        $(".header").removeClass("down");
    });
});

//gotop button
$("top-btn").on("click", function (e) {
    e.preventDefault();
    $("html,body").animate(
        {
            scrollTop: 0,
        },
        500,
    );
});

// mobile menu
$(".menuBtn").click(function (e) {
    e.preventDefault();
    let isOpen = $(".mb-menu").hasClass("active");
    if (isOpen == true) {
        //열려 있는 상태(즉, active가 있는 상태)
        $(".mb-menu").removeClass("active");
    } else {
        //닫혀 있는 상태(즉, active가 없는 상태)
        $(".mb-menu").addClass("active");
    }
});
$(".mb-btn-close").click(function (e) {
    e.preventDefault();
    $(".mb-menu").removeClass("active");
});

// 아코디언
$(".mb-menu-list").click(function (e) {
    let hasSubMenu = $(this).hasClass("mb-li-arrow");
    let isOpen = $(this).hasClass("active");
    if (hasSubMenu) {
        //참일 경우(화살표가 있는 목록 : 서브 메뉴가 존재)
        e.preventDefault();
        if (isOpen) {
            //서브메뉴가 열린상태 -> 닫아야함
            $(this).removeClass("active");
            $(this).siblings($(".mb-submenu")).stop().slideUp();
        } else {
            $(".mb-submenu").stop().slideUp();
            $(".mb-menu-list").removeClass("active");
            $(this).addClass("active");
            $(this).siblings($(".mb-submenu")).stop().slideDown();
        }
    } //거짓일 경우(화살표가 없는 목록 : 서브 메뉴가 존재 X)
});
// sw-popup
new Swiper(".sw-popup", {
    loop: true,
    speed: 1000,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    navigation: {
        nextEl: ".popup-btn-next",
        prevEl: ".popup-btn-prev",
    },
    pagination: {
        el: ".sw-paging",
        clickable: true,
    },
});

//sticky header
let didScroll = false; // 현재 스크롤의 위치
let lastScrollTop = 0; //마지막 스크롤의 위치

function hasScrolled() {
    let st = $(window).scrollTop();
    console.log(`현재 스크롤의 위치 : ${st}`);

    if (st > lastScrollTop) {
        //스크롤이 내려감
        if (st < 100) return (lastScrollTop = st);
        $(".header").removeClass("fixed").addClass("noFixed");
        console.log("스크롤 다운");
    } else {
        //스크롤이 올라감
        $(".header").removeClass("noFixed").addClass("fixed");
        console.log("스크롤 업");
    }

    lastScrollTop = st;
}

$(window).scroll(function () {
    didScroll = true;
});

setInterval(function () {
    if (didScroll) hasScrolled();
    didScroll = false;
}, 250);

$("go-brand-btn").click(function (e) {
    e.preventDefault();
    $("html,body").animate(
        {
            scrollTop: $(".visual").height(),
        },
        500,
    );
});

// sw-visual
new Swiper(".sw-visual", {
    loop: true,
    speed: 1500,
    effect: "fade",
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// sw-menu
new Swiper(".sw-menu", {
    loop: true,
    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
    },
    speed: 1000,
    slidesPerView: 4,
    navigation: {
        prevEl: ".btn-prev",
        nextEl: ".btn-next",
    },
    breakpoints: {
        1281: {
            // 1281px 이상
            slidesPerView: 4,
        },
        681: {
            // 681px 이상
            slidesPerView: 3,
        },
        361: {
            // 381px 이상
            slidesPerView: 2,
        },
        0: {
            slidesPerView: 1,
        },
    },
});

// swiper - news
new Swiper(".sw-news", {
    loop: true,
    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
    },
    speed: 1000,
    slidesPerView: 3,
    navigation: {
        prevEl: ".news-btn-prev",
        nextEl: ".news-btn-next",
    },
    breakpoints: {
        681: {
            //681px이상일때
            slidesPerView: 3,
        },
        481: {
            slidesPerView: 2,
        },
        0: {
            slidesPerView: 1,
        },
    },
});

const menuTabBtns = $(".menu-tab-btns ul li ");
const menuTabContents = $(".menu-tab-contents > div");

//swiper 인스터스를 저장하는 배열- 각각의 슬라이드 포기화 코드
let swiperInstance = [];
//초기상태, 첫번탭 표시
menuTabContents.stop().hide().eq(0).show();

menuTabBtns.click(function (e) {
    e.preventDefault();
    let targetIdx = $(this).index();
    menuTabBtns.removeClass("focus");
    $(this).addClass("focus");

    //모든 컨텐츠 숨기기
    menuTabContents.stop().hide();
    menuTabContents.eq(targetIdx).show();

    //클릭된 탭 컨텐츠(swiper slide)
    let currentTapContent = menuTabContents.eq(targetIdx);
    let currentSwiper = currentTapContent.find(".sw-menu");
    let uniqueSwiperClass = `swiper-${targetIdx}`;

    currentSwiper.addClass(uniqueSwiperClass);
    //기존 스와이퍼 제거
    if (swiperInstance[targetIdx]) {
        swiperInstance[targetIdx].destroy();
    }
    //네비게이션 클랙스명 생성해서 할당
    currentTapContent.find(".btn-prev").addClass(`btn-prev-${targetIdx}`);
    currentTapContent.find(".btn-next").addClass(`btn-next-${targetIdx}`);

    //선택된 컨텐츠 swiper 초기화 instance 생성

    swiperInstance[targetIdx] = new Swiper(`.${uniqueSwiperClass}`, {
        loop: true,
        autoplay: {
            delay: 6000,
            disableOnInteraction: false,
        },
        speed: 1000,
        slidesPerView: 4,
        navigation: {
            prevEl: `.btn-prev-${targetIdx}`,
            nextEl: `.btn-next-${targetIdx}`,
        },
        breakpoints: {
            1281: {
                // 1281px 이상
                slidesPerView: 4,
            },
            681: {
                // 681px 이상
                slidesPerView: 3,
            },
            361: {
                // 381px 이상
                slidesPerView: 2,
            },
            0: {
                slidesPerView: 1,
            },
        },
    });
});

menuTabBtns.eq(0).trigger("click");

const newsTabBtns = $(".news-tab-btns ul li");
const newsTabContents = $(".news-tab-contents > div");
let newsSwiperInstance = [];

//초기 상태 -> 첫번쨰 빼고 전부 안보이게
newsTabContents.stop().hide().eq(0).show();

newsTabBtns.click(function (e) {
    e.preventDefault();
    let targetIdx = newsTabBtns.index(this);

    console.log(targetIdx);
    newsTabBtns.removeClass("focus");
    $(this).addClass("focus");

    newsTabContents.stop().hide();
    newsTabContents.eq(targetIdx).stop().show();

    let currentTapContent = newsTabContents.eq(targetIdx);
    let currentSwiper = currentTapContent.find(".sw-news");
    let uniqueSwiperClass = `new-swiper-${targetIdx}`;

    currentSwiper.addClass(uniqueSwiperClass);

    if (newsSwiperInstance[targetIdx]) {
        newsSwiperInstance[targetIdx].destroy();
    }

    // 네비게이션 클래스명 생성해서 할당
    currentTapContent.find(".news-btn-prev").addClass(`news-btn-prev-${targetIdx}`);
    currentTapContent.find(".news-btn-next").addClass(`news-btn-next-${targetIdx}`);

    newsSwiperInstance[targetIdx] = new Swiper(`.${uniqueSwiperClass}`, {
        loop: true,
        autoplay: {
            delay: 6000,
            disableOnInteraction: false,
        },
        speed: 1000,
        slidesPerView: 3,
        navigation: {
            prevEl: `.news-btn-prev-${targetIdx}`,
            nextEl: `.news-btn-next-${targetIdx}`,
        },
        observer: true,
        observeParents: true,
        breakpoints: {
            1281: { slidesPerView: 4 },
            681: { slidesPerView: 3 },
            361: { slidesPerView: 2 },
            0: { slidesPerView: 1 },
        },
    });
});

newsTabBtns.eq(0).trigger("click");
