import React from "react"
//import { useStaticQuery, graphql } from "gatsby"
import styles from "./footer.module.css"

import SocialLinks from "../sociallinks";
import {LogoFooter} from "../logo"
import {FooterMenu} from "../menu"

export default function Footer() {
  return (



		<footer className={styles.footer } id="footer">
			<div className={`${styles.container} ${styles.widget}`}>
              <div>

              <SocialLinks/>
              </div>
              




				<div className="copyrights-social section" id="copyrights-social">
					<LogoFooter/>
				</div>
<div>
<FooterMenu/>

              </div>


    {/*<SocialLinks/>*/}




</div>

<div className={styles.copyrights}>
	<div className={styles.container}>
				<p className="footer-text">
				<span>All rights reserved</span> ©Josefina
				
				</p>
		
	</div>
</div>


</footer>




















  	)




}