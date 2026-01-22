import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css' // El bootstrap
import Router from './app/Router' // Importamos nuestro router 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router />
    <App />
  </StrictMode>,
)
