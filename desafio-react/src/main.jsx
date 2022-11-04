import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'

import { Home } from './pages/Home'
import { Community } from './pages/Community'
import { NotFound } from './pages/NotFound'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {
      location.pathname === '/' ? <Home />
        : location.pathname === '/community' ? <Community />
          : <NotFound />
    }
  </React.StrictMode>
)
