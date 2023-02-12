import React from 'react'
import Button from '../utilities/Button'

const Home = () => {
  return (
      <section id="home" className="Home" >
          <div style={{transitionDelay : "100ms"}}>
            <h1>Hi, my name is</h1>
          </div>
          <div style={{transitionDelay : "200ms"}}>
            <h2 className="big-heading">Hemant Kumar</h2>
          </div>
          <div style={{transitionDelay : "300ms"}}>
            <h3 className="big-heading">I build things to learn while having fun.</h3>
          </div>
          <div style={{transitionDelay : "400ms"}}>
            <p>I am an aspiring engineer and enthusiastic programmer. I'm from India and a Computer science engineering student. I just love to learn new things and explore different areas.I work with Python, React for frontend and am versed working with relational databases.
            </p>
          </div>
          <div style={{transitionDelay : "500ms"}}>
            <a className="button" href="#projects" target="_blank" rel="noreferrer">Check Out my works!</a>
          </div>
      </section>
  )
}

export default Home