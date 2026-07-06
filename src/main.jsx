import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App.jsx' // Double-check this path matches your tree!
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)