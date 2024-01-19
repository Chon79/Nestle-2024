let btn_home = document.querySelector(".btn-home");
btn_home.addEventListener("click",() => {
    // window.location.href = "../../GENERAL-HOME-2023-c4/index.html";
    jumptoSlide('2023_C4_PMS_HOME_AV.zip','PMS');
});
let btn_prev = document.querySelector(".btn-prev");
btn_prev.addEventListener("click",() => {  
    // window.location.href = "../../GENERAL-HOME-2023-c4/index.html";
    jumptoSlide('2023_C4_PMS_NANCARE_AV.zip','PMS');
});
$(function() {
    $("#mainWrapper").swipe({
        //Generic swipe handler for all directions
        swipe: async function(event, direction, distance, duration, fingerCount, fingerData) {
            if (direction == 'right') { // retrosede
                // window.location.href = "../NIDO-2023-c4/index.html";
                jumptoSlide('2023_C4_PMS_NANCARE_AV.zip','PMS');
            }
        },
        threshold: 75,
        allowPageScroll: "auto"
    });
});
function jumptoSlide (zip, presentation) {
    document.location = "veeva:gotoSlide(" + zip + "," + presentation + ")";
}