// Create a complex nested structure

const app = React.createElement(`div`, { id: `app`, className: `container` }, [
  React.createElement(
    `div`,
    { className: `header` },
    React.createElement(`h1`, {}, `Welcome To React`),
  ),
  React.createElement(`div`, { className: `content` }, [
    React.createElement("h2", {}, "Getting Started"),
    React.createElement("p", {}, "This is my first React app!"),
    React.createElement(`ul`, {}, [
      React.createElement(`h2`, {}, `Learn React`),
      React.createElement(`h2`, {}, `Build Projects`),
      React.createElement(`h2`, {}, `Get Job!`),
      React.createElement(`h2`, {}, `Create Your Own Company!!!!!`),
    ]),
  ]),
]);

// Create root and render
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(app);

// Log to see the object
console.log("React Element:", app);
console.log("React Object:", React);
console.log("ReactDOM Object:", ReactDOM);

// // Task 1:
// const h1 = React.createElement(`h1`, {}, `React Project`);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(h1);
