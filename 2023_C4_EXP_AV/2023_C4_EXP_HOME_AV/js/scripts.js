let btn_home = document.querySelector(".btn-home");
btn_home.addEventListener("click",() => {
    homeSlide();
});
let btn_prev = document.querySelector(".btn-prev");
btn_prev.addEventListener("click",() => {  
    prevSlide();
});

function selectedProduct(product){
    switch(product) {
        case "HA":
            jumptoSlide('2023_C4_EXP_HA_AV.zip', 'EXP');
            break;
        case "SOYA":
            jumptoSlide('2023_C4_EXP_SOYA_AV.zip', 'EXP');
            break;
        case "PRENAN":
            jumptoSlide('2023_C4_EXP_PRENAN_AV.zip', 'EXP');
            break;
        case "CT":
            jumptoSlide('2023_C4_EXP_CT_AV.zip', 'EXP');
            break;
        case "AE":
            jumptoSlide('2023_C4_EXP_AE_AV.zip', 'EXP');
        break;
        case "SL":
            jumptoSlide('2023_C4_EXP_SL_AV.zip', 'EXP');
        break;
        case "AR":
            jumptoSlide('2023_C4_EXP_AR_AV.zip', 'EXP');
        break;
        case "GS":
            jumptoSlide('2023_C4_EXP_GS_AV.zip', 'EXP');
        break;
    }
}

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
            } else if (direction == 'right') { // retrosede
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
        },
        threshold: 75,
        allowPageScroll: "auto"
    });
});
function jumptoSlide (zip, presentation) {
    document.location = "veeva:gotoSlide(" + zip + "," + presentation + ")";
}
