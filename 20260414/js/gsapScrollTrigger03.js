document.addEventListener("DOMContentLoaded", (event) => {
    //플러그인
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".parallax-item-desc").forEach((item) => {
        gsap.to(item, {
            yPercent: -100,
            duration: 0.5,
            ease: "none",
            scrollTrigger: {
                trigger: item,
                start: "top bottom",
                end: "bottom top",
                scrub: 0.5,
            },
        });
    });
    gsap.utils.toArray(".parallax-item-num").forEach((item, idx) => {
        gsap.to(item, {
            xPercent: idx % 2 ? -70 : 70,
            duration: 0.5,
            ease: "none",
            scrollTrigger: {
                trigger: item,
                start: "top bottom",
                end: "bottom top",
                scrub: 0.5,
            },
        });
    });
});
