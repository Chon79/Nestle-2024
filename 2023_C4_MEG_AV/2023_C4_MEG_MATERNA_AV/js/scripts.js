let btn_home = document.querySelector(".btn-home");
btn_home.addEventListener("click",() => {
    // window.location.href = "../GENERAL-HOME-2023-c4/index.html";
    jumptoSlide('2023_C4_MEG_HOME_AV.zip','MEG');
});
let btn_prev = document.querySelector(".btn-prev");
btn_prev.addEventListener("click",() => {  
    // window.location.href = "../NIDAL-2023-c4/index.html";
    jumptoSlide('2023_C4_MEG_NIDAL_AV.zip','MEG');
});
let btn_next = document.querySelector(".btn-next");
btn_next.addEventListener("click",() => {
    // window.location.href = "../GERBER-2023-c4/index.html";
    jumptoSlide('2023_C4_MEG_BABYFOOD_AV.zip','MEG');
    
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
let btn_alimentos = document.querySelector(".btn-preconcepcion");
btn_alimentos.addEventListener("click", () => {
    let popup = document.querySelector(".popup-container");
    popup.style.display = 'block';
    popup.classList.add('img-alimentos','animate__zoomIn');
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
                // window.location.href = "../GERBER-2023-c4/index.html";
                jumptoSlide('2023_C4_MEG_BABYFOOD_AV.zip','MEG');
            } else if (direction == 'right') { // retrosede
                // window.location.href = "../NIDAL-2023-c4/index.html";
                jumptoSlide('2023_C4_MEG_NIDAL_AV.zip','MEG');
            }
        },
        threshold: 75,
        allowPageScroll: "auto"
    });
});
function jumptoSlide (zip, presentation) {
    document.location = "veeva:gotoSlide(" + zip + "," + presentation + ")";
}