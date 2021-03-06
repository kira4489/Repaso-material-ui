import React, { Children } from "react"
import Main from "./Main"
import Navbar from "./Navbar"
const Layout = ({children}) =>{
  return (
    <>
    <nav>
        <ul>
          <li>Home</li>
          <li>Contact</li>
          <li>About</li>
        </ul>
      </nav>
      <Navbar/>
      <Main children={children} />
    </>
  )
}

export default Layout