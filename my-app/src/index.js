import React, { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"

import Game from "./components/Game";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Game />
  </StrictMode>
);