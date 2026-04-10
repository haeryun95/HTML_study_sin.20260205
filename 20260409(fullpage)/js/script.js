$(document).ready(function () {
    //각 섹션들의 위치값이 필요
    let sectionPos = [];
    //활성화된 섹션의 인덱스를 저장하는 변수
    let sectionIndex = 0;
    //섹션의 슬라이딩 속도
    const sectionSpeed = 500;
    //풀페이지 기능 활성화 여부 {true : 활성화 / false : 비활성화}
    //모바일 환경에서는 풀페이지 기능 비활성화
    let fullPageActive = true; //상태변수
    //연속 휠 막기
    // true : 스크롤이 이전에 발생하여 마우스 휠 이벤트 함수가 호출되어 있는 상태
    // false : 스크롤이 발생되지 않아 마우스 이벤트함수가 호출되지 않는 상태
    let scrolling = false;

    //현재창의 너비를 측정하여 full page 기능 활성화 여부 판단
    function fullPageCheckFn() {
        let windowWidth = $(window).innerWidth();
        const sectionMenu = $(".section-menu");

        if (windowWidth < 1000) {
            fullPageActive = false;
            sectionMenu.stop().hide();
        } else {
            fullPageActive = true;
            sectionMenu.stop().show();
        }
    }
    fullPageCheckFn();

    //각 섹션들의 위치 파악 -> 배열에 저장
    const sections = $("section");
    const footer = $(".footer");
    function readSectionPosFn() {
        sections.each(function (index, section) {
            let position = $(this).offset().top;
            position = Math.ceil(position);
            sectionPos[index] = position;
        });
        //푸터 위치 추가 및 변경
        sectionPos[sectionPos.length] = Math.ceil(footer.offset().top);
    }

    readSectionPosFn();
    let sectionTotal = sectionPos.length;

    //마우스휠 체크후 섹션이동
    // $(window).on("mousewheel", function (event) {
    //     if (event.originalEvent.wheelDelta > 0) {
    //         console.log("스크롤 위로", event.originalEvent.wheelDelta);
    //     } else {
    //         console.log("스크롤 아래로", event.originalEvent.wheelDelta);
    //     }
    // });

    $(window).on("mousewheel DOMMouseScroll", function (e) {
        let scrollUpDown = e.originalEvent.wheelDelta;
        if (!fullPageActive) return;
        if (scrolling) return;

        scrolling = true;

        if (scrollUpDown < 0) {
            //스크롤 아래 방향
            sectionIndex++;
            if (sectionIndex >= sectionTotal) {
                sectionIndex = sectionTotal - 1;
            }
        } else {
            //스크롤 위 방향
            sectionIndex--;
            if (sectionIndex <= 0) {
                sectionIndex = 0;
                //음수가 되면 안됨
            }
        }
        $("html,body").animate(
            {
                scrollTop: sectionPos[sectionIndex],
            },
            sectionSpeed,
            function () {
                scrolling = false;
            },
        );
    });
    $("html,body").animate(
        {
            scrollTop: sectionPos[sectionIndex],
        },
        50,
        function () {
            scrolling = false;
        },
    );

    //창이 리사이징이 되면 호출될 함수
    //창의 높이가 바뀌면, 위치값을 저장하고 있는 배열 (sectionPos[])의 크기에 맞는 위치 값을 갱신한후 fullpage 작동시킴

    function resizeFn() {
        fullPageCheckFn();
        readSectionPosFn();
        if (fullPageActive) {
            //활성화 상태이면 위치 재조정
            $("html,body").animate(
                {
                    scrollTop: sectionPos[sectionIndex],
                },
                50,
                function () {
                    scrolling = false;
                },
            );
        }
    }

    //디바운스 기능을 추가 debounce 기능 추가
    let resizeTimer;

    // $(window).on("resize", resizeFn);
    $(window).on("resize", function () {
        window.clearTimeout(resizeTimer);
        resizeTimer = window.setTimeout(resizeFn, 300);
    });
});
