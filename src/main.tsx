import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './pages/Home'

import '@fontsource-variable/onest'

import 'animate.css'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
)
