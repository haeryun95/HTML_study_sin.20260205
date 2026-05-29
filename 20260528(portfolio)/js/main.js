$(document).ready(function () {
    // var typed = new Typed("#element", {
    //     strings: ["지치고 병든 나"],
    //     typeSpeed: 50,
    // });

    var typed = new Typed("#animatingString", {
        stringsElement: "#typedStr",
        typeSpeed: 50,
    });

    $("#wave-1").wavify({
        height: 800, //파도 높이
        bones: 3, //파도 갯수
        amplitude: 40, // 파도 깊이
        color: "#9a48fa",
        speed: 0.15,
    });
    $("#wave-2").wavify({
        height: 700, //파도 높이
        bones: 4, //파도 갯수
        amplitude: 40, // 파도 깊이
        color: "#140a42",
        speed: 0.25,
    });
});
