/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 18/06/2022 - 16:27:00
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 18/06/2022
    * - Author          : 
    * - Modification    : 
**/
import React from 'react'
import './Sidebar.scss'
import {Link, NavLink} from 'react-router-dom';
import LogoS from '../../assets/images/Eben-media.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope, faSuitcase } from '@fortawesome/free-solid-svg-icons'
import {
    faLinkedin,
    faGithub,
    //faYoutube,
    faTwitter,
    faInstagram
  } from '@fortawesome/free-brands-svg-icons'
//import LogoSubtitle from '../../assets/images/logo_sub.png'

export const Sidebar = () => {
    return (
        <div className='nav-bar'>
           <Link className='logo' to='/'>
            <img src={LogoS} alt='show'/>
            <span className='logo-span'>Eben media</span>
           </Link>
           <nav>
           <NavLink exact="true" activeclassname="active" to='/'>
           <FontAwesomeIcon icon={faHome} color="#ffd700" />
           </NavLink>
           <NavLink activeclassname="active" className="about-link" to="/about">
          <FontAwesomeIcon icon={faUser} color="#ffffff" />
        </NavLink>
        <NavLink activeclassname="active" className="portfolio-link" to="/portfolio">
          <FontAwesomeIcon icon={faSuitcase} color="#ffffff" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#ffffff" />
        </NavLink>
           </nav>
           <ul className='side-ul'>
        <li>
          <a
            href="https://www.linkedin.com/in/oluwadamilola-adedeji-aa9a34167/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#ffffff" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Adedeji08"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} color="#ffffff" />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/AdedejiEbeneze6"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faTwitter} color="#ffffff" />
          </a>
        </li>

        <li>
          <a href="https://www.instagram.com/eben_dami/" rel="noreferrer" target="_blank">
            <FontAwesomeIcon icon={faInstagram} color="#ffffff" />
          </a>
        </li>
      </ul>
        </div>
    )
}
