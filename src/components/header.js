import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"


const Header = ({ siteTitle }) => (
  <header>
      <div className="header-container">
          <div className="branding">
              <h1>{siteTitle}</h1>
              <p>Best place for Books</p>
          </div>
          <nav>
              <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/">Blog</Link></li>
                  <li><Link to="/">Contact us</Link></li>
              </ul>
          </nav>
      </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
