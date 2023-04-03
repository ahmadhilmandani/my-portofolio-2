import React from 'react'
import ReactDOM from 'react-dom/client'

import { Navbar } from './Navbar'
import { Home } from './Home'
import { About } from './About'
import { Experience } from './Experience'
import {Footer} from './Footer'

import './index.css'

import { Contact } from './Contact'

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
