import React from "react"
import PropTypes from "prop-types"
import Link from "gatsby-link"
import { connect } from "react-redux"


import './index.css'

const Header = () => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Gatsby
        </Link>
      </h1>
    </div>
    <ConnectedCounter />
    <ul>
        <li>
          <Link to="/a/">a</Link>
        </li>
        <li>
          <Link to="/b/">b</Link>
        </li>
        <li>
          <Link to="/c/">c</Link>
        </li>
    </ul>
  </div>
)


const TemplateWrapper = ({ children }) => (
  <div>
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
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

// class DefaultLayout extends React.Component {
//   render() {
//     return (
//       <div>
//         <Link to="/">
//           <h3>Redux example</h3>
//         </Link>
//         <ConnectedCounter />
//         <ul>
//           <li>
//             <Link to="/a/">a</Link>
//           </li>
//           <li>
//             <Link to="/b/">b</Link>
//           </li>
//           <li>
//             <Link to="/c/">c</Link>
//           </li>
//         </ul>
//         {this.props.children()}
//       </div>
//     )
//   }
// }

// export default DefaultLayout


