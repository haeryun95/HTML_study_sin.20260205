document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger);

    const ani1 = gsap.timeline();

    ani1.to("#section01 .parallax-item-img", { rotate: 720, scale: 0, borderRadius: "50%" }).to("#section01 .parallax-item-img", {
        rotate: 0,
        scale: 1,
        borderRadius: 20,
    });

    ScrollTrigger.create({
        animation: ani1,
        trigger: "#section01",
        start: "top top",
        // end: "bottom top",
        end: "+=5000",
        scrub: true,
        pin: true,
        anticipatePin: 1,
        //anticipatePin은 GSAP ScrollTrigger 플러그인의 설정 중 하나로, 요소가 핀(Pin, 즉 고정)되기 전에 스크롤 시스템이 미리 대응할 수 있도록 합니다. 이 설정은 스크롤 시 요소가 고정되기 직전의 순간을 조절하여, 스크롤 애니메이션과 핀 과정에서의 부드러운 전환을 위해 사용됩니다. anticipatePin의 값은 1 이상의 숫자로 설정할 수 있으며, 이 값은 핀이 실행되기 전에 얼마나 많은 스크롤 (단위: 스크롤 트리거 지점의 퍼센트)이 미리 반영될 것인지를 결정합니다.
    });

    //타임라인이있으면 스크롤트리거를 따로 뺌

    //02 이미지 순차적으로 나오게하기
    const ani2 = gsap.timeline();

    ani2.from("#section02 .i1", {
        y: -100,
        opacity: 0,
        borderRadius: "50%",
    })
        .from("#section02 .i2", {
            y: 100,
            opacity: 0,
            borderRadius: "50%",
        })
        .from("#section02 .i3", {
            y: -100,
            // opacity: 0,
            //opacity를 쓸경우 문제가 생김
            autoAlpha: 0,
            borderRadius: "50%",
        });

    ScrollTrigger.create({
        animation: ani2,
        trigger: "#section02",
        start: "top top",
        end: "+=2000",
        scrub: true,
        pin: true,
        anticipatePin: 1,
    });

    //03 이미지 랜덤으로 나오게 하기
    const ani3 = gsap.timeline();
    ani3.from("#section03 .parallax-item-img", {
        autoAlpha: 0,
        y: -100,
        ease: "back.out(4)",
        stagger: {
            amount: 2,
            from: "random",
        },
    });
    ScrollTrigger.create({
        animation: ani3,
        trigger: "#section03",
        start: "top top",
        end: "+=3000",
        scrub: 2,
        pin: true,
        anticipatePin: 1,
    });

    //04 이미지 축소
    const ani4 = gsap.timeline();
    ani4.from("#section04 .parallax-item-img", {
        autoAlpha: 0,
        scale: 10,
        width: "100vw",
        height: "100vh",
    });
    ScrollTrigger.create({
        animation: ani4,
        trigger: "#section04",
        start: "top top",
        end: "+=2000",
        scrub: true,
        pin: true,
        anticipatePin: 1,
    });

    //05 텍스트 애니메이션

    const ani5 = gsap.timeline();
    ani5.from("#section05 .t1", { xPercent: 300 });
    ani5.from("#section05 .t2", { xPercent: -300 });
    ani5.from("#section05 .t3", { xPercent: 300 });
    ani5.from("#section05 .t4", { xPercent: -300 });

    ScrollTrigger.create({
        animation: ani5,
        trigger: "#section05",
        start: "top top",
        end: "+=2000",
        scrub: true,
        pin: true,
        anticipatePin: 1,
    });

    //06 텍스트 확대
    const ani6 = gsap.timeline();
    ani6.to("#section06 .parallax-item-text", {
        scale: 40,
    });
    ani6.to("#section06 .parallax-item-text", {
        autoAlpha: 0,
    });
    ScrollTrigger.create({
        animation: ani6,
        trigger: "#section06",
        start: "top top",
        end: "+=4000",
        scrub: true,
        pin: true,
        anticipatePin: 1,
    });

    //07 텍스트 제자리 애니메이션
    const ani7 = gsap.timeline();
    ani7.from("#section07 .t1", { autoAlpha: 0, duration: 1, y: 50 }, "+=1");
    ani7.from("#section07 .t2", { autoAlpha: 0, duration: 1, y: 50 }, "+=1");
    ani7.from("#section07 .t3", { autoAlpha: 0, duration: 1, y: 50 }, "+=1");
    ani7.from("#section07 .t4", { autoAlpha: 0, duration: 1, y: 50 }, "+=1");
    ani7.from("#section07 .t5", { autoAlpha: 0, duration: 1, y: 50 }, "+=1");
    ani7.from("#section07 .t6", { autoAlpha: 0, duration: 1, y: 50 }, "+=1");
    ani7.from("#section07 .t7", { autoAlpha: 0, duration: 1, y: 50 }, "+=1");
    ani7.from("#section07 .t8", { autoAlpha: 0, duration: 1, y: 50, scale: 2 }, "+=1");

    ScrollTrigger.create({
        animation: ani7,
        trigger: "#section07",
        start: "top top",
        end: "+=6000",
        scrub: true,
        pin: true,
        anticipatePin: 1,
    });

    //08 텍스트 애니메이션
    const ani8 = gsap.timeline();
    ani8.from("#section08 .t1", { x: innerWidth * 1 });
    ani8.from("#section08 .t2", { x: innerWidth * -1 });
    ani8.from("#section08 .t3", { x: innerWidth * 1 });
    ani8.from("#section08 .i1", { y: innerHeight * 1, rotate: 360, scale: 5.5 });

    ScrollTrigger.create({
        animation: ani8,
        trigger: "#section08",
        start: "top top",
        end: "+=6000",
        scrub: true,
        pin: true,
        anticipatePin: 1,
    });

    //09 이미지 확대
    const ani9 = gsap.timeline();
    ani9.to("#section09 .parallax-item-img", { scale: 13 });
    ani9.to("#section09 .parallax-item-img", { autoAlpha: 0 });

    ScrollTrigger.create({
        animation: ani9,
        trigger: "#section09",
        start: "top top",
        end: "+=4000",
        scrub: true,
        pin: true,
        anticipatePin: 1,
    });

    //10 가로 스크롤
    let item = gsap.utils.toArray("#section10 .parallax-item-img");
    //gsap은 유사배열(노드리스트)를 지원하지않는다.
    gsap.to(item, {
        x: `${-innerWidth - 400}`, //중요
        scrollTrigger: {
            trigger: "#section10",
            start: "top top",
            end: `+=${item.length * 500}`, //속도와 관련
            scrub: true,
            pin: true,
        },
    });
});
