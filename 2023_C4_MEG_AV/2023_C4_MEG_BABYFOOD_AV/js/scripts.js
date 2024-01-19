let btn_home = document.querySelector(".btn-home");
btn_home.addEventListener("click",() => {
    // window.location.href = "../GENERAL-HOME-2023-c4/index.html";
    jumptoSlide('2023_C4_MEG_HOME_AV.zip','MEG');
});
let btn_prev = document.querySelector(".btn-prev");
btn_prev.addEventListener("click",() => {  
    // window.location.href = "../MATERNA-2023-c4/index.html";
    jumptoSlide('2023_C4_MEG_MATERNA_AV.zip','MEG');
});

$(function() {
    $("#mainWrapper").swipe({
        //Generic swipe handler for all directions
        swipe: async function(event, direction, distance, duration, fingerCount, fingerData) {
            if (direction == 'right') { // retrosede
                // window.location.href = "../MATERNA-2023-c4/index.html";
                jumptoSlide('2023_C4_MEG_MATERNA_AV.zip','MEG');
            }
        },
        threshold: 75,
        allowPageScroll: "auto"
    });
});
function jumptoSlide (zip, presentation) {
    document.location = "veeva:gotoSlide(" + zip + "," + presentation + ")";
}