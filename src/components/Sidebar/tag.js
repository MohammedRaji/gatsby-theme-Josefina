import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"


const query = graphql`
query {
  MainMenu:site{
    siteMetadata{
      menuLinks {
         name
         link
            }
    }
  }
}
`

function MainMenu() {
	const data = useStaticQuery(query)
  console.log(data);

  return (
    

		<nav className="container main-menu nav-primary d-none d-md-block sticky" id="main-menu">
            <ul>
              {/*data.MainMenu.siteMetadata.menuLinks.map(link => (
                <li
                  key={link.name}
                  style={{
                    listStyleType: `none`,
                  }}
                  >
                  <Link to={link.link}>
                    {link.name}
                  </Link>
                </li>
              ))*/}
            </ul>}
          </nav>

  	)
}




export default Tag

/*export default MainMenu*/
