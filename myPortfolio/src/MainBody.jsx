import React from 'react'
import Home from './pages/Home'
import Footer from './pages/Footer'
import About from './pages/About'

const MainBody = () => {
  return (
    <div>
    <main className="fillHeight">
        <Home/>
        <About />
    </main>
    <Footer />
    </div>
  )
}

export default MainBody