import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

const App = (props) => {
  return (
    <div>
      <header>
        <IndexLink to="/">Home</IndexLink>
        <Link to="/wedding-details">Wedding Details</Link>
        <Link to="/media">Photos and Videos</Link>
      </header>
      {props.children}
    </div>
  );
};

App.propTypes = {
  children: PropTypes.element
};

export default App;
