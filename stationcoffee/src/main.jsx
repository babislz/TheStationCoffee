import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import Home from './pages/home'
// import Login from './pages/login/index.jsx'
import Order from './pages/order/index.jsx'
import Mesas from './pages/mesas/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Mesas />
  </StrictMode>,
)
