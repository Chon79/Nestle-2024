// Start using the animations
let btn1 = document.querySelector('#btn-1');
let btn2 = document.querySelector('#btn-2');
let btn3 = document.querySelector('#btn-3');
let btn4 = document.querySelector('#btn-4');
let btn5 = document.querySelector('#btn-5');
let btn6 = document.querySelector('#btn-6');

btn1.addEventListener("click",() => {
    goViewProduct('SUPREME');
});

btn2.addEventListener("click",() => {
    goViewProduct('EXP');
});

btn3.addEventListener("click",() => {
    goViewProduct('AAA');
});

btn4.addEventListener("click",() => {
    goViewProduct('OPTIMAL');
});

btn5.addEventListener("click",() => {
    goViewProduct('OPTILAC');
});

btn6.addEventListener("click",() => {
    goViewProduct('NANCARE');
});

function goViewProduct(product) {
    var file_name = `2023_C4_PPM_${product}_AV.zip`;
    if(product == 'EXP') {
        file_name = '2023_C4_EXP_HOME_AV.zip';
        jumptoSlide(file_name, 'EXP');
    }else if(product == 'SUPREME'){
        file_name = '2023_C4_PPM_SUPREME_AV_1.zip';
        jumptoSlide(file_name, 'PPMA');
    }else{
        jumptoSlide(file_name, 'PPMA');
    }
    
}

btn_back_menu = document.querySelector('.btn-back-menu');
btn_back_menu.addEventListener("click", () => {
    jumptoSlide('2023_C4_PPM-HOME_AV.zip', 'PPMH');
});