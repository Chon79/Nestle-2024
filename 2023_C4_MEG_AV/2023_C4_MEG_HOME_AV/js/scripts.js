function selectProduct(product){
    if(product == 'EXPERT-PRO'){
        // window.location.href = `../../${product}-2023-c4/${product}-HOME-2023-c4/index.html`;
        jumptoSlide('2023_C4_EXP_HOME_AV.zip','EXP');
    }else if(product == 'OPTIMAL'){
        // window.location.href = `../${product}-2023-c4/${product}-1-2023-c4/index.html`;
        jumptoSlide('2023_C4_MEG_OPTIMAL_AV-1.zip','MEG');
    }else if(product == 'NIDAL'){
        // window.location.href = `../${product}-2023-c4/${product}-1-2023-c4/index.html`;
        jumptoSlide('2023_C4_MEG_NIDAL_AV.zip','MEG');
    }else if(product == 'MATERNA'){
        // window.location.href = `../${product}-2023-c4/${product}-1-2023-c4/index.html`;
        jumptoSlide('2023_C4_MEG_MATERNA_AV.zip','MEG');
    }else if(product == 'GERBER'){
        // window.location.href = `../${product}-2023-c4/${product}-1-2023-c4/index.html`;
        jumptoSlide('2023_C4_MEG_BABYFOOD_AV.zip','MEG');
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