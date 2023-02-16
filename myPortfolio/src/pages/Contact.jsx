import React from 'react'

 const Contact = () => {
  return (
    <section id="contact" className="contact" style={{
      transition: "all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s, opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s, transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s", 
      visibility: "visible", 
      opacity: "1", 
      transform:"matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"}}
    >
      <h2 className="numbered-heading overline">What's Next?</h2>
      <h2 className="title">Get In Touch</h2>
      <p>I am currently in my final year of B.tech(CSE) and actively looking for new oppurtunitiees. My inbox is always open. I'll try my best to get back to you!</p>
      <a href="mailto:hemantmandal1101+portfolio@gmail.com" className="email-link" rel="noopener noreferrer" target="_blank">Say Hello</a>
    </section>
  )
}

export default Contact