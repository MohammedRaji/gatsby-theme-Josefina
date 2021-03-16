import React from "react";
import { Link } from "gatsby";
import UserLinks from "../UserLinks/UserLinks";
import "./Footer.css";
import SocialLinks from "../Header/sociallinks";
import {LogoFooter} from "../Header/logo"
import {FooterMenu} from "../Header/menu"
import * as styles from "./footer.module.css"

function Footer({ config }) {
  const url = config.siteRss;
  const { copyright } = config;
  if (!copyright) {
    return null;
  }
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
				{copyright}
				
				</p>
		
	</div>
</div>


</footer>

  );
}

export default Footer;
