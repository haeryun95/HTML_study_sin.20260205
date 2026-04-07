//  이미지 호버시 애니메이션 동작

$(document).ready(function () {
    $(".list li img").mouseover(function () {
        $(this).attr("src", $(this).data("animated"));
    });
    $(".list li img").mouseleave(function () {
        $(this).attr("src", $(this).data("static"));
    });

    $(".list li").click(function () {
        $(".modal").addClass("show");
        $(".modal").append(`
            <div class='item-box'>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/${$(this).find("img").data("video")}?si=ySRwdgsEecYZ-mqA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            `);
    });
    $(".modal .dim").click(function () {
        $(".modal").removeClass("show");
        $(".modal .item-box").remove();
    });
});
