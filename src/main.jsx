import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import Home from './pages/home'
import Login from './pages/login'
import Order from './pages/order'
import Mesas from './pages/mesas'
import Test from "./pages/test";

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
  },
  {
    path: "/tables",
    element: <Mesas/>
  },
  {
    path: "/test",
    element: <Test />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
