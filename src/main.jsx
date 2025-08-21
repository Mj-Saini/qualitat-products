import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import CardContext from './context/CardContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <CardContext>
    <App />
      </CardContext>
    </BrowserRouter>
  </StrictMode>,
)
