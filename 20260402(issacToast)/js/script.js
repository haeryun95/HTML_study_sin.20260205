// $(function(){})
// $(document).ready(function(){})

$(document).ready(function(){
    // popup-zone-close
    $('.popup-close li').click(function(){
        $('.popup-zone').stop().hide()
    })

    $('nav').mouseenter(function(){
        $('.header').addClass('down')
    })
    $('nav').mouseleave(function(){
        $('.header').removeClass('down')
    })
})
// mobile menu
$('.menuBtn').click(function(e){
    e.preventDefault();
    let isOpen = $('.mb-menu').hasClass('active')
    if(isOpen == true) { //열려 있는 상태(즉, active가 있는 상태)
        $('.mb-menu').removeClass('active')
    }else { //닫혀 있는 상태(즉, active가 없는 상태)
        $('.mb-menu').addClass('active')        
    }
})
$('.mb-btn-close').click(function(e){
    e.preventDefault()
    $('.mb-menu').removeClass('active')
})

// sw-popup
new Swiper('.sw-popup',{
    loop: true,
    speed: 1000,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    navigation: {
        nextEl: '.popup-btn-next',
        prevEl: '.popup-btn-prev'
    },
    pagination: {
        el:'.sw-paging',
        clickable: true,
    }
})

// sw-visual
new Swiper('.sw-visual',{
    loop: true,
    speed: 1500,
    effect: "fade",
    pagination: {
        el:'.swiper-pagination',
        clickable: true,
    }
})

// sw-menu
new Swiper('.sw-menu',{
    loop:true,
    autoplay:{
        delay: 6000,
        disableOnInteraction: false,
    },
    speed: 1000,
    slidesPerView: 4,
    navigation: {
        prevEl: '.btn-prev',
        nextEl: '.btn-next'
    },
    breakpoints: {
        1281:{ // 1281px 이상
            slidesPerView: 4,
        },
        681:{ // 681px 이상
            slidesPerView: 3,
        },
        361:{ // 381px 이상
            slidesPerView: 2,
        },
        0: { 
            slidesPerView:1,
        }
    }

})

 // swiper - news
    new Swiper('.sw-news',{
        loop: true,
        autoplay: {
            delay: 6000,
            disableOnInteraction: false,
        },
        speed: 1000,
        slidesPerView: 3,
        navigation: {
            prevEl: '.news-btn-prev',
            nextEl: '.news-btn-next',
        },
        breakpoints: {
            681: { //681px이상일때
                slidesPerView: 3,
            },
            481: {
                slidesPerView: 2,
            },
            0: {
                slidesPerView: 1,
            }
        }
    })
