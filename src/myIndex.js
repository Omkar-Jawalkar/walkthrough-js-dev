import walkthroughObj from "./index.js";

let buttonElement = document.querySelector("button");

buttonElement.addEventListener("click", () => {
    walkthroughObj
        .setOptions({
            steps: [
                {
                    element: document.querySelector("h1"),
                    intro: "This <b>STEP</b> focuses on an image. <br/> We also used some HTML tags!",
                },
                {
                    title: "Farewell!",
                    element: document.querySelector("h2"),
                    intro: "hyy",
                },
            ],
        })
        .start();
});
