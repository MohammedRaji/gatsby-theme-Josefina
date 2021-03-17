
import React from "react"
//import PostLink from "./post-link"
import { useStaticQuery, graphql,Link } from "gatsby"



const query  = graphql`
  query {
    image:file(relativePath: { eq: "logos/author.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          src
        }
      }
    }  
    info:site{
    siteMetadata{
      authorname
      authordes
    }
  }
  }
`

function Bio() {
  const data = useStaticQuery(query);
 // console.log(data);


  return (
<div className="info" id="logo">
<img src={data.image.childImageSharp.fluid.src} alt='logo'/>
    <h1>{data.info.siteMetadata.authorname}</h1>
    <p>{data.info.siteMetadata.authordes}</p>

</div>
    )
}



export  default Bio












