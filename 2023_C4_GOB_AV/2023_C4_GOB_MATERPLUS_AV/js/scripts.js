let btn_home = document.querySelector(".btn-home");
btn_home.addEventListener("click",() => {
     //window.location.href = "../GINECOLOGIA-HOME-2023-c4/index.html";
        jumptoSlide('2023_C4_GOB_HOME_AV.zip','GOB');
});
let btn_prev = document.querySelector(".btn-prev");
btn_prev.addEventListener("click",() => {  
     //window.location.href = "../MATERNA-2023-c4/index.html";
    //document.location = "veeva:gotoSlide(PREMIUM-B-2023-c3.zip)";
    jumptoSlide('2023_C4_GOB_MATERNA_AV.zip','GOB');
});
let btn_next = document.querySelector(".btn-next");
btn_next.addEventListener("click",() => {
    //window.location.href = "../GBALANCE-2023-c4/index.html";
    jumptoSlide('2023_C4_GOB_GBALANCE_AV.zip','GOB');
    //document.location = "veeva:gotoSlide(GS-CONFORT-2023-c3.zip)";
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
let btn_alimentos = document.querySelector(".btn-tecnologia");
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
                //window.location.href = "../GBALANCE-2023-c4/index.html";
                jumptoSlide('2023_C4_GOB_GBALANCE_AV.zip','GOB');

                //document.location = "veeva:gotoSlide(GS-CONFORT-2023-c3.zip)";
            } else if (direction == 'right') { // retrosede
                 //window.location.href = "../MATERNA-2023-c4/index.html";
                //document.location = "veeva:gotoSlide(PREMIUM-B-2023-c3.zip)";
                jumptoSlide('2023_C4_GOB_MATERNA_AV.zip','GOB');
            }
        },
        threshold: 75,
        allowPageScroll: "auto"
    });
});

function jumptoSlide (zip, presentation) {
    document.location = "veeva:gotoSlide(" + zip + "," + presentation + ")";
}