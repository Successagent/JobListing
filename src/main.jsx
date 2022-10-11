import './index.css'
import React from 'react'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'

import ReactDOM from 'react-dom/client'
import { Home, About } from './pages'
import Contact from './pages/Contact'
import JobLeft from './pages/JobLeft'
import { Login } from './pages/auth'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },

  {
    path: '/contact',
    element: <Contact />,
  },

  {
    path: '/jobleft',
    element: <JobLeft />,
  },

  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <About />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
