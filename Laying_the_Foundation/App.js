/*
 * This are the feature of Parcel
 * Created A Server
 * HMR - Hot Module Replacement
 * File Watcher algorithm - C++
 * BUNDLING
 * MINIFY
 * Cleaning our Code
 * Dev abd Production Build
 * Super Fast build algorithm
 * Image Optimization
 * Caching while development
 * Compression
 * Compatible with older version of browser
 * HTTPS on dev
 * port Number
 * Consistent Hashing Algorithm
 * Zero Config
 * Tree shaking
 *
 *
 * Transitive Dependencies
 */

import React from "react";
import ReactDOM from "react-dom/client";

// create header element using JSX
// JSX => React.createElement => Object => HTML (DOM) (babel does all the conversion)
const heading = (
  <h1 id="h1" key="h1">
    This is JSX
  </h1>
);

// React Component
// Functional component - new way of writing component
// Class component - old way of writing component

// Title component is functional component
const Title = () => {
  return (
    <h1 id="title" key="title">
      Namaste React
    </h1>
  );
};

// title element.

const title = <h1>Namaste React </h1>;
// Header component is functional component
const HeaderComponent = function () {
  return (
    <div>
      <Title />
      {/* we can also use <Title()>  */}
      {/* we can also use <Title></Title> */}
      {title}
      <h1>Namaste React Functional component</h1>
      <h2>This is h2 tag</h2>
    </div>
  );
};

// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
root.render(<HeaderComponent />);
