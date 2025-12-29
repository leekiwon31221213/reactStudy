import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import React공부 from "./React공부";

// const activeLink = ({ isActive }) => ({
//   color: isActive ? "red" : "blue",
//   fontWeight: isActive ? "600" : "400",
// });
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <React공부></React공부>
  </StrictMode>
);
