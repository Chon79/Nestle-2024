function selectProduct(product){
    if(product == 'EXPERT-PRO'){
        // window.location.href = `../../${product}-2023-c4/${product}-HOME-2023-c4/index.html`;
        jumptoSlide('2023_C4_EXP_HOME_AV.zip','EXP');
    }else if(product == 'OPTIMAL'){
        // window.location.href = `../${product}-2023-c4/${product}-1-2023-c4/index.html`;
        jumptoSlide('2023_C4_AFF_OPTIMAL_AV.zip','AFF');
    }else if(product == 'NIDAL'){
        // window.location.href = `../${product}-2023-c4/${product}-1-2023-c4/index.html`;
        jumptoSlide('2023_C4_AFF_NIDAL_AV_1.zip','AFF');
    }
}

btn_back_menu = document.querySelector('.btn-back-menu');
btn_back_menu.addEventListener("click", () => {
    // window.location.href = "../../MENU-2023-c4/index.html";
    jumptoSlide('2023_C4_MENU_AV.zip','MENU');

});
function jumptoSlide (zip, presentation) {
    document.location = "veeva:gotoSlide(" + zip + "," + presentation + ")";
}