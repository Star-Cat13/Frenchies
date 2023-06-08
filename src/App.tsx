// import { useState } from 'react'
import './App.css'
// import MainLayout from './layout/MainLayout'
import Home from './pages/homepage'
import GridPix from './components/gridpix'
import About from './pages/aboutpage'
import Contact from './pages/contactpage'
import Footer from './components/footer'

function App() {


  return (

    <div>

      <Home />
      <GridPix />
      <About />
      <Contact />
      <Footer />

    </div>
  )
}

export default App
