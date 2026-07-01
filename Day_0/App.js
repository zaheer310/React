// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World from React!",
// );
// console.log(document.getElementById("heading").innerText);

// const heading = React.createElement("h1", {}, "Hello from React");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// Creating Nested Structures

/* <div id="parent"> */
/* <div id="child"> */
/* <h1>I am an h1 tag</h1> */
// </div>
// </div>

// const parent = React.createElement(
//   "div", // Outer div
//   { id: "parent" }, // Its attributes
//   React.createElement(
//     // Its child (another div)
//     "div",
//     { id: "child" },
//     React.createElement(
//       // Child's child (h1)
//       "h1",
//       {},
//       "I am an h1 tag",
//     ),
//   ),
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

// console.log(parent);

// Handling Siblings: Arrays for Multiple Children

// Solution: Use an Array

// const parent = React.createElement(`div`, { id: `parent` }, [
//   React.createElement(`h2`, {}, `I am an h2 tag `),
// ]);

// root.render(parent);

// const parent = React.createElement("div", { id: "parent" }, [
//   // Array of children
//   React.createElement("h1", {}, "I am an h1 tag"),
//   React.createElement("h2", {}, "I am an h2 tag"),
// ]);

// root.render(parent);


// Complete Working Example:
// Create a complex nested structure
const app = React.createElement(
"div",
{ id: "app", className: "container" },
[
React.createElement(
"div",
{ className: "header" },
React.createElement("h1", {}, "Welcome to React")
),
React.createElement(
"div",
{ className: "content" },
[
React.createElement("h2", {}, "Getting Started"),
React.createElement("p", {}, "This is my first React app!"),
React.createElement(
"ul",
{},
[
React.createElement("li", {}, "Learn React"),
React.createElement("li", {}, "Build Projects"),
React.createElement("li", {}, "Get a Job!")
]
)
]
)
]
);
// Create root and render
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(app);
// Log to see the object
console.log("React Element:", app);
console.log("React Object:", React);
console.log("ReactDOM Object:", ReactDOM);