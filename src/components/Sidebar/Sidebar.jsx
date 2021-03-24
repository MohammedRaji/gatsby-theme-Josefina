import React from "react"

import Category from './category'
//import Tag from './tag'
import SocialLinks from "./sociallinks";
import Bio from "./bio"
import TagCloud from "../TagCloud/tagcloud";

export default function Header() {
	

  return (
    <aside class="col-lg-4 layout-mode-col-4 sidebar">
<h3 class="title">
About me
</h3>
<Category/>
<TagCloud/>
<Bio/>
</aside>
  	)
}
