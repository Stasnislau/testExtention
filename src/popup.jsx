import React from "react";
import { render } from "react-dom";
import {
  AppBar,
  Box,
  LinearProgress,
  Toolbar,
  Typography,
} from "@mui/material";

// create div "root"

// isPopUp is true if there is "root" div in popup.html
const isPopUp = !!document.getElementById("root");

// if "root" does not exist, create in-page div "in-page-root"
if (!isPopUp) {
  var inPageRoot = document.createElement("div");
  inPageRoot.id = "in-page-root";
  document.body.appendChild(inPageRoot);
}


function Popup() {
  return (
    <div>
      <h1>Text for pupop</h1>
      
    </div>
  );
}

function Embedded() {
  console.log("embedded");
  return (
    <div>
      <h1>Text for embedded</h1>
    </div>
  );
}

// if "root" exists, render Popup
if (isPopUp) {
  const root = document.getElementById("root");
  render(<Popup />, root);
} else {
  const inPageRoot = document.getElementById("in-page-root");
  render(<Embedded />, inPageRoot);
}

