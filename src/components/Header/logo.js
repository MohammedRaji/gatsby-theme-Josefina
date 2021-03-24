
import React from "react"
//import PostLink from "./post-link"
import { useStaticQuery, graphql,Link } from "gatsby"



const query  = graphql`
  query {
    logo:file(relativePath: { eq: "logos/logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          src
        }
      }
    }  
    logoFooter:file(relativePath: { eq: "logos/logo-footer.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          src
        }
      }
    }  
  }
`

function Logo() {
  const data = useStaticQuery(query);
 // console.log(data);


  return (
<div className="logo-area" id="logo">
<Link to="/">
    <img src={data.logo.childImageSharp.fluid.src} alt='logo'/>
</Link>
</div>
    )
}

function LogoFooter({pageContext}) {
  const data = useStaticQuery(query);
  console.log(pageContext);


  return (
<div className="logo-area" id="logoFooter">
    <img src={data.logoFooter.childImageSharp.fluid.src} alt='logo'/>
</div>
    )
}





export  {Logo, LogoFooter}












