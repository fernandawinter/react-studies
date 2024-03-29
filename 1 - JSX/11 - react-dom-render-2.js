// ReactDOM.render() II
// Move to the right a little more, and you will see this expression:

// document.getElementById('app')
// You just learned that ReactDOM.render() makes its first argument appear onscreen. But where on the screen should that first argument appear?

// The first argument is appended to whatever element is selected by the second argument.

// In the code editor, select index.html. See if you can find an element that would be selected by document.getElementById('app').

// That element acted as a container for ReactDOM.render()‘s first argument! At the end of the previous exercise, this appeared on the screen:

// <main id="app">
//   <h1>Render me!</h1>
// </main>




// In index.html, replace this:
// <main id="app"></main>
// with this span:
// <span id="container"></span>

// Select app.js.
// You want <h1>Render me!</h1> to be appended to <span id="container"></span>.
// On line 5, make that happen by changing the string passed to document.getElementById().

app.js

import React from 'react';
import ReactDOM from 'react-dom';

// Write code here:
ReactDOM.render(<h1>Render me!</h1>, document.getElementById('container'));


index.html

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<link rel="stylesheet" href="/styles.css">
	<title>Learn ReactJS</title>
</head>

<body>
  <span id="container"></span>
	<script src="https://content.codecademy.com/courses/React/react-course-bundle.min.js"></script>
  <script src="/app.compiled.js"></script>
</body>

</html>