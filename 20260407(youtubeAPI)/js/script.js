let tag = document.createElement("script");
console.log(tag);

tag.src = "https://www.youtube.com/iframe_api";

let firstScriptTag = document.getElementsByTagName("script")[0];

//원래 있던 첫번쨰 script보다 전에 집어넣어진 tag 스크립트
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
    new YT.Player("player", {
        videoId: "An6LvWQuj_8",
        playerVars: {
            autoplay: true,
            loop: true,
            // rel: 0,
            // start: 40,
            // end: 60,
            controls: 1,
            playlist: "An6LvWQuj_8,CVtQL71PKno",
        },
        events: {
            onReady: function (e) {
                e.target.mute();
                e.target.playVideo();
            },
        },
    });
}
