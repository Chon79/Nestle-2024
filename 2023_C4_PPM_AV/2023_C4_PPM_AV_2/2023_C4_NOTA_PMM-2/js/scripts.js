$(function() {
    $("#mainWrapper").swipe({
        //Generic swipe handler for all directions
        swipe: async function(event, direction, distance, duration, fingerCount, fingerData) {
            if (direction == 'left') { // avanza
                jumptoSlide('2023_C4_PPM_B_HOME_AV.zip', 'PPMB');
            } else if (direction == 'right') { // retrosede
                jumptoSlide('2023_C4_PPM-HOME_AV.zip', 'PPMH');
            }
        },
        threshold: 75,
        allowPageScroll: "auto"
    });

});