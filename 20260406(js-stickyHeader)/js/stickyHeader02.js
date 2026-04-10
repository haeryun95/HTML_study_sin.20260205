$(document).ready(function(){
    const header = $('.page-header')
        headerclone = $('.page-header-clone')
    // console.log(headerclone)
    let headerOffsetTop = header.offset().top
    // console.log(headerOffsetTop)
    $(window).scroll(function(){
        let scrollTop = $(this).scrollTop()
        // console.log(scrollTop)
        if(scrollTop > headerOffsetTop){
            headerclone.addClass('visible')
        }else {
            headerclone.removeClass('visible')
        }
    })
})