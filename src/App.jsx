import React from "react";
import { render } from "react-dom";

import Controller from "./components/Controller/Controller.jsx";

export default function App() {
  return (
    <div className="app">
      <Controller />
    </div>
  );
}

render(<App />, document.getElementById("root"));
