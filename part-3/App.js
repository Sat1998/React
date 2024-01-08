import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
  <h1 className="header" tabIndex={2}>
    Functional Component
  </h1>
);

//Component composition- component inside a component
const HeadingComponent = () => (
  <h1 className="header" tabIndex={2}>
    <Title />
    <Title>Hey satay</Title>
    Welcome to react functional component
  </h1>
);
console.log(<HeadingComponent />);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
