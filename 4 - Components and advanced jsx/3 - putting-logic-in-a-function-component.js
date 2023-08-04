// Putting Logic in a Function Component
// A function component must have a return statement.However, that isn’t all that it can have.

// You can also put simple calculations that need to happen before returning your JSX element within the function component.

// Here’s an example of some calculations that can be done inside a function component:

//     function RandomNumber() {
//     //First, some logic that must happen before returning
//     const n = Math.floor(Math.random() * 10 + 1);
//     //Next, a return statement using that logic: 
//     return <h1>{n}</h1>
// }
// Watch out for this common mistake:

//     function RandomNumber() {
//         return (
//     const n = Math.floor(Math.random() * 10 + 1);
//     <h1> { n }</h1 >
//   )
//     }
// In the above example, the line with the const n declaration will cause a syntax error, as it should come before the return.






// Let’s make a function component with some logic in it.
// Start by importing React from the React library at the top of the Friend.js file.

// Create a new function component named Friend.
// Your function component should just return an empty <div> for now.

// Although you’re not done with the component, export it so that you can see your progress being rendered in the browser window as you work.
// At the bottom of your Friend.js file, default export your Friend component.

// Time to add some logic.
// Before the return statement, declare a new variable named friend.
// Set friend equal to either friends[0], friends[1], or friends[2], depending on which friend sounds most appealing to you.

// Inside the <div> element in the return statement, add an <h1> element.
// Inside of the <h1></h1> tags, inject friend.title.

// Finally, let’s meet your new friend by adding a picture of them.
// Still inside of the <div></div> tags, make a new line after the <h1></h1> tags.
// On the new line, add an <img /> element. Give the <img /> tag an attribute of src with the value of {friend.src}.