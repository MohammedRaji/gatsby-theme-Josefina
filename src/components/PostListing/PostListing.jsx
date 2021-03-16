import React from "react";
import { Link } from "gatsby";

function PostListing({ postEdges }) {
  const postList = [];
  postEdges.forEach((postEdge) => {
    postList.push({
      path: postEdge.node.fields.slug,
      category: postEdge.node.frontmatter.category,
      tags: postEdge.node.frontmatter.tags,
      cover: postEdge.node.frontmatter.cover,
      title: postEdge.node.frontmatter.title,
      date: postEdge.node.frontmatter.date,
      author: postEdge.node.frontmatter.author,
      excerpt: postEdge.node.excerpt,
      timeToRead: postEdge.node.timeToRead,
      thumbnail: postEdge.node.frontmatter.featured
    });
  });

  return (
    <div>
      {
        /* Your post list here. */
        postList.map((post) => (
        
        <article className="blog-box">
        
      	
      	{post.thumbnail ? (
    		<div className="item-img">
      			<img src={post.thumbnail.childImageSharp.fluid.src} alt="Logo" />
    		</div>
      	) : (
    		<div className="item-img">
      			<img src="https://via.placeholder.com/150" alt="Logo" />
    		</div>
      	)}
      	
              


        <div className="item-content">
        <div className="post-label">{post.category}</div>
        <Link to={post.path} key={post.title}>
            <h1>{post.title}</h1>
         </Link>
          
         <div className="post-meta">
      		<span className="post-author">{post.author}</span>
      		<span className="post-date">{post.date}</span>
    	</div>
    	<p className="excerpt">{post.excerpt}</p>
    	
    	<Link to={post.path} className="button learn-more">
			<span className="circle">
			<span className="icon arrow"></span>
			</span>
			<span className="button-text">Read more</span>
		</Link>
    	
    </div>
    	
    	
    </article>
        ))
      }
    </div>
  );
}

export default PostListing;
