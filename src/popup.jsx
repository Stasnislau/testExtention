import React from "react";
import { render } from "react-dom";
import Banner from "./components/banner.jsx";
import InputModifier from "./components/inputModifier.jsx";

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
  return <InputModifier />;
}

if (isPopUp) {
  const root = document.getElementById("root-for-popup");
  render(<Popup />, root);
} else {
  const target = document.querySelector(".message-input-wrapper");
  console.log(target);
  if (!target) {
    console.log("target not found");
  } else {
    const realTarget = target.appendChild(document.createElement("div"));
    render(<Embedded />, realTarget);
  }
}
