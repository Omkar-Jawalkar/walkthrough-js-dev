import getFormatBeforeStaring from "./helper/getFormatBeforeStarting.js";
import startIntro from "./helper/startIntro.js";
import "./index.scss";

function Walkthrough() {
    let steps = -1;
    let currentStep = -1;
    let format = {};

    this.start = () => {
        if (!this.isFormattedDataPresent()) {
            const format = getFormatBeforeStaring();
            this.format = format;
        }

        if (this.validateFormattedDataAndSetStepsLength()) {
            // start the intro
            startIntro(this.steps, this.currentStep, this.format?.steps);
        } else {
            console.log(this.format);
            throw new Error("Data not available or invalid");
        }
    };

    this.setOptions = (format) => {
        this.format = format;
        if (this.validateFormattedDataAndSetStepsLength()) {
            return this;
        } else {
            throw new Error("Data not available or invalid");
        }
    };

    this.addHints = () => {};

    this.isFormattedDataPresent = () => {
        if (this.format && Object.keys(this.format).length > 0) {
            return true;
        }
        return false;
    };

    /*  setStepsLength function also validates weither
         data is present in formattedData or not
    */
    this.validateFormattedDataAndSetStepsLength = () => {
        if (this.isFormattedDataPresent()) {
            let stepsFromFormattedData = this.format["steps"];
            if (stepsFromFormattedData && stepsFromFormattedData.length > 0) {
                this.steps = stepsFromFormattedData.length;
            }
            this.currentStep = 0;
            return true;
        }

        return false;
    };
}

const walkthroughObj = new Walkthrough();

export default walkthroughObj;
