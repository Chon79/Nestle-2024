let btn_home = document.querySelector(".btn-home");
btn_home.addEventListener("click",() => {
    homeSlide();
});
let btn_homeExpert = document.querySelector(".btn-homeExpert");
btn_homeExpert.addEventListener("click",() => {  
    homeExpertSlide();
});
let btn_prev = document.querySelector(".btn-prev");
btn_prev.addEventListener("click",() => {  
    prevSlide();
});
let btn_close_ref = document.querySelector(".btn-close-referencias");
btn_close_ref.addEventListener("click",() => {
    let popup = document.querySelector('.popup-referencias');
    popup.classList.toggle('popup-referencias-up');
});
let btn_competencia = document.querySelector(".btn-competencia");
btn_competencia.addEventListener("click", () => {
    let popup = document.querySelector(".popup-container");
    popup.style.display = 'block';
    popup.classList.add('img-competencia','animate__zoomIn');
});
let btn_evidencia = document.querySelector(".btn-evidencia");
btn_evidencia.addEventListener("click", () => {
    let popup = document.querySelector(".popup-container");
    popup.style.display = 'block';
    popup.classList.add('img-evidencia','animate__zoomIn');
});
let btn_close_popup = document.querySelector(".btn-close-popup");
btn_close_popup.addEventListener("click", () => {
    let popup = document.querySelector(".popup-container");
    popup.classList.add('animate__zoomOut');
    setTimeout(() => {
        popup.style.display = 'none';
        popup.className = 'popup-container animate__animated';
    },400)
});

function setAreaIcon() {
    const areaSelected = localStorage.getItem('selectedMedicalArea');
    let div_icon = document.querySelector('.icon-area');
    div_icon.classList.add(`icon-${areaSelected}`);
}

setAreaIcon();

function nextSlide(){
    const medicalArea = localStorage.getItem('selectedMedicalArea').toUpperCase();
    switch(medicalArea) {
        case "GENERAL":
            jumptoSlide('2023_C4_MEG_NIDAL_AV.zip', 'MEG');
            break;
        case "PEDIATRIA":
            jumptoSlide('2023_C4_PMS_NANCARE_AV.zip', 'PMS');
            break;
        case "PREMIUM":
            const perfil = localStorage.getItem('selectedPerfil')
            if(perfil == 'A'){
                jumptoSlide('2023_C4_PPM_AAA_AV.zip', 'PPMA');
            }else if(perfil == 'B'){
                jumptoSlide('2023_C4_PPM_AAA_AV.zip', 'PPMB');
            }
            break;
    }
}

function prevSlide(){
    const medicalArea = localStorage.getItem('selectedMedicalArea').toUpperCase();
    switch(medicalArea) {
        case "GENERAL":
            jumptoSlide('2023_C4_MEG_OPTIMAL_AV-2.zip', 'MEG');
            break;
        case "PEDIATRIA":
            jumptoSlide('2023_C4_PMS_OPTIMAL_AV_2.zip', 'PMS');
            break;
        case "PREMIUM":
            const perfil = localStorage.getItem('selectedPerfil')
            if(perfil == 'A'){
                jumptoSlide('2023_C4_PPM_SUPREME_AV_2.zip', 'PPMA');
            }else if(perfil == 'B'){
                jumptoSlide('2023_C4_PPM_GSSCONFORT_AV.zip', 'PPMB');
            }
            break;
        case "AFFORDABLE":
            jumptoSlide('2023_C4_AFF_OPTIMAL_AV.zip', 'AFF');
            break;
    }
}

function homeSlide(){
    const medicalArea = localStorage.getItem('selectedMedicalArea').toUpperCase();
    if(medicalArea == 'PREMIUM') {
        const perfil = localStorage.getItem('selectedPerfil');
        if(perfil == 'A'){
            jumptoSlide('2023_C4_PPM_A_HOME_AV.zip', 'PPMA');
        }else if(perfil == 'B'){
            jumptoSlide('2023_C4_PPM_B_HOME_AV.zip', 'PPMB');
        }
    }else if(medicalArea == 'GENERAL'){
        jumptoSlide('2023_C4_MEG_HOME_AV.zip', 'MEG');
    }else if(medicalArea == 'PEDIATRIA'){
        jumptoSlide('2023_C4_PMS_HOME_AV.zip', 'PMS');
    }else if(medicalArea == 'AFFORDABLE'){
        jumptoSlide('2023_C4_AFF_HOME_AV.zip', 'AFF');
    }else if(medicalArea == 'GINECO'){
        jumptoSlide('2023_C4_GOB_HOME_AV.zip', 'GOB');
    }
}

function homeExpertSlide(){
    jumptoSlide('2023_C4_EXP_HOME_AV.zip', 'EXP');
}

document.addEventListener('DOMContentLoaded',() => {
    const medicalArea = localStorage.getItem('selectedMedicalArea').toUpperCase();
    let btn_next = document.querySelector('.btn-next');
    if(medicalArea == 'AFFORDABLE'){
        btn_next.style.backgroundColor = '#0080b3';
        btn_next.style.cursor = 'auto';
    }else{
        btn_next.addEventListener('click',() => {
            nextSlide();
        });
    }
});

$(function() {
    $("#mainWrapper").swipe({
        //Generic swipe handler for all directions
        swipe: async function(event, direction, distance, duration, fingerCount, fingerData) {
            if (direction == 'left') { // avanza
                nextSlide();
            } else if (direction == 'right') { // retrosede
                prevSlide();
            }
        },
        threshold: 75,
        allowPageScroll: "auto"
    });
});
function jumptoSlide (zip, presentation) {
    document.location = "veeva:gotoSlide(" + zip + "," + presentation + ")";
}