let btn_home = document.querySelector(".btn-home");
btn_home.addEventListener("click",() => {
    // window.location.href = "../AFFORDABLE-HOME-2023-c4/index.html";
    jumptoSlide('2023_C4_AFF_HOME_AV.zip','AFF');
});
let btn_prev = document.querySelector(".btn-prev");
btn_prev.addEventListener("click",() => {  
    // window.location.href = "../NIDAL-2023-c4/NIDAL-2-2023-c4/index.html";
    jumptoSlide('2023_C4_AFF_NIDAL_AV_2.zip','AFF');
});
let btn_next = document.querySelector(".btn-next");
btn_next.addEventListener("click",() => {
    // window.location.href = "../../EXPERT-PRO-2023-c4/EXPERT-PRO-HOME-2023-c4/index.html";
    jumptoSlide('2023_C4_EXP_HOME_AV.zip','EXP');
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
let btn_alimentos = document.querySelector(".btn-proteina");
btn_alimentos.addEventListener("click", () => {
    let popup = document.querySelector(".popup-container");
    popup.style.display = 'block';
    popup.classList.add('img-alimentos','animate__zoomIn');
});
let btn_proteina = document.querySelector(".btn-lipidos");
btn_proteina.addEventListener("click", () => {
    let popup = document.querySelector(".popup-container");
    popup.style.display = 'block';
    popup.classList.add('img-proteina','animate__zoomIn');
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
                // window.location.href = "../EXPERT-PRO-2023-c4/EXPERT-PRO-1-2023-c4/index.html";
                jumptoSlide('2023_C4_EXP_HOME_AV.zip','EXP');
                
            } else if (direction == 'right') { // retrosede
                // window.location.href = "../NIDAL-2023-c4/NIDAL-2-2023-c4/index.html";
                jumptoSlide('2023_C4_AFF_NIDAL_AV_2.zip','AFF');
            }
        },
        threshold: 75,
        allowPageScroll: "auto"
    });
});
function jumptoSlide (zip, presentation) {
    document.location = "veeva:gotoSlide(" + zip + "," + presentation + ")";
}