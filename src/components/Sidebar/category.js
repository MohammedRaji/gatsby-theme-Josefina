import React from "react";
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
  //console.log(edge.node.frontmatter.category)
  arr.push(edge.node.frontmatter.category)
  ))
console.log(arr)
//const arr = [2, 2, 2, 2, 2, 4, 5, 5, 5, 9];
const result = arr.reduce((acc, curr) => {
  acc[curr] ??= {[curr]: 0};
  acc[curr][curr]++;
  
  return acc;
}, {});



  return (
    

		<>
            <ul>
              
              
              
              
  //console.log(Object.values(result).length)
 {Object.keys(result).map((keyName, i) => (
    <li className="travelcompany-input" key={i}>
        <span className="input-label">key: {i} Name: {result[keyName]}</span>
    </li>
))}
              

              
            </ul>
          </>

  	)
}




export default Category

/*export default MainMenu*/
