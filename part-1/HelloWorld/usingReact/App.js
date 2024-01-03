// 3.Rendering a nested siblings using react.
/*
 * <div id="parent">
 * <div id="child">
 * <h1>I am an h1 tag</h1>
 * <h2>I am an h2 tag</h2>
 * </div>
 * <div id="child2">
 * <h1>I am an h1 tag</h1>
 * <h2>I am an h2 tag</h2>
 * </div>
 * </div>
 */

const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am an h1 tag"),
    React.createElement("h2", {}, "I am an h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am an h1 tag"),
    React.createElement("h2", {}, "I am an h2 tag"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

// 3.Rendering a siblings using react.
/*
 * <div id="parent">
 * <div id="child">
 * <h1>I am an h1 tag</h1>
 * <h2>I am an h2 tag</h2>
 * </div>
 * </div>
 */

// const heading = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "I am an h1 tag"),
//     React.createElement("h2", {}, "I am an h2 tag"),
//   ])
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// 2.Rendering a child using react basics.
/*
 * <div id="parent">
 * <div id="child">
 * <h1>I am an h1 tag</h1>
 * </div>
 * </div>
 */

// const heading = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", {}, "I am an h1 tag")
//   )
// );

// console.log(heading); //object
// const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(root);

// root.render(heading);

// 1. Simple sentense rendering in react.
/*
 *
 * <h1 id="heading">
 * Hello world from react
 * </h1>
 */

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello world from react"
// );

// console.log(heading);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(root);

// root.render(heading);
