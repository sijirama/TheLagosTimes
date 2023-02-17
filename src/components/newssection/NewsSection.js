import React from 'react'
import {Link} from "react-router-dom"
import './newssection.scss'

function NewsSection({ data }) {

  return (
    <div className="newssection">{

        data.map((post ) => (
            
            <div className="newspost" key={post._id}>
                <div className="posttitle"> <h2>{post.title}</h2> </div>
                <div className="postexcerpt"> <p>{post.excerpt}</p> </div>
                {post.media && <div className="postmedia"> <img src={post.media} alt="post media" /> </div> }
                <div className="postauthor"> <p>{post.author}</p> </div>
                <div className="postnav">
                    <p>
                        <Link to = {`/detail/${post._id}`}>
                            Read More
                        </Link>
                    </p>
                </div>
                <hr className="postline" />
            </div>

        ))

    }</div>
  )
}

export default NewsSection
