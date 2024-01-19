let btn_home = document.querySelector(".btn-home");
btn_home.addEventListener("click",() => {
     //window.location.href = "../GINECOLOGIA-HOME-2023-c4/index.html";
    jumptoSlide('2023_C4_GOB_HOME_AV.zip','GOB');
});
let btn_prev = document.querySelector(".btn-prev");
btn_prev.addEventListener("click",() => {  
    jumptoSlide('2023_C4_GOB_MATERPLUS_AV.zip','GOB');
     //window.location.href = "../MATERPLUS-2023-c4/index.html";
    //document.location = "veeva:gotoSlide(PREMIUM-B-2023-c3.zip)";
});
let btn_next = document.querySelector(".btn-next");
btn_next.addEventListener("click",() => {
    jumptoSlide('2023_C4_GOB_OPTILAC_AV.zip','GOB');
    //window.location.href = "../OPTILAC-2023-c4/index.html";
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
$(function() {
    $("#mainWrapper").swipe({
        //Generic swipe handler for all directions
        swipe: async function(event, direction, distance, duration, fingerCount, fingerData) {
            if (direction == 'left') { // avanza
                //window.location.href = "../OPTILAC-2023-c4/index.html";
                jumptoSlide('2023_C4_GOB_OPTILAC_AV.zip','GOB');
                //document.location = "veeva:gotoSlide(GS-CONFORT-2023-c3.zip)";
            } else if (direction == 'right') { // retrosede
                //window.location.href = "../MATERPLUS-2023-c4/index.html";
                //document.location = "veeva:gotoSlide(PREMIUM-B-2023-c3.zip)";
                jumptoSlide('2023_C4_GOB_MATERPLUS_AV.zip','GOB');
            }
        },
        threshold: 75,
        allowPageScroll: "auto"
    });
});

function jumptoSlide (zip, presentation) {
    document.location = "veeva:gotoSlide(" + zip + "," + presentation + ")";
}