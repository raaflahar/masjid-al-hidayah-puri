import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Hero from './pages/Hero/Hero'
import About from './pages/About/About'
import Navbar from './components/Navbar/Navbar'
import Profile from './pages/Profile/Profile'
import Contact from './pages/Contact/Contact'
import Footer from './components/Footer/Footer'
import News from './pages/News/News'
import Documentation from './pages/Documentation/Documentation'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    <Hero/>
    <About/>
    <News/>
    <Documentation/>
    <Profile/>
    <Contact/>
    <Footer/>
  </StrictMode>,
)
