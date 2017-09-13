import React from "react"
import PropTypes from "prop-types"
import Link from "gatsby-link"
// import { ConnectedCounter } from "../containers/Counter"
import { connect } from "react-redux"


import './index.css'

const Header = () => (
  <div className="header">
    <div className="header__title-container">
      <h1>
        <Link to="/">
          Dan And Fiona
        </Link>
      </h1>
    </div>
    <ul>
      <li> <Link to="/Venue/">Venue</Link> </li>
      <li> <Link to="/Media/">Media</Link> </li>
      <li> <Link to="/Contact/">Contact & RSVP</Link> </li>
    </ul>
  </div>
)


const TemplateWrapper = ({ children }) => (
  <div>
    <Header />
    <Counter />
    <div className='content'>
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

const Counter = ({ count, increment }) => (
  <div>
    <p>Count: {count}</p>
    <button onClick={increment}>Increment</button>
  </div>
)

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
}

const mapStateToProps = ({ count }) => {
  return { count }
}

const mapDispatchToProps = dispatch => {
  return { increment: () => dispatch({ type: `INCREMENT` }) }
}

const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter)


