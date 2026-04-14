// use a script tag or an external JS file
document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger);

    const box1 = document.querySelector("#section01 .parallax-item-img");
    const box2 = document.querySelector("#section02 .parallax-item-img");
    const box3 = document.querySelector("#section03 .parallax-item-img");
    const box4 = document.querySelector("#section04 .parallax-item-img");
    const box5 = document.querySelector("#section05 .parallax-item-img");
    const box6 = document.querySelector("#section06 .parallax-item-img");
    const box7 = document.querySelector("#section07 .parallax-item-img");
    const box8 = document.querySelector("#section08 .parallax-item-img");
    const box9 = document.querySelector("#section09 .parallax-item-img");

    //01
    gsap.to(box1, {
        x: 500,
        rotation: 360,
        duration: 1,
        borderRadius: "50%",
    });

    //02
    gsap.to(box2, {
        x: 500,
        borderRadius: "50%",
        duration: 2,
        scrollTrigger: {
            trigger: box2,
            start: "top bottom", //box2 의 top , 뷰포트의 bottom
            end: "bottom top", //box2의 bottom, 뷰포트의 top
            //즉, start -> 요소의 위쪽과 뷰포트의 아랫쪽이 만나는 지점이 시작 트리거
            //    end -> 요소의 아랫쪽과 뷰포트의 위쪽이 만나는 지점이 끝 트리거
            // markers: true, // 마커
        },
    });

    //03
    gsap.to(box3, {
        x: 500,
        rotation: 360,
        duration: 2,
        borderRadius: "50%",
        scrollTrigger: {
            trigger: box3,
            start: "top 50%", //뷰포트 상에서 50%
            end: "bottom 20%",
        },
    });

    //04
    gsap.to(box4, {
        x: 500,
        rotation: 360,
        duration: 2,
        borderRadius: "50%",
        scrollTrigger: {
            trigger: box4,
            start: "center 50%", //뷰포트 상에서 50%
            end: "bottom 30%",
            // markers: true, // 마커
            //toggleActions =>
            /* toggleActions: "1번 2번 3번 4번"
                1. onEnter: 정방향 진입 (내려올 때 start 통과) -> play (재생)
                2. onLeave: 정방향 퇴장 (내려올 때 end 통과) -> none (보통 비워둠)
                3. onEnterBack: 역방향 진입 (올라갈 때 end 통과) -> reverse (반대로 재생)
                4. onLeaveBack: 역방향 퇴장 (올라갈 때 start 통과) -> none (보통 비워둠)
            */
            // toggleActions: "play pause reverse restart",
            toggleActions: "play none reverse none",
        },
    });

    //05 scrub
    gsap.to(box5, {
        x: 500,
        rotation: 360,
        // duration: 2,
        borderRadius: "50%",
        scrollTrigger: {
            trigger: box5,
            start: "top 50%", //뷰포트 상에서 50%
            end: "bottom 20%",
            scrub: 0, // 0일때는 지연이 없다. 1일때는 자연스러운 연결(지연) 수치를 크게 넣으면 지연 시간이 더 커진다.
            toggleActions: "play none reverse none",
        },
    });

    //06 pin
    gsap.to(box6, {
        duration: 4,
        x: 500,
        rotate: 360,
        borderRadius: "50%",
        scrollTrigger: {
            trigger: "#section06", // pin을 사용할때면 section 전체가 트리거가 되는 경우가 많다.
            start: "top top",
            end: "bottom 20%",
            scrub: 1.5,
            pin: true,
            // markers: true, // 마커
        },
    });

    //07 toggle class
    gsap.to(box7, {
        duration: 4,
        x: 500,
        rotate: 360,
        borderRadius: "50%",
        scrollTrigger: {
            trigger: box7,
            start: "top 50%",
            end: "bottom top",
            scrub: 1.5,
            toggleClass: "active",
        },
    });

    //08 callback
    gsap.to(box8, {
        duration: 4,
        x: 500,
        rotate: 360,
        borderRadius: "50%",
        scrollTrigger: {
            trigger: box8,
            start: "top 50%",
            end: "bottom top",
            scrub: 1.5,
            toggleClass: "active",
            onEnter: function () {
                console.log("onEnter");
            },
            onLeave: () => {
                console.log("onLeave");
            },
        },
    });
});
