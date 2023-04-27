// JSX Conditionals: &&
// We’re going to cover one final way of writing conditionals in React: the && operator.

// Like the ternary operator, && is not React-specific, but it shows up in React very often.

// In the last two exercises, you wrote statements that would sometimes render a kitty and other times render a doggy. && would not have been the best choice for that code.

// && works best for conditionals that will sometimes do an action but other times do nothing at all.

// Here’s an example:

// const tasty = (
//   <ul>
//     <li>Applesauce</li>
//     { !baby && <li>Pizza</li> }
//     { age > 15 && <li>Brussels Sprouts</li> }
//     { age > 20 && <li>Oysters</li> }
//     { age > 25 && <li>Grappa</li> }
//   </ul>
// );
// If the expression on the left of the && evaluates as true, then the JSX on the right of the && will be rendered. If the first expression is false, however, then the JSX to the right of the && will be ignored and not rendered.