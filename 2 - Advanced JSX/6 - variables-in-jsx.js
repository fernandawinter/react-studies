// Variables in JSX
// When you inject JavaScript into JSX, that JavaScript is part of the same environment as the rest of the JavaScript in your file.

// That means that you can access variables while inside of a JSX expression, even if those variables were declared on the outside.

// // Declare a variable:
// const name = 'Gerdo';
 
// // Access your variable 
// // from inside of a JSX expression:
// const greeting = <p>Hello, {name}!</p>;





// Replace ReactDOM.render()‘s first argument with a JSX <h1></h1>.
// Using curly braces, set the <h1></h1>‘s inner text equal to theBestString.

import React from 'react';
import ReactDOM from 'react-dom';

const theBestString = 'tralalalala i am da best';

ReactDOM.render(<h1>{theBestString}</h1>, document.getElementById('app'));