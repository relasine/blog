import React from "react"
import "./Navbar.scss"
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <h1>These are words</h1>
      </Link>
      <div className="navbar__link-container">
        <Link
          to="/"
          className="navbar__link"
          activeClassName="navbar__link--is-active"
        >
          Home
        </Link>
        <Link
          to="/about/"
          className="navbar__link"
          activeClassName="navbar__link--is-active"
        >
          About
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
