import React from 'react'
import { Link } from 'react-router-dom'

const Portfolioprops = ({title, desc, link, img}) => {
  return (
    <div className="portfolio-item">
    <img
      src={img}
      alt="portfolio-img"
    />
    <p className="portfolio-title">{title}</p>
    <p className="portfolio-desc">
      {desc}
    </p>
    <Link to={link} target="blank">
      &rarr; View Project
    </Link>
  </div>
  )
}

export default Portfolioprops