import React from "react"
import PropTypes from "prop-types"
import ConnectedCounter from "../containers/Counter"
import Header from "../components/Header"
import { connect } from "react-redux"

import '../style/base.scss'
import '../style/header.scss'

const TemplateWrapper = ({ children }) => (
  <div>
    <Header />
    <div className='content'>
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

const mapStateToProps = () => {
  return {

  }
}

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch({ type: `INCREMENT` })
  }
}

const ConnectedTemplateWrapper = connect(mapStateToProps, mapDispatchToProps)(TemplateWrapper)
export default ConnectedTemplateWrapper


