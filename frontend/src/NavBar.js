import React, {useState} from 'react'
import './NavBar.css'
import { FaFacebookSquare } from 'react-icons/fa'
import { GrInstagram } from 'react-icons/gr'
import { ImLinkedin } from 'react-icons/im'
import {BsChatSquareDotsFill} from 'react-icons/bs'

const NavBar = ({handleGoToTop, handleWhatWeDo}) => {
    /* Used to set up the modal of the navbar */
    const [hamburger, setHamburger] = useState(false);
    return (
      <div className="overall-navbar">
        <div className="nav-bar">
          {/* Regular Nav */}
            <div onClick={handleGoToTop} className="nav-left">
                <img className="logo" alt="logo" src="images/Nav-Logo.png" width="200"/>
            </div> 
            <div className="nav-right">
                <a href="#chat" className="icons mg-right">
                  <BsChatSquareDotsFill/>
                </a>
                <a className="icons mg-right" href="https://www.linkedin.com/company/kids-galaxy/about/" target="_blank" rel="noreferrer">
                  <ImLinkedin/>
                </a>
                <a className="icons mg-right" href="https://www.instagram.com/kidsgalaxy.co.in/" target="_blank" rel="noreferrer">
                  <GrInstagram/>
                </a>
                <a className="fb mg-ham" href="https://www.facebook.com/kidsgalaxy.co.in/" target="_blank" rel="noreferrer">
                  <FaFacebookSquare/>
                </a>
                
                <div
                    id="nav-ham"
                    className={`${hamburger && "Diam"}`}
                    onClick={() => setHamburger(!hamburger)}>
                    <div className="ham top"></div>
                    <div className="ham middle"></div>
                    <div className="ham bottom"></div>
                </div>
            </div>
            
          {/* Hidden hamburger menu nav */}
          <div className={`hiddenNav ${hamburger && "hamburgerOpen"}`}>
        <nav className="hiddenNavSearch-user">
          <ul className="hamburger-menu">
            <li className="hamburger-menu-item">
              <a href="#a" className="hm-hover1">
                Sign In
              </a>
            </li>
            <li className="hamburger-menu-item">
              <a href="#b" className="hm-hover2">
                Courses
              </a>
            </li>
            <li className="hamburger-menu-item hm-hover3">
              <div className="hm-hover3">
                Who We Are
              </div>
            </li>
            <li className="hamburger-menu-item hm-hover4">
              <div className="hm-hover4">
                What We Do
              </div>
            </li>
          </ul>
        </nav>
        </div>
        </div>
        </div>
    )
}

export default NavBar
