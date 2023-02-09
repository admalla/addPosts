import React from 'react';
import { Link } from 'react-router-dom';

export function NavBar(props) {
  return (
    <div className="navBar">
      <div className="nav_Link">
        <Link to={'/posts'}>Posts</Link>
        <Link to={'/about'}>About</Link>
      </div>
    </div>
  );
}
