import { setBackButtonText, setForwardButtonText } from "./SetButtonText.js";

/* 
    function removeOverlayAndAddBorder
    @param {domElement} domElement , position
    @return {x, y} Coordinates to add the Display box to
*/
const removeOverlayAndAddBorder = (domElement, position = "bottom") => {
    // check if domElement is actually a dom element
    if (domElement instanceof Element) {
        // add the transparent element with appropriate styles
        const rect = domElement.getBoundingClientRect();
        const left = rect.left + window.pageXOffset;
        const right = rect.right + window.pageXOffset;
        const top = rect.top + window.pageYOffset;
        const bottom = rect.bottom + window.pageYOffset;

        let transparentElement = document.createElement("div");
        transparentElement.style.position = "absolute";
        transparentElement.style.left = left - 20 + "px";
        transparentElement.style.top = top - 20 + "px";
        transparentElement.style.width = right - left + 20 + "px";
        transparentElement.style.height = bottom - top + 20 + "px";
        transparentElement.classList.add("transparent-element");
        domElement.classList.add("removeOverlayOnDomElement");

        // appent the transparent element to the Dom Element
        document.body.appendChild(transparentElement);

        // calculate the position to add the display box

        let positionObject = {
            left: [right - rect.width - 270 - 30, top],
            right: [right + 10, top],
            bottom: [left, bottom + 10],
            top: [left, bottom - rect.height - 250 - 30],
        };

        // returning the position

        //  To find the position if any display box is getting out of view port

        function getPositionThatGivesExactCoordinates(position) {
            switch (position) {
                case "left":
                    let [leftX, leftY] = positionObject["left"];
                    if (leftX < 0 || leftY < 0) {
                        return "bottom";
                    } else {
                        return "left";
                    }
                    break;
                case "right":
                    let [rightX, rightY] = positionObject["right"];
                    if (rightX > window.innerWidth || rightY < 0) {
                        return "bottom";
                    } else {
                        return "right";
                    }
                    break;
                case "top":
                    let [topX, topY] = positionObject["top"];
                    if (topX < 0 || topY < 0) {
                        return "bottom";
                    } else {
                        return "top";
                    }
                    break;
                default:
                    return "bottom";
                    break;
            }
        }

        if (positionObject[position]) {
            let myPosition = getPositionThatGivesExactCoordinates(position);
            return positionObject[myPosition];
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

/* 
    This function sets the arrow with appropriate position
    
    @param {arrowElememt , position} 
    @return {arrowElememt}

*/
const setArrowAccordingToPosition = (arrowElement, position = "bottom") => {
    try {
        switch (position) {
            case "top":
                arrowElement.classList.add("down-arrow");
                break;
            case "left":
                arrowElement.classList.add("right-arrow");
                break;
            case "right":
                arrowElement.classList.add("left-arrow");
                arrowElement.style.top = 20 + "px";
                arrowElement.style.left = -7 + "px";
                break;
            default:
                arrowElement.classList.add("up-arrow");
                arrowElement.style.top = -7 + "px";
                arrowElement.style.left = "20px";
        }

        return arrowElement;
    } catch (error) {
        throw new Error(error.message);
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
    let arrowElement = document.createElement("span");

    backButton.id = "backButton";
    forwardButton.id = "forwardButton";

    // setting styles
    box.style.left = left + "px";
    box.style.top = top + "px";
    box.classList.add("box");
    boxHeader.classList.add("box-header");
    boxBody.classList.add("box-body");
    boxFooter.classList.add("box-footer");
    arrowElement.style.position = "absolute";

    // small arrow
    arrowElement = setArrowAccordingToPosition(arrowElement, position);

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

    forwardButton.addEventListener("click", (event) => {
        if (currentStep === totalStepsLength - 2) {
            setForwardButtonText();
        }

        if (currentStep < totalStepsLength) {
            currentStep++;

            if (currentStep < totalStepsLength) {
                let isRemoved = removeAllAppendedElements(domElement);
                if (isRemoved) {
                    CreateDisplayBox(totalStepsLength, currentStep, format);
                }
            } else {
                document.body.classList.remove("overlay");
                removeAllAppendedElements(domElement);
            }
        }
    });

    // setting Text content
    backButton.textContent = "Back";
    forwardButton.textContent = "Next";
    boxHeader.textContent = title;
    boxBody.innerHTML = intro;

    // appending child

    boxFooter.appendChild(backButton);
    boxFooter.appendChild(forwardButton);

    box.appendChild(arrowElement);
    box.appendChild(boxHeader);
    box.appendChild(boxBody);
    box.appendChild(boxFooter);

    document.body.appendChild(box);
};

export default CreateDisplayBox;
