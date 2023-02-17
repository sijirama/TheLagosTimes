import React from 'react'
//import './sewssection.scss'
import './newssection.scss'

function NewsSection({ data }) {
  return (
    <div className="newssection">{

        data.map((post, index) => (
            
            <div className="newspost" key={post.id}>
                <div className="posttitle"> <h2>{post.title}</h2> </div>
                <div className="postexcerpt"> <p>{post.excerpt}</p> </div>
                {post.media && <div className="postmedia"> <img src={post.media} alt="post media" /> </div> }
                <div className="postauthor"> <p>{post.author}</p> </div>
                <hr className="postline" />
            </div>

        ))

    }</div>
  )
}

export default NewsSection
