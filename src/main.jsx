import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import Portfolio from './Pages/Portfolio'

const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  children: [
    {
      path: '/*',
      element: <h1>404</h1>
    },
    {
      path: 'home',
      element: <Home />
    },
    {
      path: 'portfolio',
      element: <Portfolio />
    }
  ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>,
)
