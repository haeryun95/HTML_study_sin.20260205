$(function () {
    $("nav").mouseenter(function () {
        $(".header").addClass("down");
    });
    $("nav").mouseleave(function () {
        $(".header").removeClass("down");
    });
});
