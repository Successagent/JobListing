import "./index.css";
import React from "react";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

import JobLeft from "./pages/JobLeft";
import ReactDOM from "react-dom/client";
import { Home, About } from "./pages";
import Contact from "./pages/Contact";
import { Login } from "./pages/auth";
import JobsList from "./pages/JobsList";
import Register from "./pages/auth/Register";

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

  {
    path: "/contact",
    element: <Contact />,
  },

  {
    path: "/job",
    element: <JobLeft />,
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
