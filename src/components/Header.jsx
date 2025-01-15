import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <div>
        <div>
          <div className="sidebar">
            <div className="navbar-brand font">BookShelf</div>
            <ul className="navbar-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/MyCategories">My Categories</Link></li>
              <li><Link to="/MyLibrary">My Library</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
