import React from "react"
import {MainMenu} from "./menu"
import SocialLinks from "./sociallinks";
import {Logo} from "./logo"

export default function Header() {
	

  return (
    <header>
<div className="header container" id="header-top">
<SocialLinks/>
   <Logo/>
   </div>
   
   <div className="header-menu " id="header-menu">
		<MainMenu/>
</div>
    </header>
  	)
}
