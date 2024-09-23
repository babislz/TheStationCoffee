import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import Home from './pages/home'
import Test from './pages/test'
// import Mesas from './pages/mesas'
// import Login from './pages/login/index.jsx'
// import Order from './pages/order/index.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Test />
  </StrictMode>,
)
