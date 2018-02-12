import React from 'react'

const BlogSummary = (prop) =>{
    let post = prop.post
    return (
      <div className="post">
        <div className="postTitle">{post.title}</div>
        <article>{post.content}</article>
      </div>
    )
  }

export default BlogSummary