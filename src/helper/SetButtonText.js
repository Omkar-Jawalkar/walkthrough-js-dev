export const setBackButtonText = () => {
    let backElement = document.getElementById("backButton");
    backElement.textContent = "Cancel";
};

export const setForwardButtonText = () => {
    const forwardButton = document.getElementById("forwardButton");
    forwardButton.textContent = "Done";
};
