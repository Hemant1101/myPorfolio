import React from 'react'
import SocialIcons from '../components/SocialIcons'
import GithubStats from '../components/GithubStats'

const Footer = () => {
  return (
      <footer className="footer">
          <SocialIcons />
          <div className="endingRemarks">
              <a href="#githubrepolink" rel="noopener noreferrer" target="_blank">
                  <div>Built by Hemant Kumar & UI Design inspired by Brittany Chiang</div>
                  <GithubStats />
              </a>
          </div>
      </footer>
  )
}

export default Footer