import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

const ProjectDetails = (props) => {
  console.log(props);
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">
            Project Title - {id}
          </span>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda vel dolores perspiciatis expedita neque officia! Reiciendis ab quae nemo doloremque alias ea ad nam! Aperiam rem ratione ad nam magni?</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Steve</div>
          <div>22 Feb 2018, 2am</div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;
  return {
    project: project
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection: 'projects'}
  ])
)(ProjectDetails)

