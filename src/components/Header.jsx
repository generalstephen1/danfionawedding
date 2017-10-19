import React from "react"
import Link from "gatsby-link"
import ConnectedCounter from "../containers/Counter"
import { connect } from "react-redux"

import '../style/header.scss'

const Header = (props) => {
	const isActivePage = (pageName) => { return pageName === props.activePage ? '--active' : '' }
	const defaultItemClasses = 'header__nav-item nav_bar__item'
	return (
		<div className="header">
			<div className="header__title-container">
				<h1>
					<Link to="/">
						We're getting Married!
                    </Link>
				</h1>
				<ul className="header__nav nav_bar">
					<li className={`${defaultItemClasses} header__nav-item__media${isActivePage('media')}`}>
						<Link to="/Media/">Media</Link>
					</li>
					<li className={`${defaultItemClasses} header__nav-item__accomodation${isActivePage('accomodation')}`}>
						<Link to="/Accomodation/">Accomodation & The Area</Link>
					</li>
					<li className={`${defaultItemClasses} header__nav-item__venue${isActivePage('venue')}`}>
						<Link to="/Venue/">Venue</Link>
					</li>
					<li className={`${defaultItemClasses} header__nav-item__contact${isActivePage('contact')}`}>
						<Link to="/Contact/">Contact & RSVP</Link>
					</li>
				</ul>
			</div>

			<ConnectedCounter />
		</div>
	)
}
export default Header;