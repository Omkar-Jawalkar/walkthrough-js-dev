import getFormatBeforeStaring from "./helper/getFormatBeforeStarting.js";

function Walkthrough() {
    let step = -1;
    let currentStep = -1;
    let format = {};
    /*      
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

    this.start = () => {
        const format = getFormatBeforeStaring();
        console.log(format);
    };
    this.setOptions = () => {
        // You want the data to be in this format before staring the transition
    };
    this.addHints = () => {};
}

// step initial -> -1
//

const walkthroughObj = new Walkthrough();

export default walkthroughObj;
