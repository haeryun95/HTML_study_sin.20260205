$(document).ready(function () {
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

    //Dynamically set Scroller start and point

    let triggerStart = $(window).width() > 480 ? "50% 100%" : "35% 100%";

    gsap.utils.toArray(".imgBox").forEach(function (imgBox) {
        gsap.timeline({
            scrollTrigger: {
                trigger: imgBox,
                start: triggerStart,
                end: "100% 0",
                // toggleClass: "active",
                marker: true,
                onEnter: () => {
                    $(imgBox).addClass("active");
                    // imgBox.classList.add("active");
                },
            },
        });
    });
});
