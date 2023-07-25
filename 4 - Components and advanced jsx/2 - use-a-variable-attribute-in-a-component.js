// Use a Variable Attribute in a Component
// Take a look at this JavaScript object named redPanda:

// const redPanda = {
//   src: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Endangered_Red_Panda.jpg',
//   alt: 'Red Panda',
//   width: '200px
// };
// How could you render a React component with an image of redPanda and its properties?

// Select RedPanda.js to see one way to do this.

// Note all the curly brace JavaScript injections inside the return statement. You can, and often will, inject JavaScript into JSX inside the return statement.





// Select Owl.js.
// Start by importing React from the React library.

// Let’s create our component.
// In Owl.js, declare a new function component named Owl. Owl should return an empty <div></div>.
// Feel free to use RedPanda.js for guidance.

// Although you’re not done with the component, export it so that you can see your progress being rendered in the browser window as you work.
// At the bottom of the Owl.js file, default export your Owl component.

// Our owl object has 2 properties, title and src which has a link to an image. We’ll display both of these, starting with the title.
// Nest an <h1> element inside of your <div> element.
// Use the value of owl.title as the content of the <h1> element. Remember, you will have to use curly braces to access owl.title, since it is a JavaScript property.
// Don’t forget to wrap the whole multi-line JSX expression in parentheses!

// Still inside of the <div></div> tags, make a new line after the <h1></h1> tags.
// On your new line, add an <img /> element.
// Your <img /> should have two attributes:
// an src of owl.src
// an alt of owl.title

