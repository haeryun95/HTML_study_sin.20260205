$(document).ready(function(){
    const mainHeader = $('#main-header')
    // console.log(mainHeader)

    // $.throttle(시간, 할일) 설정한 시간마다 할일 실행
    // 시간 : 1000 / 10 ==> 1초에 10회 실행
    // 할일 : 함수 => 익명함수
    // 연속적으로 실행되는 것(esize와 같은)에 쓰면 좋음.
    
    // $(window).scroll(function(){
    //     console.log('throttle!!!')
    //     if($(this).scrollTop() > 100) {
    //         // if로 한번 더 체크해주면 좋다.
    //         if(!mainHeader.hasClass('shrink')){
    //             // !: not
    //             mainHeader.addClass('shrink')
    //         }
    //     }else {
    //         if(mainHeader.hasClass('shrink')){
    //             mainHeader.removeClass('shrink')
    //         }
    //     }
    // })
    $(window).scroll($.throttle(1000/5, function(){
        console.log('throttle!')
        if($(this).scrollTop() > 100) {
            if(!mainHeader.hasClass('shrink')){
                mainHeader.addClass('shrink')
            }
        }else {
            if(mainHeader.hasClass('shrink')){
                mainHeader.removeClass('shrink')
            }
        }
    }))
})