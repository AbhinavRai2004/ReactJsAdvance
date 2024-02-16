// const heading = React.createElement("h1", {id : "heading"}, "Namaste React using Reactjs");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

/* 
    <div id="parent>
        <div id="children">
           <h1 id= "heading">I am heading</h1>
          </div>
    </div>
*/

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "children" }, [
    React.createElement("h1", { id: "heading1" }, "Namaste React1 using React"),
    React.createElement("h1", { id: "heading2" }, "Namaste React2 using React")
  ])
);

// Manipulate the HTML DOM using Javscript
// const heading = document.createElement("h1");
// heading.innerHTML = "Namaste Everyone";
// const root = document.getElementById("root");
// root.appendChild(heading);

// Manipulate the HTML DOM using React

// Create nested React Elements
const heading = React.createElement(
  "h1",
  {
    id: "title",
    style: {
      background: "red"
    },
    className: "title"
  },
  "heading"
);
const heading1 = React.createElement(
  "h1",
  {
    id: "title"
  },
  "heading1"
);

const container = React.createElement(
  "div",
  {
    id: "container"
  },
  [heading, heading1]
);

// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
root.render(parent);
