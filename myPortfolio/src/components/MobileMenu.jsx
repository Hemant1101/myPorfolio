import React, { useState } from 'react'
import Button from '../utilities/Button'
import { menuItems } from './MenuList'

const MobileMenu = () => {
  const [isOpen,setisOpen] = useState(false)

  function handleHamClick(){
    
    if(!isOpen){
      if(typeof window != 'undefined' && window.document){ 
        document.body.classList.add('blur')
      }
    }
    if(isOpen){
      document.body.classList.remove('blur')
    }
    setisOpen(!isOpen)
  }

  return (
    <div id="mobilemenu" >
      <button className={`mobile-menu-button ${isOpen ? "mobile-open" : "mobile-closed" }`} onClick={handleHamClick}>
        <div className="ham-box">
          <div className="ham-box-inner">
          </div>
        </div>
      </button>
      <aside aria-hidden={`${isOpen ? "false" : "true" }`} tabIndex={`${isOpen ? "1" : "-1" }`} className={`mobile-menu-container ${isOpen ? "aside-open" : "aside-closed" }`}>
        <nav>
          <ol>
            {menuItems.map((values)=>{
              return (
                <li key={values.id} onClick={handleHamClick}>
                  <a href={values.href}>
                    {`${values.name}`}
                  </a>
                </li>
              )
            })
            }
          </ol>
          <Button href="/resume.pdf" classname="resume-link" target="_blank">Resume</Button>
        </nav>
      </aside>
    </div>
  )
}

export default MobileMenu