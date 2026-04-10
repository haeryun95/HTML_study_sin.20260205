$(document).ready(function(){
    const header = $('.page-header')
    console.dir(header)
    let headerOffsetTop = header.offset().top
    console.log(headerOffsetTop)
    $(window).on('scroll',function(){
        let scrollTop = $(this).scrollTop()
        console.log(scrollTop)
        if(scrollTop > headerOffsetTop){
            header.addClass('sticky')
        }else {
            header.removeClass('sticky')
        }
    })
})