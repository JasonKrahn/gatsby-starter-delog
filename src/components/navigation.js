import React from "react"
import {Link} from "gatsby"
import ThemeChanger from "../components/themeChanger"

export default (props) => (
  <nav className="navigation"> 
    <Link to="/contact">Go back to WinnPro home</Link>
    <ThemeChanger/>
  </nav>
  
)