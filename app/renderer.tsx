import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import '../lib/i18n'
import './styles/index.css'
import App from './App'
import appIcon from '@/resources/build/icon.png'
import { WindowContextProvider, menuItems } from '@/lib/window'
import '@/lib/window/window.css'

ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <WindowContextProvider titlebar={{ title: 'LocalMCPManus', icon: appIcon, menuItems }}>
        <App />
      </WindowContextProvider>
    </Router>
  </React.StrictMode>
)
