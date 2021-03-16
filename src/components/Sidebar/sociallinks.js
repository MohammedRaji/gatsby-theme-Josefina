import React from 'react';
import { useStaticQuery, graphql } from "gatsby"


function SocialLinks() {
  const data = useStaticQuery(graphql`
query {
  site{
    siteMetadata{
      social {
         name
         link
            }
    }
  }
}
`)
  const icons = {
    facebook: '<svg fill="aliceblue" width="20" height="20" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg"><path d="m297.28 11.668c-2.1328 0.34765-4.2734 0.66797-6.4219 0.96094 2.1484-0.29297 4.2891-0.61328 6.4219-0.96094z"></path><path d="m302.4 10.793c-1.0195 0.1875-2.0391 0.35937-3.0586 0.53515 1.0195-0.17578 2.0391-0.34765 3.0586-0.53515z"></path><path d="m285.14 13.34c-2.4961 0.28125-5.0078 0.53125-7.5274 0.74219 2.5195-0.21094 5.0312-0.46094 7.5274-0.74219z"></path><path d="m290.05 12.738c-1.1992 0.16016-2.4062 0.30859-3.6094 0.44922 1.2031-0.14063 2.4102-0.28906 3.6094-0.44922z"></path><path d="m309.37 9.4101c-0.89844 0.1914-1.8008 0.38281-2.7031 0.5664 0.90235-0.18359 1.8047-0.375 2.7031-0.5664z"></path><path d="m326.66 5.1133c-0.72656 0.20703-1.4531 0.40234-2.1797 0.60547 0.72657-0.20313 1.4531-0.39844 2.1797-0.60547z"></path><path d="m321.43 6.5429c-0.78906 0.20703-1.582 0.41797-2.375 0.61719 0.79297-0.19922 1.5859-0.40625 2.375-0.61719z"></path><path d="m314.59 8.2539c-0.83593 0.19531-1.6797 0.3789-2.5234 0.5664 0.84375-0.1875 1.6875-0.37109 2.5234-0.5664z"></path><path d="m277.53 14.09c-1.3476 0.11328-2.6953 0.21485-4.0469 0.30469 1.3516-0.0898 2.6992-0.1914 4.0469-0.30469z"></path><path d="m14.812 7.5c0-4.038-3.2745-7.3125-7.3125-7.3125-4.038 0-7.3125 3.2745-7.3125 7.3125 0 4.038 3.2745 7.3125 7.3125 7.3125 0.04296 0 0.085693-9.19e-4 0.12854-0.0016v-5.6925h-1.571v-1.8309h1.571v-1.3473c0-1.5626 0.9539-2.413 2.3478-2.413 0.66747 0 1.2412 0.049765 1.4085 0.071969v1.6331h-0.96115c-0.7583 0-0.90514 0.3604-0.90514 0.88918v1.1661h1.8132l-0.23633 1.8309h-1.5768v5.4116c3.0565-0.87624 5.294-3.6922 5.294-7.03z" stroke-width=".028564"></path><path d="m272.91 14.43c-2.6641 0.17187-5.3398 0.30859-8.0234 0.39843 2.6836-0.0898 5.3594-0.22656 8.0234-0.39843z"></path><path d="m264.75 14.836c-1.4141 0.0469-2.832 0.082-4.25 0.10547 1.418-0.0234 2.8359-0.0586 4.25-0.10547z"></path></svg>',
    twitter: '<svg fill="aliceblue" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M17.944 5.926c0.013 0.178 0.013 0.355 0.013 0.533 0 5.419-4.124 11.662-11.662 11.662-2.322 0-4.48-0.673-6.294-1.84 0.33 0.038 0.647 0.051 0.99 0.051 1.916 0 3.68-0.647 5.089-1.751-1.802-0.038-3.312-1.218-3.833-2.843 0.254 0.038 0.508 0.063 0.774 0.063 0.368 0 0.736-0.051 1.079-0.14-1.878-0.381-3.287-2.030-3.287-4.023v-0.051c0.546 0.305 1.18 0.495 1.853 0.52-1.104-0.736-1.827-1.992-1.827-3.414 0-0.761 0.203-1.459 0.558-2.069 2.018 2.487 5.051 4.112 8.452 4.289-0.063-0.305-0.102-0.622-0.102-0.939 0-2.259 1.827-4.099 4.099-4.099 1.18 0 2.246 0.495 2.995 1.294 0.926-0.178 1.815-0.52 2.602-0.99-0.305 0.952-0.952 1.751-1.802 2.259 0.825-0.089 1.624-0.317 2.36-0.634-0.558 0.812-1.256 1.535-2.056 2.119z"></path></svg>',

};

//console.log(links);




    return (
       <nav>
            <ul className="social-icon">
              {data.site.siteMetadata.social.map(link => (
                <li
                  key={link.name}
                  style={{
                    listStyleType: `none`,
                  }}
                >
                  {/*<Link style={{ color: `black` }} to={link.link}>
                    {icons[link.name]}
                  </Link>*/}

                  <a style={{
                    Color: `red`,
                  }}  href={link.link}  aria-label={link.name}
 target="_blank" rel="noreferrer" dangerouslySetInnerHTML={{__html:icons[link.name]}}/>

                </li>
              ))}
            </ul>
          </nav>
    );


}


export default SocialLinks;

