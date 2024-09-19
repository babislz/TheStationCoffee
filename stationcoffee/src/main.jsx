import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/home'
// import Login from './pages/login/index.jsx'
<<<<<<< HEAD
// import Order from './pages/order/index.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
=======
import Order from './pages/order/index.jsx'
import Mesas from './pages/mesas/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Mesas />
>>>>>>> c35a00fd3e415a3fb0400bce22aab40902849605
  </StrictMode>,
)
