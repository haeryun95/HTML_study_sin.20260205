let timeline01 = gsap.timeline({
    scrollTrigger: {
        trigger: ".visual",
        start: "top top",
        end: "+=2000",
        scrub: 1.5,
        pin: true,
        anticipatePin: 1,
        markers: true,
    },
});

timeline01.fromTo(".visual img", { scale: 1, opacity: 1 }, { scale: "0.4", opacity: "0.3" });
timeline01.to(".visual h1", { opacity: "1" });
