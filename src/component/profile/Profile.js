import React from 'react'
import { Link } from 'react-router-dom'
import '../../asset/styles/profile.css'
import headImg from '../../asset/images/Isaac.png'

const Profile = () => {
  return (
    <div className="profile">
    <div className="profile-image">
      <img src={headImg} alt="man" />
    </div>
    <div className="profile-content">
      <h2>SANGODARE ISAAC</h2>
      <p className="text-effect">Web Developer</p>
      <div className="profile-icons">
        <Link to="#">
          <i className="fab fa-twitter"></i>
        </Link>
        <Link to="https://www.github.com/92isaac" target="blank">
          <i className="fab fa-github"></i>
        </Link>
        <Link to="#">
          <i className="fab fa-facebook-f"></i>
        </Link>
        <Link
          to="https://www.linkedin.com/in/isaac-sangodare-744765148"
          target="blank"
        >
          <i className="fab fa-linkedin"></i>
        </Link>
        <Link to="#">
          <i className="fab fa-stack-overflow"></i>
        </Link>
      </div>
      <div className="profile-cta my-border">
        <div>
          <Link to="https://www.github.com/92isaac" target="blank"
            >GitHub</Link
          >
        </div>
        <div><Link to="index.html#contact">Contact Me</Link></div>
      </div>
    </div>
  </div>
  )
}

export default Profile