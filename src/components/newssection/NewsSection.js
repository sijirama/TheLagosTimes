import React from 'react'
//import './sewssection.scss'
import './newssection.scss'

function NewsSection({ data }) {
  return (
    <div className="newssection">{

        data.map((post, index) => (
            
            <div className="newspost" key={index}>
                
                <div className="posttitle"> <h3>{post.title}</h3> </div>
                
                <div className="postexcerpt"> <p>{post.excerpt}</p> </div>

                {post.media && <div className="postmedia"> <img src={post.media} alt="post media" /> </div> }
                
                <div className="postauthor"> <p>{post.author}</p> </div>

                // link to enter detailed page <div></div>
            
                <hr className="postline" />
            
            </div>

        ))

    }</div>
  )
}

export default NewsSection
