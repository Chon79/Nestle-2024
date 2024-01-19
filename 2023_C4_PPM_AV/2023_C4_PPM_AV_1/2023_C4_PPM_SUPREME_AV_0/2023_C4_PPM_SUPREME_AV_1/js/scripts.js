let btn_home = document.querySelector(".btn-home");
btn_home.addEventListener("click",() => {
    jumptoSlide('2023_C4_PPM_A_HOME_AV.zip', 'PPMA');
});
let btn_prev = document.querySelector(".btn-prev");
btn_prev.addEventListener("click",() => {  
    jumptoSlide('2023_C4_PPM_A_HOME_AV.zip', 'PPMA');
});
let btn_next = document.querySelector(".btn-next");
btn_next.addEventListener("click",() => {
    jumptoSlide('2023_C4_PPM_SUPREME_AV_2.zip', 'PPMA');
});
let btn_ref = document.querySelector(".btn-ref");
btn_ref.addEventListener("click",() => {
    let popup = document.querySelector('.popup-referencias');
    popup.classList.toggle('popup-referencias-up');
});
let btn_close_ref = document.querySelector(".btn-close-referencias");
btn_close_ref.addEventListener("click",() => {
    let popup = document.querySelector('.popup-referencias');
    popup.classList.toggle('popup-referencias-up');
});
let btn_popup1 = document.querySelector(".btn-popup1");
btn_popup1.addEventListener("click", () => {
    let popup = document.querySelector(".popup-container");
    popup.style.display = 'block';
    popup.classList.add('img-popup1','animate__zoomIn');
});
let btn_popup2 = document.querySelector(".btn-popup2");
btn_popup2.addEventListener("click", () => {
    let popup = document.querySelector(".popup-container");
    popup.style.display = 'block';
    popup.classList.add('img-popup2','animate__zoomIn');
});
let btn_popup3 = document.querySelector(".btn-popup3");
btn_popup3.addEventListener("click", () => {
    let popup = document.querySelector(".popup-container");
    popup.style.display = 'block';
    popup.classList.add('img-popup3','animate__zoomIn');
});
let btn_close_popup = document.querySelector(".btn-close-popup");
btn_close_popup.addEventListener("click", () => {
    let popup = document.querySelector(".popup-container");
    popup.classList.add('animate__zoomOut');
    setTimeout(() => {
        popup.style.display = 'none';
        popup.className = 'popup-container animate__animated';
    },400)
});

$(function() {
    $("#mainWrapper").swipe({
        //Generic swipe handler for all directions
        swipe: async function(event, direction, distance, duration, fingerCount, fingerData) {
            if (direction == 'left') { // avanza
                jumptoSlide('2023_C4_PPM_SUPREME_AV_2.zip', 'PPMA');
            } else if (direction == 'right') { // retrosede
                jumptoSlide('2023_C4_PPM_A_HOME_AV.zip', 'PPMA');
            }
        },
        threshold: 75,
        allowPageScroll: "auto"
    });
});