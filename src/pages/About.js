import React from 'react'
import '../asset/styles/about.css'
import Abtcont from '../component/about/Abtcont'
import Profile from '../component/profile/Profile'

const About = () => {
  return (
    <section>
        <div className="container main-container">
            <Profile />
            <Abtcont />
        </div>
    </section>
  )
}

export default About