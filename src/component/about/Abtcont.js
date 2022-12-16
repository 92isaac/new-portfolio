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
            <span class="name"> SANGODARE ISAAC</span>
          </p>
          <p>
            Software Developer from Lagos, Nigeria. I have rich experience in
            web and software development. I love to write code that are
            thoughtful, meaningful, readable and reusable. Actively present,
            constantly learning and still learning. Skilled in solving problems.
            I'm focus on being a valuable member of any team. A Certified
            professional in Project and Facility management, health safety and
            Environment and also dedicated Planner with adept knowledge of
            working in the Environmental Services industry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Abtcont;
