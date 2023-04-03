import React from 'react'
import ReactDOM from 'react-dom/client'
import { Navbar } from './Navbar'
import Home from './Home'
import './index.css'

import { Contact } from './Contact'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Contact />
    <Home />
  </React.StrictMode>,
)
