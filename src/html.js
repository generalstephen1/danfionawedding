import React, { Component } from "react"
import * as PropTypes from "prop-types"

const propTypes = {
  headComponents: PropTypes.node.isRequired,
  body: PropTypes.node.isRequired,
  postBodyComponents: PropTypes.node.isRequired,
}

class Html extends Component {
  render() {
    return (
      <html op="news" lang="en">
        <head>
          {this.props.headComponents}
          <meta name="referrer" content="origin" />
          <meta charSet="utf-8" />
          <meta name="Dan and Fionas wedding site" content="Dan and Fionas wedding site" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Dan and Fiona</title>
          <link href="https://fonts.googleapis.com/css?family=Roboto|Slabo+27px" rel="stylesheet"/>
        </head>

        <body>
          <div id="___gatsby" dangerouslySetInnerHTML={{ __html: this.props.body }} />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}

Html.propTypes = propTypes

module.exports = Html
