// Delete all the Session Storage
// Before anything happens here.
localStorage.clear();

// Start using the animations
var anim1 = document.querySelector('#anim-1');
var anim2 = document.querySelector('#anim-2');
var anim3 = document.querySelector('#anim-3');
var anim4 = document.querySelector('#anim-4');
var anim5 = document.querySelector('#anim-5');

setTimeout(() => {
    anim1.style.display = 'block';
    anim1.classList.add('animate__fadeInDown');
},300);

setTimeout(() => {
    anim2.style.display = 'block';
    anim2.classList.add('animate__fadeInDown');
},600);

setTimeout(() => {
    anim3.style.display = 'block';
    anim3.classList.add('animate__fadeInDown');
},900);

setTimeout(() => {
    anim4.style.display = 'block';
    anim4.classList.add('animate__fadeInDown');
},1200);

setTimeout(() => {
    anim5.style.display = 'block';
    anim5.classList.add('animate__fadeInDown');
},1500);

function selectMedicalArea(areaSelected,perfil) {
    if(areaSelected == "premium"){
        localStorage.setItem('selectedPerfil',perfil);
    }
    localStorage.setItem('selectedMedicalArea',areaSelected);

    switch(areaSelected) {
        case "general":
            jumptoSlide('2023_C4_NOTA_MEG.zip', 'MEG');
            break;
        case "pediatria":
            jumptoSlide('2023_C4_NOTA_PMS.zip', 'PMS');
            break;
        case "premium":
            jumptoSlide('2023_C4_PPM-HOME_AV.zip', 'PPMH');
            break;
        case "affordable":
            jumptoSlide('2023_C4_AFF_NOTA_AFF.zip', 'AFF');
        break;
        case "ginecologia":
                jumptoSlide('2023_C4_NOTA_GOB.zip', 'GOB');
            break;
    }
}
function jumptoSlide (zip, presentation) {
    document.location = "veeva:gotoSlide(" + zip + "," + presentation + ")";
}
