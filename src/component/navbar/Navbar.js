import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../asset/styles/navbar.css'

const Navbar = () => {
  return (
    <header>
        <div className="container">
          <nav id="nav-ul">
            <ul className="nav-ul">
              <li className="nav-li active">
                <i className="fas fa-user"></i>
                <NavLink to="/" className="link" data-filter="content-about"
                  >About</NavLink
                >
              </li>
              <li className="nav-li">
                <i className="fas fa-poll-h"></i>
                <NavLink to="/resume" className="link" data-filter="content-resume"
                  >Resume</NavLink
                >
              </li>
              <li className="nav-li">
                <i className="fas fa-pencil-alt"></i>
                <NavLink
                  to="/portfolio"
                  className="link"
                  data-filter="content-portfolio"
                  >PortFolio</NavLink
                >
              </li>
              <li className="nav-li">
                <i className="fab fa-stack-exchange"></i>
                <NavLink to="#blog" className="link" data-filter="content-blog">Blog</NavLink>
              </li>
              <li className="nav-li">
                <i className="fas fa-envelope"></i>
                <NavLink to="/contact" className="link" data-filter="content-contact"
                  >Contact</NavLink
                >
              </li>
            </ul>
          </nav>
        </div>
      </header>
  )
}

export default Navbar