// 1. Lenis 초기화
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: "vertical",
    gestureDirection: "vertical",
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
});

// 2. Lenis와 ScrollTrigger 동기화
// 스크롤이 발생할 때마다 ScrollTrigger를 업데이트
lenis.on("scroll", ScrollTrigger.update);

// 3. GSAP Ticker에 Lenis 연결
gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
});

// 4. GSAP의 성능 최적화 설정
gsap.ticker.lagSmoothing(0);

let t1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".main",
        start: "38% 50%",
        end: "100% 50%",
        scrub: 1.5,
        pin: true,
        anticipatePin: 1,
        markers: true,
    },
});

t1.to(".text", { top: "-6%" }, "a");
t1.to("#card-one", { top: "42%" }, "a");
t1.to("#card-one", { width: "65%", height: "65vh" }, "b");
t1.to("#card-two", { top: "42%" }, "b");
t1.to("#card-two", { width: "75%", height: "75vh" }, "c");
t1.to("#card-three", { top: "42%" }, "c");
t1.to("#card-tree", { width: "75%", height: "80vh" }, "b");

//abcd -> 스테이지. 같은 문지로 통일된 애들은 '스텝'으로 묶인다.
