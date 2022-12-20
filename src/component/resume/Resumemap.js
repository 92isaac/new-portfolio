import React from 'react'

const Resumemap = ({date,location,title}) => {
  return (
    <div className="specific-details">
    <p className="year">{date}</p>
    <div className="year-details">
      <p className="year-title">{location}</p>
      <p className="year-desc">{title}</p>
    </div>
  </div>
  )
}

export default Resumemap