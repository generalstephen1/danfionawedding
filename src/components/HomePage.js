import React from 'react';
import {Link} from 'react-router';

const HomePage = () => {
  return (
    <div>
      <h1>Dan and Fiona's Wedding Home Page</h1>

      <h2>This will be a handy hub for all things wedding</h2>
      <ol>
        <li>Review the <Link to="fuel-savings">demo app</Link></li>
        <li>Remove the demo and start coding: npm run remove-demo</li>
      </ol>
    </div>
  );
};

export default HomePage;
