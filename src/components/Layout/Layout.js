import React from "react"
import "./Layout.scss"
import Helmet from "react-helmet"
import useSiteMetadata from "../../hooks/useSiteMetadata"

import Navbar from "../Navbar/Navbar"
const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata()

  return (
    <main>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description}></meta>
      </Helmet>
      <Navbar />
      {children}
    </main>
  )
}

export default Layout
