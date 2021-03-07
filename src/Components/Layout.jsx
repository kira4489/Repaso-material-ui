import React from "react"
import Main from "./Main"
import Navbar from "./Navbar"
const Layout = ({children}) =>{
  return (
    <>
      <Navbar/>
      <Main> 
      { children /*los children se pasan en cualquier parte asi como esta en este*/} 
      </Main>
    </>
  )
}

export default Layout