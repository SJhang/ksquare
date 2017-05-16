import React, { PropTypes } from 'react'

const Results = ({ name, email }) => {
  return (
    <div className="chb-info">
      <span>{name}</span>
      <span>{email}</span>
    </div>
  )
}

export default Results
