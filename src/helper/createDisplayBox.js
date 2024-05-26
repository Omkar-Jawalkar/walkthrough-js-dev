const CreateDisplayBox = (totalStepsLength, currentStep) => {
    // creating elements
    let box = document.createElement("div");
    let boxHeader = document.createElement("div");
    let boxBody = document.createElement("div");
    let boxFooter = document.createElement("div");
    let backButton = document.createElement("button");
    let forwardButton = document.createElement("button");

    // setting styles
    box.classList.add("box");
    boxHeader.classList.add("box-header");
    boxBody.classList.add("box-body");
    boxFooter.classList.add("box-footer");

    // todo: setting styles for buttons

    // todo : add event listener for buttons

    backButton.addEventListener("click", () => {
        if (currentStep > 0) {
            currentStep--;
        }
        console.log("currentStep: " + currentStep);
    });

    forwardButton.addEventListener("click", () => {
        if (currentStep < totalStepsLength - 1) {
            currentStep++;
        } else if (currentStep === totalStepsLength - 1) {
            // todo : change it to finished state and close the intro
            console.log("reached total steps ");
        }
    });

    // appending child

    // setting Text content
    backButton.textContent = "Back";
    forwardButton.textContent = "Next";
    boxHeader.textContent = "HEYY";
    boxBody.textContent = "Welcome Buddy!";

    boxFooter.appendChild(backButton);
    boxFooter.appendChild(forwardButton);

    box.appendChild(boxHeader);
    box.appendChild(boxBody);
    box.appendChild(boxFooter);

    return box;
};

export default CreateDisplayBox;
