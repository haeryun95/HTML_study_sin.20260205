$(document).ready(function () {
    $(".m-btn").click(function () {
        $(".m-btn").toggleClass("on");
        $(".m-nav").toggleClass("on");
        $(".window").fadeToggle();
    });
    $(window).resize(function () {
        let windowWidth = $(window).outerWidth();
        if (windowWidth > 640) {
            $(".m-btn").removeClass("on");
            $(".m-nav").removeClass("on");
            $(".window").fadeOut();
        }
    });
});
