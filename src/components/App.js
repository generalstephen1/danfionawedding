import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

const App = (props) => {
  return (
    <div>
      <header className="header">
        <IndexLink className="header__nav-home" to="/">Home</IndexLink>
        <Link  className="header__nav-details" to="/wedding-details">Wedding Details</Link>
        <Link  className="header__media" to="/media">Photos and Videos</Link>
      </header>
      {props.children}
    </div>
  );
};

App.propTypes = {
  children: PropTypes.element
};

export default App;
