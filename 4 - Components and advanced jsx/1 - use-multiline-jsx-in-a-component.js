// Use Multiline JSX in a Component
// In this lesson, you will learn some common ways that JSX and React components work together. You’ll get more comfortable with both JSX and React components while picking up some new tricks.

// Take a look at this HTML:

// <blockquote>
//   <p>
//     The world is full of objects, more or less interesting; I do not wish to add any more.
//   </p>
//   <cite>
//     <a target="_blank"
//       href="https://en.wikipedia.org/wiki/Douglas_Huebler">
//       Douglas Huebler
//     </a>
//   </cite>
// </blockquote>
// How might you make a React component return this HTML?

// Select QuoteMaker.js to see one way of doing it.

// The key thing to notice in QuoteMaker is the parentheses in the return statement, on lines 4 and 16. Until now, your function component return statements have looked like this, without any parentheses:

// return <h1>Hello world</h1>;
// However, a multi-line JSX expression should always be wrapped in parentheses! That is why QuoteMaker‘s return statement has parentheses around it.