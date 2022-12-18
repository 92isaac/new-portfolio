import React from "react";
import "../../asset/styles/abtcont.css";
import Passport from "../../asset/images/Passport.jpg";

const Abtcont = () => {
  return (
    <div class="content-all">
      {/* <!-- CONTENT ABOUT --> */}
      <div class="content content-about" id="about">
        <div class="content-header">
          <h2>
            <span>About</span> Me
          </h2>
        </div>
        <div class="content-details">
          <img src={Passport} alt="profile" />
          <p>
            <span class="text">Hello! I'm</span>
            <span class="name"> Isaac</span>
          </p>
          <p style={{textAlign:'justify'}}>
          A seasoned software developer with over 2 years of experience in the industry, I am proficient in creating scalable, reliable, and maintainable code. I have a strong understanding of Javascript and Python programming languages and frameworks (React, Django, jQuery). I am a lifelong learner and am always seeking new opportunities to grow and improve as a developer. I am a reliable and dedicated team player, and I am confident in my ability to contribute valuable solutions to any project.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Abtcont;
