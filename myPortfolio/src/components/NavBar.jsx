import React,{useEffect, useState} from 'react'
import MobileMenu from './MobileMenu'
import MenuList from './MenuList'
import useWindowSize from '../hooks/useWindowSize'
import useScrollDirection from '../hooks/useScrollDirection'
import { ReactComponent as Logo } from '../assets/logo.svg'

const NavBar = () => {

  const [isMobile,setisMobile] = useState(false)

  const windowSize = useWindowSize()

  const scrollDirection = useScrollDirection()
  
  useEffect((e)=>{
    if(windowSize.width < 700){
      setisMobile(true)
    }
    else{
      setisMobile(false)
    }
  },[windowSize.width])


  return (
    <header className={` ${scrollDirection === "down" ? "headerHide" : "headerShow" }`}>
    <nav className="navbar">
      <div className="logo">
        <a href="/#"><Logo /></a>
      </div>
      { isMobile ? <MobileMenu /> : <MenuList />}
        
    </nav>
    </header>
  )
}

export default NavBar