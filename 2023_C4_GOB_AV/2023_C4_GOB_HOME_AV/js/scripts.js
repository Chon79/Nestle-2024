
function selectedProduct(product){
    if(product == 'MATERNA'){
        // window.location.href = `../../${product}-2023-c4/${product}-HOME-2023-c4/index.html`;
        jumptoSlide('2023_C4_GOB_MATERNA_AV.zip','GOB');
    }else if(product == 'MATERNPLUS'){
        // window.location.href = `../${product}-2023-c4/${product}-1-2023-c4/index.html`;
        jumptoSlide('2023_C4_GOB_MATERPLUS_AV.zip','GOB');
    }else if(product == 'GBALANCE'){
        // window.location.href = `../${product}-2023-c4/${product}-1-2023-c4/index.html`;
        jumptoSlide('2023_C4_GOB_GBALANCE_AV.zip','GOB');
    }else if(product == 'OPTILAC'){
        // window.location.href = `../${product}-2023-c4/${product}-1-2023-c4/index.html`;
        jumptoSlide('2023_C4_GOB_OPTILAC_AV.zip','GOB');
    }else if(product == 'NANCARE'){
        // window.location.href = `../${product}-2023-c4/${product}-1-2023-c4/index.html`;
        jumptoSlide('2023_C4_GOB_NANCARE_1.zip','GOB');
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