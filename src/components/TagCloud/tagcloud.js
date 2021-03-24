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
					tags
				}
			}
		}
  }
}
`
console.log(styles)
function Tag() {
	const data = useStaticQuery(query)
  let edges = data.allMarkdownRemark.edges;
const arr =[];
  edges.map(edge =>(
  //console.log(edge.node.frontmatter.category)
  arr.push(edge.node.frontmatter.tags)
  ))

//var arrToConvert = [[0,0,1],[2,3,3],[4,4,5]];
var newArr = [];


for(var i = 0; i < arr.length; i++)
{
    newArr = newArr.concat(arr[i]);
}

//console.log(newArr);
var filtered = newArr.filter(function (el) {
  return el != null;
});

//console.log(filtered);
//const arr = [2, 2, 2, 2, 2, 4, 5, 5, 5, 9];
const tags = filtered.reduce((acc, curr) => {
  acc[curr] ??= {[curr]: 0};
  acc[curr][curr]++;
  
  return acc;
}, {});

//console.log(Object.values(tags))

//console.log(Object.keys(result))
//console.log(Object.entries(result))

  return (
    

		<ul className="feature">
      
              
              
              
              
  {/*Object.entries(result).map(([key, val], i) => (
    <p key={i}>
        {key}: {val}
    </p>
))*/}

{Object.values(tags).map(tag => <li className="label_cloud_item"><Link
            key={tag}
            className="styles.label_cloud_link"
            to={`/tags/${_.kebabCase(Object.keys(tag))}`}
          > {Object.keys(tag)}</Link></li>)}
              
            
          </ul>

  	)
}



 {/*:{Object.values(tag)}*/}
export default Tag

