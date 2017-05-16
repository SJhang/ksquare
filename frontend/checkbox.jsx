import React from 'react';

const Checkbox = ({ user, email, onChange }) => {
  return (
    <div onChange={onChange}>
      <input
        className="chb-button"
        type="checkbox"
        />
      <div className="chb-info">
        <span>
          <h4>{user}</h4>
        </span>
        <span>
          <h4>{email}</h4>
        </span>
      </div>
    </div>
  )
}

export default Checkbox;
