import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { RoutesPath } from './RoutesPaths/RoutesPath.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RoutesPath />
  </React.StrictMode>,
)
