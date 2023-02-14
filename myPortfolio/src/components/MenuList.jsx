import React from 'react'
import Button from '../utilities/Button'

export const menuItems = [
  {
    id : 1,
    name : "About",
    href : "/#about"
  },
  {
    id : 2,
    name : "Work",
    href : "/#projects"
  },
  {
    id : 3,
    name : "Contact",
    href : "/#contact"
  }
]

const MenuList = () => {
  return (
    <div className="menulist">
      <ol>
        {menuItems.map((values)=>{
          return (
            <li key={values.id}>
              <a href={values.href}>
                {`${values.name}`}
              </a>
            </li>
          )
        })
        }
      </ol>
      <div>
        <Button classname="resume-button" href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</Button>
      </div>
    </div>
  )
}

export default MenuList