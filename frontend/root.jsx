import React from 'react';
import ReactDOM from 'react-dom';


class Root extends React.Component {
  render() {
    return(
      <div>

      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root/>, document.getElementById('main'));
});
