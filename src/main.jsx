import React from "react";
import ReactDOM from "react-dom/client";
import { Home } from "./pages";
import "./index.css";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import About from "./pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
