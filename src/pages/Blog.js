import React from 'react'
import Blogcont from '../component/blog/Blogcont'
import Profile from '../component/profile/Profile'

const Blog = () => {
  return (
    <div className='container main-container'>
        <Profile />
        <Blogcont />
    </div>
  )
}

export default Blog