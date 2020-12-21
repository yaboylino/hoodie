import React from "react"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <div className="">
      <div>{children}</div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
