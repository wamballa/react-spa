import React from 'react'

export default function ProjectSummary({project}) {
  return (
      <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text darken-3">
          <span className="card-title">
            {project.title}
          </span>
          <p>Posted by Steve...</p>
          <p className="grey-text">22 Feb 2018, 3am</p>
        </div>
      </div>
  )
}