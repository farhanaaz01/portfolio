import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { sumNumbers } from './utils/reviewAgentTest.js'

if (import.meta.env.DEV) {
  void sumNumbers([1, 2, 3])
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
