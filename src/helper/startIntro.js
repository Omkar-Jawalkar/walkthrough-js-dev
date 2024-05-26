import CreateDisplayBox from "./createDisplayBox.js";
const startIntro = (totalStepsLength, currentStep, format) => {
    console.log(
        "total steps length: " + totalStepsLength,
        " current step: " + currentStep
    );
    document.body.classList.add("overlay");
    let displayBox = CreateDisplayBox(totalStepsLength, currentStep);

    // displayBox.textContent = "Hello World!";
    document.body.appendChild(displayBox);
};

export default startIntro;
