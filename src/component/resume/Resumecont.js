import React from 'react'
import '../../asset/styles/resumecont.css'

const Resumecont = () => {
  return (
    <div className="content-all">
        

    {/* <!-- CONTENT RESUME --> */}
    <div className="content content-resume" id="resum">
      <div className="content-header">
        <h2><span>My</span> Resume</h2>
      </div>
      <div className="content-details">
        <div className="resume">
          <div className="my-resume education">
            <div className="title">
              <h3>Education</h3>
            </div>
            <div className="details">
              <div className="specific-details">
                <p className="year">Aug 2021-Dec 2021</p>
                <div className="year-details">
                  <p className="year-title">Lagos School of Programming</p>
                  <p className="year-desc">Full-Stack Developer (Intern)</p>
                </div>
              </div>

              {/* <div className="specific-details">
                <p className="year">2019-2020</p>
                <div className="year-details">
                  <p className="year-title">
                    Chartered Institute of Project and Management (CIPM)
                  </p>
                  <p className="year-desc">
                    Post Graduate Diploma in Project & Facility
                    Management
                  </p>
                </div>
              </div> */}
              <div className="specific-details">
                <p className="year">2012-2018</p>
                <div className="year-details">
                  <p className="year-title">
                    Ladoke Akintola University of Technology
                  </p>
                  <p className="year-desc">
                    B.Tech Urban and Regional Planning
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="my-resume experience">
            <div className="title">
              <h3>Experience</h3>
            </div>
            <div className="detail">
              <div className="specific-details">
                <p className="year">April, 2020 - Till-date</p>
                <div className="year-details">
                  <p className="year-title">Self-taught Programmer</p>
                  <p className="year-desc">Web Developer</p>
                </div>
              </div>
              <div className="specific-details">
                <p className="year">Jun, 2020 - Sept 2020</p>
                <div className="year-details">
                  <p className="year-title">Project Manager</p>
                  <p className="year-desc">CityScape Planning Service</p>
                </div>
              </div>

              <div className="specific-details">
                <p className="year">2016- Till date</p>
                <div className="year-details">
                  <p className="year-title">Freelancer</p>
                  <p className="year-desc">Freelancer on fiverr</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- ADD A LINE --> */}
        <div className="content-line"></div>
        {/* <!-- MY SKILLS --> */}
        <div className="my-skills">
          <div className="title">
            <h3>My Skills</h3>
          </div>
          <div className="skills">
            <div className="skill">
              <img src="images/html.png" alt="" />
              <p>HTML</p>
            </div>
            <div className="skill">
              <img src="images/css logo.png" alt="" />
              <p>CSS</p>
            </div>
            <div className="skill">
              <img src="images/js.jpg" alt="" />
              <p>JavaScript</p>
            </div>
            <div className="skill">
              <img src="images/react.png" alt="" />
              <p>React</p>
            </div>
            <div className="skill">
              <img src="images/django.png" alt="" />
              <p>Django</p>
            </div>
            <div className="skill">
              <img src="images/sass.png" alt="" />
              <p>Sass</p>
            </div>
            <div className="skill">
              <img src="images/git.png" alt="" />
              <p>GitHub</p>
            </div>
            <div className="skill">
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