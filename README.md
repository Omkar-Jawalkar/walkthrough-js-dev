# walkthrough-js-dev

`walkthrough-js-dev` is a lightweight and easy-to-use JavaScript library for creating walkthroughs or guided tours in your web applications. It's built with vanilla JavaScript, making it compatible with any JavaScript framework or library.

## Installation

You can install the library via npm:

```html
npm install walkthrough-js-dev
````

Or, you can include it directly in your HTML file:

```html
<script src="https://unpkg.com/walkthrough-js-dev@2.0.1/dist/walkthrough-js-dev.esm.js"></script>
<link rel="stylesheet" href="https://unpkg.com/walkthrough-js-dev@2.0.1/dist/assets/index.css">
```

## How to use (Examples)

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
> If you're not using any library (React, Angular, Vue) and just using HTML then import library like this 👇 otherwise directly install it using npm.

```html
<script type="importmap">
  {
    "imports": { "walkthrough-js-dev": "https://unpkg.com/walkthrough-js-dev@2.0.1/dist/walkthrough-js-dev.esm.js"}
  }
</script>

<script type="module">
    import walkthroughObj from "walkthrough-js-dev";
    walkthroughObj.start();
</script>
```


2. Using setOptions() method.

```javascript
import walkthroughObj from "walkthrough-js-dev";
import "walkthrough-js-dev/dist/assets/index.css";


walkthroughObj.setOptions({
  steps: [
    {
      title: 'Welcome',
      intro: 'Hello World! 👋',
      element:  document.querySelector('.card-title') 
    },
    {
      element: document.querySelector('.card-demo'),
      intro: 'This step focuses on an image 👀',
      position: "top"
    },
    {
      title: 'Farewell!',
      element: document.querySelector('.card__image'),
      intro: 'And this is our final step!👋',
      position: "bottom"
    }
  ]
});


walkthroughObj.start();

```

## Library APIs

There are 2 APIs provided with the library:

**1)** `walkthroughObj.start()` :- This Api starts the Walkthrough

```javascript
walkthroughObj.start()
```


**2)** `walkthroughObj.setOptions()` :-  It allows you to specify the walkthrough details in a JSON Object

`title` - Title for that Step

`intro` - Intro Message for that Step

`element` - Walkthrough on which element to be specified

`position` - Position of the display box (top, bottom, right, left)

`step` - step in order

```javascript
walkthroughObj.setOptions({
  steps: [
    {
      title: 'Welcome',
      intro: 'Hello World! 👋',
      step: 1,
      element:  document.querySelector('.card-title') 
    },
    {
      element: document.querySelector('.card-demo'),
      intro: 'This step focuses on an image 👀',
      position: "top"
    },
    {
      title: 'Farewell!',
      element: document.querySelector('.card__image'),
      intro: 'And this is our final step!👋',
      position: "bottom"
    }
  ]
}).start()
```

## Contributing ✨

Contributions are welcome! If you find any issues or have suggestions for improvements, please submit them to the project's GitHub repository. 🐛



