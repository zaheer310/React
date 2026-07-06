import React from "react";
import ReactDOM from "react-dom/client";

// Create your component
const App = () => {
  return <h1>Hello from React!</h1>;
};

// Render to the DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
