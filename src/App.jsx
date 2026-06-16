import { useState } from 'react'
import Header from './header'
import Hero from './hero'
import About from './aboutme'
import Skills from './skills'
import Projects from './projects'
import Education from './education'
import Contact from './contact'
import Footer from './footer'
import './App.css'

function App() {



  return (
   
      <>
      
      
    {/* header component */}
      <Header />

      <Hero />
      <About/>

      <Skills />

      <Projects />
      <Education />
      <Contact />
      <Footer />
      </>
  
  )
}

export default App
