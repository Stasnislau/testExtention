import React from "react";
import { render } from "react-dom";
import Banner from "./components/banner.jsx";

const isPopUp = !!document.getElementById("root-for-popup");

if (!isPopUp) {
  var inPageRoot = document.createElement("div");
  inPageRoot.id = "in-page-root";
  document.body.appendChild(inPageRoot);
}

function Popup() {
  return (
    <div>
      <h1>Text for popup</h1>
    </div>
  );
}

function Embedded() {
  console.log("embedded");
  return (
    <div>
      <h1>Text for embedded</h1>
      <Banner />
    </div>
  );
}

if (isPopUp) {
  const root = document.getElementById("root-for-popup");
  render(<Popup />, root);
} else {
  const inPageRoot = document.getElementById("in-page-root");
  render(<Embedded />, inPageRoot);
}
