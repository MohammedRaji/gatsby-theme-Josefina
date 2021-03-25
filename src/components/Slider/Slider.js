import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Img from "gatsby-image"
import "./slider.css";

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"




const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: false,
  };

const CarouselPage = () => {
const data = useStaticQuery(graphql`
  query {
    image1: file(relativePath: { eq: "logos/bench-accounting-49909-unsplash.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image2: file(relativePath: { eq: "logos/fabio-comparelli-696506-unsplash.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
 
  posts:allMarkdownRemark{
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            category
            featured{
              childImageSharp {
                fluid(maxWidth: 1360) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            date(formatString: "MMMM DD, YYYY")
            author
          }
        }
      }
    }
    }
  
`)

console.log(data.posts.edges)

  return (
    <Slider style={{ height: "540px" }} {...settings} className="overflow-hidden">
      {/*<Img fluid={data.image1.childImageSharp.fluid} />
      <Img fluid={data.image2.childImageSharp.fluid} />*/}
      {/*slidesData.map((slide) =>

            <div className="slick-slide" key={slide.id}>
              <img className="slick-slide-image" src={data.image2.childImageSharp.fluid.src} />
              <label className="slick-slide-label">{slide.label}</label>
            </div>

          )*/}
          
          {data.posts.edges.map((edge) =>

            <div className="slick-slide" key={1}>
              {edge.node.frontmatter.featured ? (
    		
    		
    		
    		<div class="image-container">
    <img src={edge.node.frontmatter.featured.childImageSharp.fluid.src} alt="logo"/>
    <div className="slick-slide-label">{edge.node.frontmatter.title}</div>
</div>
    		
    		
    		
    		
      	) : (
    		
    		
    		
    		<div className="image-container">
    <img src="https://via.placeholder.com/150" alt="Logo" />
    <div className="slick-slide-label">{edge.node.frontmatter.title}</div>
</div>

      	)}
              
            </div>

          )}
      
    </Slider>
  )
}

export default CarouselPage
