import React from 'react';

const User = (props) => {

  return (
    <div className="user-wrapper">
      <div className="checkbox"></div>
      <div className="user-info">
        <span>{props.user}</span>
        <span>{props.email}</span>
      </div>
    </div>
  )
}

export default User;
