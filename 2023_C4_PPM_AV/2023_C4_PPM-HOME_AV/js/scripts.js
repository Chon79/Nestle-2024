// Start using the animations
function selectedPerfil(perfil){
    localStorage.setItem('selectedPerfil',perfil);
    if(perfil == "A"){
        jumptoSlide('2023_C4_NOTA_PPM-1.zip', 'PPMA');
    }else{
        jumptoSlide('2023_C4_NOTA_PMM-2.zip', 'PPMB');
    }
}
btn_back_menu = document.querySelector('.btn-back-menu');
btn_back_menu.addEventListener("click", () => {
    jumptoSlide('2023_C4_MENU_AV.zip', 'MENU');
});
function jumptoSlide (zip, presentation) {
    document.location = "veeva:gotoSlide(" + zip + "," + presentation + ")";
}