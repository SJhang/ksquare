import React from 'react';

const Checkbox = ({ user, email, onChange }) => {
  return (
    <div onChange={onChange}>
      <input
        className="chb-button"
        type="checkbox"
        />
      <div className="chb-info">
        <span>NAME : {user}</span>
        <span>EMAIL : {email}</span>
      </div>
    </div>
  )
}

export default Checkbox;
