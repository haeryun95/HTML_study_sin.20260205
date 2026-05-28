document.addEventListener("DOMContentLoaded", function () {
    // Lenis.js 초기화

    // shopping
    gsap.registerPlugin(ScrollTrigger);
    // ScrollTrigger와 타임라인을 설정
    const shoppingTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: ".section.shopping .section-column:nth-child(1)",
            start: "top 25%",
            end: "bottom 70%",
            scrub: true,
            pin: window.innerWidth > 900, // 너비가 900px초과일때만 pin효과적용
            // markers: true,
        },
    });
    // con-list 내부의 li요소에 대한 애니메이션 설정
    const conListItems = document.querySelectorAll(".con-list > li");
    conListItems.forEach((item, index) => {
        gsap.fromTo(
            item,
            {
                clipPath: "inset(0 0 100% 0)", // 아래에서 위로 가려진 상태
                opacity: 0,
            },
            {
                clipPath: "inset(0 0 0% 0)",
                opacity: 1,
                duration: 0.3,
                scrollTrigger: {
                    trigger: item, //각각 li가 트리거
                    start: "center 90%",
                    end: "center 90%",
                    // markers: true,
                },
            },
        );
    });

    // web gsap
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".section.web-work .section-inner",
            start: "10% 10%",
            end: "+=2500",
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            markers: true,
        },
    });
    tl.fromTo(".web-work h2", { y: 0, opacity: 1 }, { marginTop: "0px", marginBottom: "10px" })
        .fromTo("#card01", { y: "100vh" }, { y: "100px" }, "-=0.8")
        .fromTo("#card01", { scale: 1 }, { scale: 0.9 }, ">")
        .fromTo("#card02", { y: "100vh" }, { y: "100px" }, "+=0.2")
        .fromTo("#card02", { scale: 1 }, { scale: 0.9 }, ">")
        .fromTo("#card03", { y: "100vh" }, { y: "100px" }, "+=0.2")
        .fromTo("#card03", { scale: 1 }, { scale: 0.9 }, ">");

    //timeline
    let cursorImgBox = document.querySelector(".cursor .img-box");
    let workLinks = document.querySelectorAll(".design-timeline a:first-child");

    //커서 이동시 이미지 박스 함께 이동
    document.addEventListener("mousemove", (e) => {
        cursorImgBox.style.top = `${e.clientY}px`;
        cursorImgBox.style.left = `${e.clientX}px`;
        cursorImgBox.animate(
            {
                top: `${e.clientY}px`,
                left: `${e.clientX}px`,
            },
            2000,
        );
    });
    workLinks.forEach((item) => {
        imageUrl = item.getAttribute("data-img");
        console.log("imageUrl::: ", imageUrl);
        let cursorImg = document.querySelector(`${imageUrl}`);
        item.addEventListener("mouseover", () => {
            cursorImgBox.classList.add("on");
            cursorImg.classList.add("on");
        });
        item.addEventListener("mouseout", () => {
            cursorImgBox.classList.remove("on");
            cursorImg.classList.remove("on");
        });
    });
});
