import React from 'react'
import ReactDOM from 'react-dom/client'

import { Navbar } from './Navbar'
import { Home } from './Home'
import { Contact } from './Contact'
import { About } from './About'
import { Experience } from './Experience'
import { Footer } from './Footer'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Contact />
    <Home />
    <About />
    <Experience />
    <Footer />
  </React.StrictMode>,
)
