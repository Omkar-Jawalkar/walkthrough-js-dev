/* 

This function finds all the elements with data-intro attribute and
formats it properly to start the transition


    This is the format
    {
        
    steps: [{
        title: 'Welcome',
        intro: 'Hello World! 👋'
    },
    {
        element: document.querySelector('.card-demo'),
        intro: 'This step focuses on an image'
    },
    {
        title: 'Farewell!',
        element: document.querySelector('.card__image'),
        intro: 'And this is our final step!'
    }]

    }    

*/

const getFormatBeforeStaring = () => {
    let elementsWithDataIntroAttribute =
        document.querySelectorAll("[data-intro]");

    // data-intro, data-step, data-title data-position
    let positionArray = ["top", "left", "right", "bottom"];
    let stepsArrayWithSteps = new Array();
    let stepsArrayWithNoSteps = new Array();

    for (let element of elementsWithDataIntroAttribute) {
        let title = element.getAttribute("data-title");
        let intro = element.getAttribute("data-intro");
        let position = element.getAttribute("data-position");
        let step = element.getAttribute("data-step");

        let objectToBeAdded = {};

        // adding the title
        if (title && title.length > 0) {
            objectToBeAdded["title"] = title;
        }

        // adding the intro attribute
        if (intro && intro.length > 0) {
            objectToBeAdded["intro"] = intro;
        }

        // setting the default position attribute if not specified
        if (position && positionArray.includes(position)) {
            objectToBeAdded["position"] = position;
        } else {
            objectToBeAdded["position"] = "bottom";
        }

        // setting the step attribute if not specified
        step = parseInt(step);
        if (step !== NaN && step > 0) {
            objectToBeAdded["step"] = step;
        }

        // setting the element
        objectToBeAdded["element"] = element;

        // adding that object into stepsArray

        if (objectToBeAdded["step"]) {
            stepsArrayWithSteps.push(objectToBeAdded);
        } else {
            stepsArrayWithNoSteps.push(objectToBeAdded);
        }
    }

    stepsArrayWithSteps = stepsArrayWithSteps.sort((a, b) => {
        return a?.step - b?.step;
    });

    let finalStepsArray = [...stepsArrayWithSteps, ...stepsArrayWithNoSteps];
    console.log("finalStepsArray - " + finalStepsArray);

    return { steps: finalStepsArray };
};

export default getFormatBeforeStaring;
