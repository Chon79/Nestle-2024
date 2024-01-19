let btn_popup_althera = document.querySelector('.btn-popup-althera');
btn_popup_althera.addEventListener("click",() => {
    showPopup('img-althera');
});
let btn_popup_alfare = document.querySelector('.btn-popup-alfare');
btn_popup_alfare.addEventListener("click",() => {
    showPopup('img-alfare');
});
let btn_popup_alfamino = document.querySelector('.btn-popup-alfamino');
btn_popup_alfamino.addEventListener("click",() => {
    showPopup('img-alfamino');
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
let btn_home = document.querySelector(".btn-home");
btn_home.addEventListener("click",() => {
    const perfil = localStorage.getItem('selectedPerfil');
    let file_name = `2023_C4_PPM_${perfil}_HOME_AV.zip`;
    let id = 'PPM' + perfil;
    jumptoSlide(file_name, id);
});
let btn_prev = document.querySelector(".btn-prev");
btn_prev.addEventListener("click",() => {
    jumptoSlide('2023_C4_EXP_HOME_AV.zip', 'EXP');
});
let btn_next = document.querySelector(".btn-next");
btn_next.addEventListener("click",() => {
    const perfil = localStorage.getItem('selectedPerfil');
    let id = 'PPM' + perfil;
    jumptoSlide('2023_C4_PPM_OPTIMAL_AV.zip', id);
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
let btn_sistema = document.querySelector(".btn-sistema");
btn_sistema.addEventListener("click", () => {
    let popup = document.querySelector(".popup-container-video");
    popup.style.display = 'block';
    popup.classList.add('img-sistema','animate__zoomIn');
});
let btn_close_popup_video = document.querySelector(".btn-close-popup-video");
btn_close_popup_video.addEventListener("click", () => {
    let popup = document.querySelector(".popup-container-video");
    popup.classList.add('animate__zoomOut');
    setTimeout(() => {
        popup.style.display = 'none';
        popup.className = 'popup-container-video animate__animated';
    },400)
});

$(function() {
    $("#mainWrapper").swipe({
        //Generic swipe handler for all directions
        swipe: async function(event, direction, distance, duration, fingerCount, fingerData) {
            if (direction == 'left') { // avanza
                const perfil = localStorage.getItem('selectedPerfil');
                let id = 'PPM' + perfil;
                jumptoSlide('2023_C4_PPM_OPTIMAL_AV.zip', id);
            } else if (direction == 'right') { // retrosede
                jumptoSlide('2023_C4_EXP_HOME_AV.zip', 'EXP');
            }
        },
        threshold: 75,
        allowPageScroll: "auto"
    });
});

function showPopup(popup_name){
    let popup = document.querySelector('.popup-container');
    popup.classList.add(popup_name,'animate__zoomIn');
    popup.style.display = 'block';
}