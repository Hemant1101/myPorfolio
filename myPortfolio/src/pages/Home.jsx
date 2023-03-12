import React from 'react'
import HeroImg from '../assets/neon-laptop.png'

const Home = () => {
  return (
    <section id="home" >
      <div className="Home">
        <div style={{ transitionDelay: "100ms" }}>
          <h1>Hi, my name is</h1>
        </div>
        <div style={{ transitionDelay: "200ms" }}>
          <h2 className="big-heading">Hemant,</h2>
        </div>
        <div style={{ transitionDelay: "300ms" }}>
          <h3 className="big-heading">I build things to learn while having fun.</h3>
        </div>
        <div style={{ transitionDelay: "400ms" }}>
          <p>I am an aspiring engineer and enthusiastic programmer. I'm from India and a Computer science engineering student. I like to work with Python (mostly) and React for frontend. I am also well versed in working with relational databases.
          </p>
        </div>
        <div style={{ transitionDelay: "500ms" }}>
          <a className="button" href="/#projects" rel="noreferrer">Check Out my works!</a>
        </div>
      </div>
      <div className="hero-img"><img src={HeroImg} alt="hero-Laptop" /></div>
    </section>
  )
}

export default Home