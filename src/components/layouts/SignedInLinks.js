import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = (props) => {
  // function () {}
  return (
    <ul className="right">
      <li><NavLink to='/create'>New Project</NavLink></li>
      {/* <li><a onClick={props.signOut}>Log Out</a></li> */}
      <li><a href='/' onClick={props.signOut}>Log Out</a></li>
      {/* <li><button onClick={props.signOut}>Log Out</button></li> */}
      <li><NavLink to='/' className="btn btn-floating pink lighten-1">
        {props.profile.initials}
      </NavLink></li>
    </ul>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}
export default connect(null, mapDispatchToProps)(SignedInLinks)