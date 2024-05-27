/* 
    function removeOverlayAndAddBorder
    @param {domElement} domElement , position
    @return {x, y} Coordinates to add the Display box to
*/
const removeOverlayAndAddBorder = (domElement, position = "bottom") => {
    // check if domElement is actually a dom element
    if (domElement instanceof Element) {
        // add the transparent element with appropriate styles
        const { x, y, right, bottom } = domElement.getBoundingClientRect();

        let transparentElement = document.createElement("div");
        transparentElement.style.position = "absolute";
        transparentElement.style.left = x - 10 + "px";
        transparentElement.style.top = y - 10 + "px";
        transparentElement.style.width = right + 10 + "px";
        transparentElement.style.height = bottom + 10 + "px";
        transparentElement.classList.add("transparent-element");
        domElement.classList.add("removeOverlayOnDomElement");

        // appent the transparent element to the Dom Element
        domElement.parentNode.appendChild(transparentElement);

        // calculate the position to add the display box

        let positionObject = {
            left: [x - 50, y],
            right: [right + 50, y],
            bottom: [x, bottom + 50],
            top: [x, bottom - y - y],
        };

        // returning the position

        if (positionObject?.position) {
            return positionObject?.position;
        } else {
            return positionObject["bottom"];
        }
    } else {
        throw new Error("Invalid DOM element");
    }
};

/* 

    This function removed the Transparent Element, and box element from the dom
    also removes the css class "removeOverlayOnDomElement" from the dom element provided.

    @method removeOverlayOnDomElement
    @param {DOMElement} 
    @param {Boolean} return true removed everything or throw an error

*/

const removeAllAppendedElements = (domElement) => {
    try {
        let transparentElement = document.getElementsByClassName(
            "transparent-element"
        )[0];
        let boxElement = document.getElementsByClassName("box")[0];
        domElement.classList.remove("removeOverlayOnDomElement");

        transparentElement.remove();
        boxElement.remove();
        return true;
    } catch (error) {
        throw new Error("Cant remove elememt");
    }
};



const CreateDisplayBox = (totalStepsLength, currentStep, format) => {
    // extracting the info from the format

    let formattedItem = format[currentStep];
    let domElement = formattedItem["element"];
    let title = formattedItem?.title;
    let intro = formattedItem?.intro;
    let position = formattedItem?.position;

    // removeOverlayAndAddBorder which return x and y coordinates
    const [left, top] = removeOverlayAndAddBorder(domElement, position);

    // creating elements
    let box = document.createElement("div");
    let boxHeader = document.createElement("div");
    let boxBody = document.createElement("div");
    let boxFooter = document.createElement("div");
    let backButton = document.createElement("button");
    let forwardButton = document.createElement("button");

    // setting styles
    box.style.left = left + "px";
    box.style.top = top + "px";
    box.classList.add("box");
    boxHeader.classList.add("box-header");
    boxBody.classList.add("box-body");
    boxFooter.classList.add("box-footer");

    // todo: setting styles for buttons

    backButton.addEventListener("click", (e) => {
        if (currentStep > 0) {
            currentStep--;
            let isRemoved = removeAllAppendedElements(domElement);
            if (isRemoved) {
                CreateDisplayBox(totalStepsLength, currentStep, format);
            }
        }
    });

    forwardButton.addEventListener("click", (e) => {
        if (currentStep < totalStepsLength - 1) {
            currentStep++;

            // remove -> the transition-element, displaybox,

            let isRemoved = removeAllAppendedElements(domElement);
            if (isRemoved) {
                CreateDisplayBox(totalStepsLength, currentStep, format);
            }

            // recursively call this function
        } else if (currentStep === totalStepsLength - 1) {
            // todo : change it to finished state and close the intro
            event.target.textContent = "Finished";
        }
    });

    // appending child

    // setting Text content
    backButton.textContent = "Back";
    forwardButton.textContent = "Next";

    boxHeader.textContent = title;
    boxBody.textContent = intro;

    boxFooter.appendChild(backButton);
    boxFooter.appendChild(forwardButton);

    box.appendChild(boxHeader);
    box.appendChild(boxBody);
    box.appendChild(boxFooter);

    document.body.appendChild(box);
};

export default CreateDisplayBox;
