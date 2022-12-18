import React from "react";
import { Link } from "react-router-dom";
import "../../asset/styles/profile.css";
import headImg from "../../asset/images/Isaac.png";
import TypinEffect from "../../data/TypinEffect";
import { FaTwitter, FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa'

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile-image">
        <img src={headImg} alt="man" />
      </div>
      <div className="profile-content">
        <h2>SANGODARE ISAAC</h2>
        <p className="text-effect">
          <TypinEffect />
        </p>
        <div className="profile-icons">
          <Link to="#">
            < FaTwitter/>
          </Link>
          <Link to="https://www.github.com/92isaac" target="blank">
          < FaGithub/>

          </Link>
          <Link to="#">
          < FaFacebook/>

          </Link>
          <Link
            to="https://www.linkedin.com/in/isaac-sangodare-744765148"
            target="blank"
          >
            < FaLinkedin/>
          </Link>
          <Link to="#">
            <i className="fab fa-stack-overflow"></i>
          </Link>
        </div>
        <div className="profile-cta my-border">
          <div>
            <Link to="https://www.github.com/92isaac" target="blank">
              GitHub
            </Link>
          </div>
          <div>
            <Link to="/contact">Contact Me</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
