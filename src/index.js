import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { BookFavContextProvider } from "./store/bookshelf-fav-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BookFavContextProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </BookFavContextProvider>
);
