import walkthroughObj from "./index.js";

let buttonElement = document.querySelector("button");

buttonElement.addEventListener("click", () => {
    walkthroughObj.start();
});
