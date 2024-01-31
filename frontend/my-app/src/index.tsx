import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Personal from "./components/Personal";
import { loader } from "./loaders/loader";
import axios from "axios";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loader,
  },
  {
    path: "personal/:username/:id",
    element: <Personal />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<RouterProvider router={router} />);
