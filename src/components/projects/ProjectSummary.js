import React from 'react'
import moment from 'moment'

// export default function ProjectSummary({ project }) {
const ProjectSummary = ({ project }) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">
          {project.title}
        </span>
        <p>Posted by {project.authorFirstName} {project.authorLastName}</p>
        <p className="grey-text">
          Posted {moment(project.createAt.toDate()).calendar()}
        </p>
      </div>
    </div>
  )
}

export default ProjectSummary