// 20 Digits of Pi in JSX
// You can now inject regular JavaScript into JSX expressions! This will be extremely useful.

// In the code editor, you can see a JSX expression that displays the first twenty digits of pi.

// Study the expression and notice the following:

// The code is written in a JavaScript file. By default, it will all be treated as regular JavaScript.
// Find <div> on line 5. From there up through </div>, the code will be treated as JSX.
// Find Math. From there up through (20), the code will be treated as regular JavaScript again.
// The curly braces themselves won’t be treated as JSX nor as JavaScript. They are markers that signal the beginning and end of a JavaScript injection into JSX, similar to the quotation marks that signal the boundaries of a string.

// Select app.js.
// Declare a new variable named math. Set math equal to a JSX <h1></h1> element.
// Put the following text inside of the <h1>:
// 2 + 3 = 2 + 3

// At the bottom of the file, call ReactDOM.render().
// For ReactDOM.render()‘s first argument, pass in math.
// For ReactDOM.render()‘s second argument, pass in document.getElementById('app').

// As you probably expected, the equation was displayed as a string.
// Insert a pair of curly braces into the <h1></h1>, so that the browser displays 2 + 3 = 5.

import React from "react";
import ReactDOM from "react-dom";

const pi = (
  <div>
    <h1>PI, YALL!</h1>
    <p>{Math.PI.toFixed(20)}</p>
  </div>
);

ReactDOM.render(pi, document.getElementById("app"));
