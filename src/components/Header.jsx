import React from "react"
import Link from "gatsby-link"
import ConnectedCounter from "../containers/Counter"
import { connect } from "react-redux"

import '../style/header.scss'

const Header = () => (
  <div className="header">
    <div className="header__title-container">
      <h1>
        <Link to="/">
          We're getting Married!
        </Link>
      </h1>
      <ul className="header__nav">
        <li className="header__nav-item"> <Link to="/Media/">Media</Link> </li>
        <li className="header__nav-item"> <Link to="/Accomodation/">Accomodation</Link> </li>
        <li className="header__nav-item"> <Link to="/Venue/">Venue</Link> </li>
        <li className="header__nav-item"> <Link to="/Contact/">Contact & RSVP</Link> </li>
      </ul>
    </div>
    <ConnectedCounter />
  </div>
)

export default Header;