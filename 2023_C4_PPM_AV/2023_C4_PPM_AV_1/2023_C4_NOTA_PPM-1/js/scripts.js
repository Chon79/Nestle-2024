$(function() {
    $("#mainWrapper").swipe({
        //Generic swipe handler for all directions
        swipe: async function(event, direction, distance, duration, fingerCount, fingerData) {
            if (direction == 'left') { // avanza
                jumptoSlide('2023_C4_PPM_A_HOME_AV.zip', 'PPMA');
            } else if (direction == 'right') { // retrosede
                jumptoSlide('2023_C4_PPM-HOME_AV.zip', 'PPMH');
            }
        },
        threshold: 75,
        allowPageScroll: "auto"
    });
});