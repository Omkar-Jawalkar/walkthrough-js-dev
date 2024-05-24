/* 

This function 

*/

const getFormatBeforeStaring = () => {
    let elementsWithDataIntroAttribute =
        document.querySelectorAll("[data-intro]");

    // data-intro, data-step, data-title data-position
    let positionArray = ["top", "left", "right", "bottom"];
    let stepsArray = new Array();

    for (let element of elementsWithDataIntroAttribute) {
        let title = element.getAttribute("data-title");
        let intro = element.getAttribute("data-intro");
        let position = element.getAttribute("data-position");
        let step = element.getAttribute("data-step");

        let objectToBeAdded = {};

        if (title && title.length > 0) {
            objectToBeAdded["title"] = title;
        }

        if (intro && intro.length > 0) {
            objectToBeAdded["intro"] = intro;
        }

        if (position && positionArray.includes(position)) {
            objectToBeAdded["position"] = position;
        } else {
            objectToBeAdded["position"] = "bottom";
        }

        step = parseInt(step);
        if (step !== NaN && step > 0) {
            objectToBeAdded["step"] = step;
        }

        stepsArray.push(objectToBeAdded);
    }

    return { steps: stepsArray };
};

export default getFormatBeforeStaring;
