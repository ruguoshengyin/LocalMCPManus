import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import appIcon from '@/resources/build/icon.png'
import { WindowContextProvider, menuItems } from '@/app/window'
import './window/window.css'

ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
  <React.StrictMode>
    <WindowContextProvider titlebar={{ title: 'LocalMCPManus', icon: appIcon, menuItems }}>
      <App />
    </WindowContextProvider>
  </React.StrictMode>
)
