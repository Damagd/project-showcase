import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { OptionsProvider } from './context/optionsOverlay.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <OptionsProvider>
    <App />
  </OptionsProvider>
)
