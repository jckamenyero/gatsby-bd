import React from 'react'
import { Link } from "gatsby"

export default function Footer() {
    return (
        <footer>
            <div className="footer-container">
              <ul>
                  <li>
                      <p>Company</p>
                      <p><Link to="/">Partners</Link></p>
                      <p><Link to="/">Pricing</Link></p>
                      <p><Link to="/">Legal</Link></p>
                      <p><Link to="/">Documentation</Link></p>
                      <p><Link to="/">Support</Link></p>
                      <p><Link to="/">Sales</Link></p>
                  </li>
                  <li>
                      <p>Contact</p>
                      <p><Link to="/">About</Link></p>
                      <p><Link to="/">adresse</Link></p>
                      <p><a href="mailto:contact@dessinoox.ca">contact@dessinoox.ca</a></p>
                  </li>
              </ul>  
              <p className="copyright">© {new Date().getFullYear()}, Dessinoox.</p>
          </div>

        </footer>
    )
}
