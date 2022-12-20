import React from 'react'

const ResumeExperience = ({year, title, desc}) => {
  return (
    <div className="specific-details">
    <p className="year">{year}</p>
    <div className="year-details">
      <p className="year-title">{title}</p>
      <p className="year-desc">{desc}</p>
    </div>
  </div>
  )
}

export default ResumeExperience