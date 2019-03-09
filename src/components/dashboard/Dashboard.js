import React, { Component } from 'react'
import Notifications from './Notifications'
import ProjectList from '../projects/ProjectList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

export class Dashboard extends Component {
  render() {
    // console.log(this.props);
    const { projects, auth, notifications } = this.props;
    if (auth.isEmpty) return <Redirect to='/signin' />
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList projects={projects} />
          </div>
          {/* 12 cols on small screen, 6 on medium */}
          <div className="col s12 m5 offset-m1">
            <Notifications notifications={notifications}/>
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  // console.log(state);
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications
  }
}
// use compose to join higher order components
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects', orderBy:['createAt','desc'] },
    { collection: 'notifications', limit: 3, orderBy:['time','desc'] }
  ])
)(Dashboard)
