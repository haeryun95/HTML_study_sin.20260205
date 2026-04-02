const header = document.querySelector("header"),
    mainMenuList = document.querySelectorAll(".mainmenu > li"),
    subMenu = document.querySelectorAll(".submenu");

//offsetHeight => border포함
//clientHeight => border빼고 padding까지 포함
// ///////////////////////////////////
// let B = A.offsetHeight; //A요소의 border까지의 높이
// let B = A.clientHeight; //A요소의 padding까지의 높이

let headerHeight = header.offsetHeight;
//submenu의 가장 height가 큰 요소의 height값을 저장하는 변수를 선언
let subMenuMaxHeight = 0;
//subMenuMaxHeight 변수 안에 subMenu의 최대 높이를 저장하는 루틴
for (let i = 0; i < subMenu.length; i++) {
    if (subMenu[i].offsetHeight > subMenuMaxHeight) subMenuMaxHeight = subMenu[i].offsetHeight;
}

//li 에 호버시

// for (let i = 0; i < mainMenuList.length; i++) {
//     mainMenuList[i].addEventListener("mouseover", function () {
//         header.style.height = headerHeight + subMenuMaxHeight + "px";
//     });
//     mainMenuList[i].addEventListener("mouseleave", function () {
//         header.style.height = headerHeight + "px";
//     });
// }

//nav or ul에 호버시
let maineMenu = document.querySelector(".mainmenu");

maineMenu.addEventListener("mouseover", function () {
    header.style.height = headerHeight + subMenuMaxHeight + "px";
});
maineMenu.addEventListener("mouseleave", function () {
    header.style.height = headerHeight + "px";
});
