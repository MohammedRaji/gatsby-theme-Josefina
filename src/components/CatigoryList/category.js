import React from "react";
import * as styles from "./category.module.css"
import _ from "lodash";
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
query {
  allMarkdownRemark{
		edges{
			node{
				frontmatter{
					category
				}
			}
		}
  }
}
`

function Category() {
	const data = useStaticQuery(query)
  let edges = data.allMarkdownRemark.edges;
const arr =[];
  edges.map(edge =>(
  arr.push(edge.node.frontmatter.category)
  ))

//const arr = [2, 2, 2, 2, 2, 4, 5, 5, 5, 9];
const categories = arr.reduce((acc, curr) => {
  acc[curr] ??= {[curr]: 0};
  acc[curr][curr]++;
  
  return acc;
}, {});

console.log(Object.values(categories))

  return (
    

		<>
      
              
              
              
              
  

{Object.values(categories).map(category => <div>{Object.keys(category)} :{Object.values(category)}</div>)}
              
            
          </>

  	)
}




export default Category

/*export default MainMenu*/
