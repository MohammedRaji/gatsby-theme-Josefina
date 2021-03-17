import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"


const query = graphql`
query {
  tags:allMarkdownRemark{
		edges{
			node{
				frontmatter{
					tags
				}
			}
		}
  }
}
`

function Tag() {
	const data = useStaticQuery(query)
	let tags
  console.table(data.tags.edges[0]);

  return (
    

		<>
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
            </ul>
          </>

  	)
}




export default Tag

/*export default MainMenu*/
