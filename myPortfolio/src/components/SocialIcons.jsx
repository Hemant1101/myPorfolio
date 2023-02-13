import React from 'react'
import {ReactComponent as GithubIcon } from '../assets/github.svg'
import {ReactComponent as LinkedinIcon } from '../assets/linkedin.svg'


const SocialIcons = () => {
  return (
    <ul className="social-icon-list">
      <li>
        <a href="https://www.github.com/hemant1101" aria-label="GitHub" target="_blank" rel="noreferrer">
          <GithubIcon />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/hemant-kumar-mandal-417a491b0" aria-label="Linkedin" target="_blank" rel="noreferrer">
          <LinkedinIcon />
        </a>
      </li>
    </ul>
  )
}

export default SocialIcons