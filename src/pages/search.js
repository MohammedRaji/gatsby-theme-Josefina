import React, { useEffect, useState } from "react"
import { Link, graphql } from "gatsby"

const BlogIndex = props => {
  const { data } = props
  const allPosts = data.allMarkdownRemark.edges

  const emptyQuery = ""
  

  const [state, setState] = useState({
    filteredData: [],
    query: emptyQuery,
  })

  const handleInputChange = event => {
    console.log(event.target.value)
    const query = event.target.value
    const { data } = props

    const posts = data.allMarkdownRemark.edges || []
    

    const filteredData = posts.filter(post => {
      const { description, title, tags } = post.node.frontmatter
      return (
        //description.toLowerCase().includes(query.toLowerCase()) ||
        title.toLowerCase().includes(query.toLowerCase()) ||
        (tags &&
          tags
            .join("")
            .toLowerCase()
            .includes(query.toLowerCase()))
      )
    })

    setState({
      query,
      filteredData,
    })
  }

  const { filteredData, query } = state
  const hasSearchResults = filteredData && query !== emptyQuery
  const posts = hasSearchResults ? filteredData : allPosts

  return (
    <>
      <h1 style={{ textAlign: `center` }}>Writing</h1>

      <div className="searchBox">
        <input
          className="searchInput"
          type="text"
          aria-label="Search"
          placeholder="Type to filter posts..."
          onChange={handleInputChange}
        />
      </div>

      {
      
      hasSearchResults && 
      
      posts.map(({ node }) => {
        const { excerpt } = node

        const { slug } = node.fields
        const { tags, title, date } = node.frontmatter
        return (
          <article key={slug}>
            <header>
              <h2>
                <Link to={slug}>{title}</Link>
              </h2>

              <p>{date}</p>
            </header>
            <section>
              {/*<p
                dangerouslySetInnerHTML={{
                  __html: description || excerpt,
                }}
              />*/}
            </section>
            <hr />
          </article>
        )
      })}
    </>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
      edges {
        node {
          excerpt(pruneLength: 200)
          id
          frontmatter {
            title
            
            date(formatString: "MMMM DD, YYYY")

            tags
          }

          fields {
            slug
          }
        }
      }
    }
  }
`
