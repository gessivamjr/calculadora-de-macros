import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";

const theme = {
    color: {
        primary: "#EEEEEE",
        secundary: "#BDBDBD",
        tertiary: "#757575",
        quaternary: "#333333",
    },
};

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
);
