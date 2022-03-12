import React from "react";
import Home from "./Pages/Home";
import globalStyles from "./styles/resetCss";

const App = () => {
  globalStyles();
  return (
    <Home />
  );
}
export default App;
