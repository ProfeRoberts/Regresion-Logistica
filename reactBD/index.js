import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./src";

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    //BrowserRouter es considerado un componente, al igual que App
    document.getElementById("app")
);
