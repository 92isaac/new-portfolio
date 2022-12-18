import React from 'react'
import { Link } from 'react-router-dom'

const Blogcont = () => {
  return (
    <div className="content-all">
            {/* <!-- CONTENT BLOG --> */}
            <div className="content content-blog try-contact" id="blog">
              <div className="content-header">
                <h2><span>My</span> Blog</h2>
              </div>
              <div className="content-details">
                <div className="blog">
                  <div className="blog-post">
                    <img src="images/blog.png" alt="" />
                    <p className="post-title">
                      How to get Started With Programming
                    </p>
                    <p className="post-desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quidem, quod?
                    </p>
                    <Link to="/">&rarr; Read Post</Link>
                  </div>
                  <div className="blog-post">
                    <img src="images/blog1.png" alt="" />
                    <p className="post-title">How to become a better Programmer</p>
                    <p className="post-desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quidem, quod?
                    </p>
                    <Link to="/">&rarr; Read Post</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
  )
}

export default Blogcont