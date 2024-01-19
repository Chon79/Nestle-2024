$(function() {
    $("#mainWrapper").swipe({
        //Generic swipe handler for all directions
        swipe: async function(event, direction, distance, duration, fingerCount, fingerData) {
            if (direction == 'left') { // avanza
                jumptoSlide('2023_C4_PMS_HOME_AV.zip','PMS');
                //jumptoSlide('MEDICINA-GENERAL-HOME-2023-c4.zip', 'MGC4');
            } else if (direction == 'right') { // retrosede
                // window.location.href = "../../MENU-2023-c4/index.html";
                jumptoSlide('2023_C4_MENU_AV.zip', 'MENU');
            }
        },
        threshold: 75,
        allowPageScroll: "auto"
    });
});
function jumptoSlide (zip, presentation) {
    document.location = "veeva:gotoSlide(" + zip + "," + presentation + ")";
}