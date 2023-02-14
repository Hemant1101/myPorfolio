import React from 'react'
import Home from './pages/Home'
import Footer from './pages/Footer'
import About from './pages/About'
import Projects from './pages/Projects'

const MainBody = () => {
  return (
    <div>
    <main className="fillHeight">
        <Home/>
        <About />
        <Projects />
    </main>
    <Footer />
    </div>
  )
}

export default MainBody