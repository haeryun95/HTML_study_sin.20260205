$(document).ready(function () {
    $(".mainmenu > li").mouseover(function () {
        $(this).find(".submenu").stop().slideDown();
    });
    $(".mainmenu > li").mouseleave(function () {
        $(this).find(".submenu").stop().slideUp();
    });
});
