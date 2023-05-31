// Importing and Exporting React Components
// There’s a little bit more work we have to do before we can use our defined component and have it rendered onto the DOM.

// We previously mentioned that a React application typically has two core files: App.js and index.js.App.js file is the top level of your application, and index.js is the entry point.

// So far, we’ve defined the component inside of App.js, but because index.js is the entry point, we have to export it to index.js to render.

// Components in React are great because they are reusable.We can keep our component pieces separated, organized, and reusable by putting them into separate files and exporting them to where we need them.

// To export them, we can prefix it with the export declaration and specify if it is a default or named export. In this case, we’ll stick with default. If you need a refresher on export, peruse the MDN web docs.

// After the function component definition, in App.js, we can default export our component like so:

// export default MyComponent;
// We can head into our index.js file to import our component from './App':

// import MyComponent from './App';
// This will allow us to use MyComponent in index.js.