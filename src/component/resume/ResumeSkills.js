import React from 'react'

const ResumeSkills = ({img, skill}) => {
  return (
    <div className="skill">
    <img src={img} alt="resume skills img" />
    <p>{skill}</p>
  </div>
  )
}

export default ResumeSkills