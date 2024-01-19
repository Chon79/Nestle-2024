let btn_home = document.querySelector(".btn-home");
btn_home.addEventListener("click",() => {
    const perfil = localStorage.getItem('selectedPerfil');
    let file_name = `2023_C4_PPM_${perfil}_HOME_AV.zip`;
    let id = 'PPM' + perfil;
    jumptoSlide(file_name, id);
});
let btn_prev = document.querySelector(".btn-prev");
btn_prev.addEventListener("click",() => {
    const perfil = localStorage.getItem('selectedPerfil');
    let id = 'PPM' + perfil;
    jumptoSlide('2023_C4_PPM_OPTIMAL_AV.zip', id);
});
let btn_next = document.querySelector(".btn-next");
btn_next.addEventListener("click",() => {
    const perfil = localStorage.getItem('selectedPerfil');
    let id = 'PPM' + perfil;
    jumptoSlide('2023_C4_PPM_NANCARE_AV.zip', id);
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
                const perfil = localStorage.getItem('selectedPerfil');
                let id = 'PPM' + perfil;
                jumptoSlide('2023_C4_PPM_NANCARE_AV.zip', id);
            } else if (direction == 'right') { // retrosede
                const perfil = localStorage.getItem('selectedPerfil');
                let id = 'PPM' + perfil;
                jumptoSlide('2023_C4_PPM_OPTIMAL_AV.zip', id);
            }
        },
        threshold: 75,
        allowPageScroll: "auto"
    });
});