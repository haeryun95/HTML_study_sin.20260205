$(document).ready(function(){
    const header = $('.page-header')
    // 복제
    const headerClone = header.contents().clone()
    let headerCloneContainer = $('<div class="page-header-clone"></div>')
    headerCloneContainer.append(headerClone)
    // append는 요소를 넣어주는 기능
    // A.append(B)이용
    // : headerCloneContainer(A)요소 안에
    // headerClone(B)요소를 추가(첨부)
    // console.log(headerCloneContainer)

    // body에 .page-header-clone을 삽입
    // A.appendTo(B)이용
    // headerCloneContainer(A)요소를 body(B)안에 추가(첨부)
    headerCloneContainer.appendTo('body')

    // 삽입된 .page-header-clone영역의 로고이미지를 교체
    $('.page-header-clone .site-logo a img').attr('src','images/logo-small.png')

    let thredhold = header.offset().top+header.outerHeight()
    console.log(thredhold)

    $(window).on('scroll',function(){
        let scrollTop = $(this).scrollTop()
        // console.log(scrollTop)
        if(scrollTop > thredhold){
            headerCloneContainer.addClass('visible')
        }else {
            headerCloneContainer.removeClass('visible')
        }
    })
})