let timeline = gsap.timeline({
    default: {
        duration: 1,
        ease: "linear",
    },
    repeatDelay: 1,
    delay: 1,
    // repeat: -1,
    // yoyo: true,
});

timeline.fromTo(
    ".sidebar",
    {
        //width 를 조정해서 할수도 있다.
        //width : 0
        x: "-100%",
        opacity: 0,
    },
    {
        //width : '30%'
        x: "0",
        opacity: 0.7,
    },
);
timeline.fromTo(
    "img",
    {
        opacity: 0,
    },
    {
        opacity: 1,
    },
);
timeline.fromTo(
    ".content",
    {
        x: 100,
        opacity: 0,
    },
    {
        x: -10,
        opacity: 1,
    },
);
