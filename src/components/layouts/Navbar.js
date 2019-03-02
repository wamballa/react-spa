import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const Navbar = () => {
  // function () {}
  return (
    <nav className="navwrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">Game Catalogue!</Link>
        <SignedInLinks />
        <SignedOutLinks />
      </div>
    </nav>
  )
}
export default Navbar