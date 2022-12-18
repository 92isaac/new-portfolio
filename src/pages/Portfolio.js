import React from 'react'
import Portfoliocont from '../component/porfolio/Portfoliocont'
import Profile from '../component/profile/Profile'

const Portfolio = () => {
  return (
    <div className='container main-container'>
        <Profile />
        <Portfoliocont />
    </div>
  )
}

export default Portfolio