document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger);

    const hide = (item) => {
        gsap.set(item, { autoAlpha: 0 });
    };

    const animate = (item) => {
        let x = 0;
        let y = 0;
        let delay = item.dataset.delay || 0; // 데이터 속성이 없을 경우 대비

        if (item.classList.contains("reveal-LTR")) {
            x = -100;
            y = 0;
        } else if (item.classList.contains("reveal-BTT")) {
            x = 0;
            y = 100;
        } else if (item.classList.contains("reveal-TTB")) {
            x = 0;
            y = -100;
        } else if (item.classList.contains("reveal-RTL")) {
            x = 100;
            y = 0;
        }

        // 초기 상태에서 목적지 상태로 애니메이션 (duration과 ease 추가 권장)
        gsap.fromTo(
            item,
            { autoAlpha: 0, x: x, y: y },
            {
                autoAlpha: 1,
                x: 0,
                y: 0,
                delay: delay,
                duration: 1.25,
                overwrite: "auto",
                ease: "expo",
                scrollTrigger: {
                    toggleActions: "play none reverse none",
                },
            },
        );
    };

    gsap.utils.toArray(".reveal").forEach((item) => {
        hide(item); // 초기 숨김 상태

        ScrollTrigger.create({
            trigger: item,
            start: "top bottom",
            onEnter: () => animate(item),
        });
    });
});
