<<<<<<< HEAD
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './pages'
import './index.css'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
=======
import React from "react";
import ReactDOM from "react-dom/client";
import { Home, About } from "./pages";
import { Login } from "./pages/auth";

import "./index.css";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
>>>>>>> 24c350868562ca4dc0a0ff85d4a5a309fed1f24e

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
<<<<<<< HEAD
  {
    path: '/contact',
    element: <Contact />,
  },
])
=======

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
>>>>>>> 24c350868562ca4dc0a0ff85d4a5a309fed1f24e

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
