// Start using the animations
let btn1 = document.querySelector('#btn-1');
let btn2 = document.querySelector('#btn-2');
let btn3 = document.querySelector('#btn-3');
let btn4 = document.querySelector('#btn-4');
let btn5 = document.querySelector('#btn-5');
let btn6 = document.querySelector('#btn-6');
let btn7 = document.querySelector('#btn-7');

btn1.addEventListener("click",() => {
    goViewProduct('GSS');
});

btn2.addEventListener("click",() => {
    goViewProduct('GSSCONFORT');
});

btn3.addEventListener("click",() => {
    goViewProduct('EXP');
});

btn4.addEventListener("click",() => {
    goViewProduct('AAA');
});

btn5.addEventListener("click",() => {
    goViewProduct('OPTIMAL');
});

btn6.addEventListener("click",() => {
    goViewProduct('OPTILAC');
});

btn7.addEventListener("click",() => {
    goViewProduct('NANCARE');
});

function goViewProduct(product) {
    var file_name = `2023_C4_PPM_${product}_AV.zip`;
    var id = '';
    if(product == 'EXP') {
        file_name = '2023_C4_EXP_HOME_AV.zip';
        id = 'EXP';
    }else if(product == 'GSS'){
        file_name = '2023_C4_PPM_GSS_AV_1.zip';
        id = 'PPMB';
    }else{
        if(product == 'GSSCONFORT'){
            id = 'PPMB';
        }else{
            id = 'PPMA';
        }
    }
    jumptoSlide(file_name, id);
}

btn_back_menu = document.querySelector('.btn-back-menu');
btn_back_menu.addEventListener("click", () => {
    jumptoSlide('2023_C4_PPM-HOME_AV.zip', 'PPMH');
});