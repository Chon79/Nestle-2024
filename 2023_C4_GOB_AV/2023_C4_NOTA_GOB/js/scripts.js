$(function() {
    var producto = localStorage.getItem('selectedProducto');

    $("#mainWrapper").swipe({
        //Generic swipe handler for all directions
        swipe: async function(event, direction, distance, duration, fingerCount, fingerData) {
            if (direction == 'left') { // avanza
                //window.location.href = "../GINECOLOGIA-HOME-2023-c4/index.html";
                jumptoSlide('2023_C4_GOB_HOME_AV.zip', 'GOB');
            } else if (direction == 'right') { // retrosede
                //window.location.href = "../../MENU-2023-c4/index.html";
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