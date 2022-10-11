import React from "react";
import ReactDOM from "react-dom/client";
import { Home, About } from "./pages";
import { Login } from "./pages/auth";

import "./index.css";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import JobsList from "./pages/JobsList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/jobs-list",
    element: <JobsList />,
  },

  // AUTH pages
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <About />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
