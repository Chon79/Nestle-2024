let btn_home = document.querySelector(".btn-home");
btn_home.addEventListener("click",() => {
    jumptoSlide('2023_C4_PPM_B_HOME_AV.zip', 'PPMB');
});
let btn_prev = document.querySelector(".btn-prev");
btn_prev.addEventListener("click",() => {  
    
});
let btn_next = document.querySelector(".btn-next");
btn_next.addEventListener("click",() => {
    jumptoSlide('2023_C4_EXP_HOME_AV.zip', 'EXP');
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

$(function() {
    $("#mainWrapper").swipe({
        //Generic swipe handler for all directions
        swipe: async function(event, direction, distance, duration, fingerCount, fingerData) {
            if (direction == 'left') { // avanza
                jumptoSlide('2023_C4_EXP_HOME_AV.zip', 'EXP');
            } else if (direction == 'right') { // retrosede
                jumptoSlide('2023_C4_PPM_GSS_AV_2.zip', 'PPMB');
            }
        },
        threshold: 75,
        allowPageScroll: "auto"
    });
});