import CreateDisplayBox from "./createDisplayBox.js";
const startIntro = (totalStepsLength, currentStep, format) => {
    // document.body.classList.add("overlay");



    let overlayDiv = document.createElement("div");
    overlayDiv.style.inset = "0px";
    overlayDiv.style.position = "fixed";
    overlayDiv.style.cursor = "pointer";
    overlayDiv.classList.add("overlay");



    CreateDisplayBox(totalStepsLength, currentStep, format);
};

export default startIntro;
