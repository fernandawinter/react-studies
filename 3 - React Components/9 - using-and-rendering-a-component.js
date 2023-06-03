// Using and Rendering a Component
// Now that we have a defined function component, we can start using it.

// We can use it with an HTML - like syntax that resembles a self - closing tag:

// <MyComponent />
// If you need to nest other components in between, you may also use an opening and corresponding closing tag structure:

// <MyComponent>
//     <OtherComponent />
// </MyComponent>
// However, to render our component to the browser, we must rely on the.createRoot() and.render() methods from the react - dom library.This should be done in our entry point, index.js.

//     First, we call the createRoot method to create a React root container for displaying content.React applications typically have a single root DOM node, and everything inside it is managed by React DOM.

// In other words, we give createRoot a DOM element to render in, and React will take over managing the DOM inside it.

//     Here’s an example:

// ReactDOM.createRoot(document.getElementById('app'));
// Great! Let’s break it down a bit further:

// document.getElementById('app') returns a DOM element from index.html.
// .createRoot() receives the DOM element as the first argument and creates a root for it.
// .createRoot() returns a reference to the root container on which you can call methods like.render().
// After the root is created, all that’s left to do is call the.render() method on the returned root and display the React component like so:

// ReactDOM.createRoot(document.getElementById('app')).render(<MyComponent />);
// From here, React will display < MyComponent /> in the root and make it appear on the screen.

// In an application fully built with React, you will only need to do this once.Once this is set up, React will manage the DOM of your application, and any updates to the UI is taken care of efficiently.Adding more components should take place in your top - level App.js file.