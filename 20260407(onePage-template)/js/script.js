$(document).ready(function () {
    const mobileBtn = $(".mb-btn"),
        mobileNav = $(".mb-nav"),
        windowMask = $(".window-mask");

    function removeClass() {
        mobileBtn.removeClass("active");
        mobileNav.removeClass("active");
        windowMask.removeClass("active");
    }
    mobileBtn.on("click", function (e) {
        e.preventDefault();
        mobileBtn.toggleClass("active");
        mobileNav.toggleClass("active");
        windowMask.toggleClass("active");
    });

    windowMask.on("click", function (e) {
        removeClass();
    });

    $(window).resize(function () {
        let windowWidth = $(window).outerWidth();
        if (windowWidth > 980) {
            removeClass();
        }
    });

    //인덱스 숫자를 추출하기 위해 li를 가져와야 한다.
    const menu = $("header ul li");
    const contents = $(".section");

    //모바일 메뉴 클릭시 해당 메뉴 섹션으로 이동
    const mbMenu = $(".mb-menu li");
    mbMenu.click(function (e) {
        e.preventDefault();
        let idx = $(this).index();
        let section = contents.eq(idx);

        // .offset().top을 사용해야 함
        let targetTop = section.offset().top - 114;

        $("html, body")
            .stop()
            .animate(
                {
                    scrollTop: targetTop,
                },
                300,
                function () {
                    removeClass();
                    mbMenu.removeClass("active");
                    mbMenu.eq(idx).addClass("active");
                },
            );
    });

    //섹션 이동을 위해 animate 시킨다.
    menu.click(function (e) {
        e.preventDefault();
        let idx = $(this).index();
        let section = contents.eq(idx);

        // .offset().top을 사용해야 함
        let targetTop = section.offset().top - 114;

        $("html, body").stop().animate(
            {
                scrollTop: targetTop,
            },
            300,
        );

        $(window).scroll(function () {
            //섹션의 위치값 파악하고, 스크롤탑의 위치값 파악
            //스크롤의 위치가 오프셋 값보다 높을 경우 -> 해당 색션 내에서 스크롤

            contents.each(function (index, _) {
                if ($(this).offset().top - 114 <= $(window).scrollTop()) {
                    menu.removeClass("on");
                    menu.eq(index).addClass("on");
                }
            });
        });
    });
});
