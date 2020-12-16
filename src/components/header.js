import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"


const Header = ({ siteTitle }) => {
  return (
    <header>
        <div className="header-container">
            <div className="branding">
                <h1>{siteTitle}</h1>
                <p>Best place for Books</p>
            </div>
            <nav>
                <ul>
                    <li><Link activeClassName="active" to="/">Home</Link></li>
                    <li><Link activeClassName="active" to="/about">About</Link></li>
                    <li><Link activeClassName="active" to="/contact">Contact us</Link></li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
