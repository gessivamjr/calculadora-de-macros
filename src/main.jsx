import React from "react";
import ReactDOM from "react-dom";
import styledComponents from "styled-components";
import App from "./App";
import { ThemeProvider } from "styled-components";

const theme = {
  color: {
    primary: "#EEEEEE",
    secundary: "#BDBDBD",
    tertiary: "#757575",
    quaternary: "#333333",
  }
}

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
