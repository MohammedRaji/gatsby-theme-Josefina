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

//const arr = [2, 2, 2, 2, 2, 4, 5, 5, 5, 9];
const result = arr.reduce((acc, curr) => {
  acc[curr] ??= {[curr]: 0};
  acc[curr][curr]++;
  
  return acc;
}, {});

console.log(Object.values(result))

//console.log(Object.keys(result))
//console.log(Object.entries(result))
  return (
    

		<>
      
              
              
              
              
  {/*Object.entries(result).map(([key, val], i) => (
    <p key={i}>
        {key}: {val}
    </p>
))*/}

{Object.values(result).map(home => <div>{Object.keys(home)} :{Object.values(home)}</div>)}
              
            
          </>

  	)
}




export default Category

/*export default MainMenu*/
