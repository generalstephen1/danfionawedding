import React, { Component } from "react"
import * as PropTypes from "prop-types"

let stylesStr
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require(`!raw-loader!../public/styles.css`)
  } catch (e) {
    console.log(e)
  }
}

const propTypes = {
  headComponents: PropTypes.node.isRequired,
  body: PropTypes.node.isRequired,
  postBodyComponents: PropTypes.node.isRequired,
}

class Html extends Component {
  render() {
    let css
    if (process.env.NODE_ENV === `production`) {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: stylesStr }}
        />
      )
    }
    return (
      <html op="news" lang="en">
        <head>
          {this.props.headComponents}
          <meta name="referrer" content="origin" />
          <meta charSet="utf-8" />
          <meta name="Dan and Fionas wedding site" content="Dan and Fionas wedding site" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="icon" href="img/favicon.ico" type="image/x-icon" />
          <link rel="icon" href="img/favicon-16x16.png" type="image/x-icon" />
          <link rel="icon" href="img/favicon-32x32.png" type="image/x-icon" />
          <link rel="icon" href="img/favicon-96x96.png" type="image/x-icon" />

          <title>Dan and Fiona</title>
          <link href='https://fonts.googleapis.com/css?family=Raleway|Tangerine:700' rel='stylesheet'>
          {css}
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
