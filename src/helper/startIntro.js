import CreateDisplayBox from "./createDisplayBox.js";
const startIntro = (totalStepsLength, currentStep, format) => {

    document.body.classList.add("overlay");
    CreateDisplayBox(totalStepsLength, currentStep, format);

};

export default startIntro;
