import React from "react"
import Tag from "./tag"
import Category from "./category"
import SocialLinks from "./sociallinks";
import {Logo} from "./logo"

export default function Header() {
	

  return (
    <aside class="col-lg-4 layout-mode-col-4 sidebar">
<h3 class="title">
About me
</h3>
<Tag/>
<Category/>

</aside>
  	)
}
