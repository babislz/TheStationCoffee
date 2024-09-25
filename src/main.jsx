import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import Home from './pages/home'
import Login from './pages/login'
import Order from './pages/order'

const router = createBrowserRouter([
  {
    path: "/:tableId",
    element: <Home/>,
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/order",
    element: <Order/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
