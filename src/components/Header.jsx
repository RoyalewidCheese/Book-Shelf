import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import the CSS file for styling

const Header = () => {
  return (
    <div className="sidebar text-left">
      <div className="navbar-brand text-center">BookShelf</div>
      <ul className="navbar-links">
        <li>
          <Link to="/" className="sidebar-link">🏠 Home</Link>
        </li>
        <li>
          <Link to="/MyCategories" className="sidebar-link">📂 My Categories</Link>
        </li>
        <li>
          <Link to="/MyLibrary" className="sidebar-link">📖 My Library</Link>
        </li>
      </ul>
      <div className="sidebar-footer">
        <p>Made with ❤️ for Book Lovers</p>
      </div>
    </div>
  );
};

export default Header;
