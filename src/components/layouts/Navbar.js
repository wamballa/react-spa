import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux'

const Navbar = (props) => {
  // function () {}
  const { auth, profile } = props;
  console.log('navbar props',auth);
  const links = !auth.isEmpty ? <SignedInLinks profile={profile}/> : <SignedOutLinks />;
  return (
    <nav className="navwrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">Game Catalogue!</Link>
        {links}
      </div>
    </nav>
  )
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}
export default connect(mapStateToProps)(Navbar)