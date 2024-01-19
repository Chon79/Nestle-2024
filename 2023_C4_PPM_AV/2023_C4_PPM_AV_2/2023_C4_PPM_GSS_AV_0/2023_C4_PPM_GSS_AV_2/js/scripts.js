let btn_home = document.querySelector(".btn-home");
btn_home.addEventListener("click",() => {
    jumptoSlide('2023_C4_PPM_B_HOME_AV.zip', 'PPMB');
});
let btn_prev = document.querySelector(".btn-prev");
btn_prev.addEventListener("click",() => {  
    jumptoSlide('2023_C4_PPM_GSS_AV_1.zip', 'PPMB');
});
let btn_next = document.querySelector(".btn-next");
btn_next.addEventListener("click",() => {
    jumptoSlide('2023_C4_PPM_GSSCONFORT_AV.zip', 'PPMB');
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
let btn_probioticos = document.querySelector(".btn-probioticos");
btn_probioticos.addEventListener("click", () => {
    let popup = document.querySelector(".popup-container");
    popup.style.display = 'block';
    popup.classList.add('img-probioticos','animate__zoomIn');
});
let btn_proteina = document.querySelector(".btn-proteina");
btn_proteina.addEventListener("click", () => {
    let popup = document.querySelector(".popup-container");
    popup.style.display = 'block';
    popup.classList.add('img-proteina','animate__zoomIn');
});
let btn_lactosa = document.querySelector(".btn-lactosa");
btn_lactosa.addEventListener("click", () => {
    let popup = document.querySelector(".popup-container");
    popup.style.display = 'block';
    popup.classList.add('img-lactosa','animate__zoomIn');
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
                jumptoSlide('2023_C4_PPM_GSSCONFORT_AV.zip', 'PPMB');
            } else if (direction == 'right') { // retrosede
                jumptoSlide('2023_C4_PPM_GSS_AV_1.zip', 'PPMB');
            }
        },
        threshold: 75,
        allowPageScroll: "auto"
    });
});