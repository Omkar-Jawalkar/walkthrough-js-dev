# walkthrough-js-dev

`walkthrough-js-dev` is a lightweight and easy-to-use JavaScript library for creating walkthroughs or guided tours in your web applications. It's built with vanilla JavaScript, making it compatible with any JavaScript framework or library.

## Installation

You can install the library via npm:

```html
npm install walkthrough-js-dev
````

Or, you can include it directly in your HTML file:

```html
<script src="path/to/walkthrough-js-dev.min.js"></script>
<link rel="stylesheet" href="path/to/walkthrough-js-dev.min.css">
````

## How to use

1. Using Data Attributes on HTML Elements.

You can add the following data attributes to an HTML element to start the intro:

`data-intro` (required): The content to display for the step.

`data-step` (optional): The step number of the element in the walkthrough.

`data-position` (optional): The position of the content relative to the target element. Possible values are `top`, `right`, `bottom`, and `left`.

`data-title` (optional): The title to display for the step.



```html
  <!-- HTML FILE -->
<main>
    <section>
      <h1 data-intro="This is the main heading" data-step="4" data-title="Heading">Welcome to our site!</h1>
      <p data-intro="This is a paragraph of text" data-step="5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </section>
    <aside data-intro="This is a sidebar" data-step="6" data-position="right" data-title="Sidebar">
      <!-- Sidebar content -->
    </aside>
</main>
```

```html
// Javascript File
<script type="module">
    import walkthroughObj from "@walkthrough-js-dev/start";
    walkthroughObj.start();
</script>
```


2. Using setOptions() method.

```javascript
import walkthroughObj from "walkthrough-js-dev";
import "walkthrough-js-dev/dist/assets/index.css";


myWalkthrough.setOptions({
  steps: [
    {
      title: 'Welcome',
      intro: 'Hello World! 👋'
      element:  document.querySelector('.card-title') 
    },
    {
      element: document.querySelector('.card-demo'),
      intro: 'This step focuses on an image 👀'
    },
    {
      title: 'Farewell!',
      element: document.querySelector('.card__image'),
      intro: 'And this is our final step!👋'
    }
  ]
});


myWalkthrough.start();

```
