import React from "react";
import { NavLink } from "react-router-dom";
import "../../asset/styles/navbar.css";
import { FaUserAlt, FaPollH, FaPencilAlt, FaStackExchange, FaEnvelope } from 'react-icons/fa'
const Navbar = () => {
  return (
    <header>
      <div className="container">
        <nav id="nav-ul">
          <ul className="nav-ul">
            <li className="nav-li">
              <FaUserAlt />
              <NavLink to="/" className="link" data-filter="content-about">
                About
              </NavLink>
            </li>
            <li className="nav-li">
              <FaPollH />
              <NavLink
                to="/resume"
                className="link"
                data-filter="content-resume"
              >
                Resume
              </NavLink>
            </li>
            <li className="nav-li">
              <FaPencilAlt/>
              <NavLink
                to="/portfolio"
                className="link"
                data-filter="content-portfolio"
              >
                PortFolio
              </NavLink>
            </li>
            <li className="nav-li">
              <FaStackExchange />
              <NavLink to="/blog" className="link" data-filter="content-blog">
                Blog
              </NavLink>
            </li>
            <li className="nav-li">
              <FaEnvelope />
              <NavLink
                to="/contact"
                className="link"
                data-filter="content-contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
