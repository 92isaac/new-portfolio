import React from 'react'
import '../../asset/styles/resumecont.css'

const Resumecont = () => {
  return (
    <div class="content-all">
        

    {/* <!-- CONTENT RESUME --> */}
    <div class="content content-resume" id="resum">
      <div class="content-header">
        <h2><span>My</span> Resume</h2>
      </div>
      <div class="content-details">
        <div class="resume">
          <div class="my-resume education">
            <div class="title">
              <h3>Education</h3>
            </div>
            <div class="details">
              <div class="specific-details">
                <p class="year">Aug 2021-Dec 2021</p>
                <div class="year-details">
                  <p class="year-title">Lagos School of Programming</p>
                  <p class="year-desc">Full-Stack Developer</p>
                </div>
              </div>

              <div class="specific-details">
                <p class="year">2019-2020</p>
                <div class="year-details">
                  <p class="year-title">
                    Chartered Institute of Project and Management (CIPM)
                  </p>
                  <p class="year-desc">
                    Post Graduate Diploma in Project & Facility
                    Management
                  </p>
                </div>
              </div>
              <div class="specific-details">
                <p class="year">2012-2018</p>
                <div class="year-details">
                  <p class="year-title">
                    Ladoke Akintola University of Technology
                  </p>
                  <p class="year-desc">
                    B.Tech Urban and Regional Planning
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="my-resume experience">
            <div class="title">
              <h3>Experience</h3>
            </div>
            <div class="details">
              <div class="specific-details">
                <p class="year">April, 2020 - Till-date</p>
                <div class="year-details">
                  <p class="year-title">Self-taught Programmer</p>
                  <p class="year-desc">Web Developer</p>
                </div>
              </div>
              <div class="specific-details">
                <p class="year">Jun, 2020 - Sept 2020</p>
                <div class="year-details">
                  <p class="year-title">Project Manager</p>
                  <p class="year-desc">CityScape Planning Service</p>
                </div>
              </div>

              <div class="specific-details">
                <p class="year">2016- Till date</p>
                <div class="year-details">
                  <p class="year-title">Freelancer</p>
                  <p class="year-desc">Freelancer on fiverr</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- ADD A LINE --> */}
        <div class="content-line"></div>
        {/* <!-- MY SKILLS --> */}
        <div class="my-skills">
          <div class="title">
            <h3>My Skills</h3>
          </div>
          <div class="skills">
            <div class="skill">
              <img src="images/html.png" alt="" />
              <p>HTML</p>
            </div>
            <div class="skill">
              <img src="images/css logo.png" alt="" />
              <p>CSS</p>
            </div>
            <div class="skill">
              <img src="images/js.jpg" alt="" />
              <p>JavaScript</p>
            </div>
            <div class="skill">
              <img src="images/react.png" alt="" />
              <p>React</p>
            </div>
            <div class="skill">
              <img src="images/django.png" alt="" />
              <p>Django</p>
            </div>
            <div class="skill">
              <img src="images/sass.png" alt="" />
              <p>Sass</p>
            </div>
            <div class="skill">
              <img src="images/git.png" alt="" />
              <p>GitHub</p>
            </div>
            <div class="skill">
              <img src="images/python.webp" alt="" />
              <p>Python</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Resumecont