import React from 'react'
import '../../asset/styles/resumecont.css'
import { resumeEdu, resumeExp, resumeSkills } from '../../data/dataList'
import ResumeExperience from './ResumeExperience'
import Resumemap from './Resumemap'
import ResumeSkills from './ResumeSkills'

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
              {resumeEdu.map((resume)=>(<Resumemap
              key={resume.date}
              date={resume.date}
              location={resume.location}
              title={resume.title}
               />))}
            </div>
          </div>
          <div className="my-resume experience">
            <div className="title">
              <h3>Experience</h3>
            </div>
            <div className="detail">
                {resumeExp.map((experience)=>(<ResumeExperience 
                key={experience.year}
                title={experience.title}
                year={experience.year}
                desc={experience.desc}
                />))}
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
          {resumeSkills.map((ski)=>(<ResumeSkills 
          key={ski.skill}
          img={ski.img}
          skill={ski.skill}
          />))}
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Resumecont