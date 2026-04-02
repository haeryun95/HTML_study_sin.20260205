$(document).ready(function () {
    const headerHeight = $("header").outerHeight();
    const mainMenuLists = $(".mainmenu > li");
    const mainMenuUls = $(".mainmenu");
    const subMenuUls = $(".submenu");

    // const maxMenuListsHeight = Math.max(...Array.from($(".submenu"), (el) => el.offsetHeight));

    //메서드(함수)         | 포함범위
    // height()             content
    //innerHeight()         content+padding
    //outerHeight()         content + padding + border
    //outerHeight(true)     content + padding + border + margin

    let subMenuMaxHeight = 0;

    for (let i = 0; i < subMenuUls.length; i++) {
        if (subMenuUls.eq(i).outerHeight() > subMenuMaxHeight) subMenuMaxHeight = subMenuUls.eq(i).outerHeight();
    }

    //nav or ul에 호버시
    mainMenuUls.mouseover(function () {
        //선택자.css('속성', '속성값')
        let index = $(this).index();
        //현재 호버된 li === this
        $("header").css("height", `${headerHeight + subMenuMaxHeight}px`);
    });
    mainMenuUls.mouseleave(function () {
        //선택자.css('속성', '속성값')
        $("header").css("height", `${headerHeight}px`);
    });
});
