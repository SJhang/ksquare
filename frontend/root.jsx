import React from 'react';
import ReactDOM from 'react-dom';
import { fetchUsers } from './utils';
import User from './user';

class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      errors: []
    }
  }

  componentWillMount() {
    fetchUsers(
      data => this.updateUsers(data),
      data => this.updateErrors(data)
    )
  }

  updateUsers(data) {
    let userNames = data.map((user, idx) => {
      return [user.name, user.email];
    }).sort();
    this.setState({ data, users: userNames });
  }

  updateErrors(data) {
    this.setState({ errors: data });
  }

  renderUser() {
    if (this.state.users.length) {
      return this.state.users.map((user, idx) => {
        let name = user[0];
        let email = user[1];
        return (
          <User key={idx} user={name} email={email}/>
        )
      });
    } else {
      return (<div> Loading ... </div>)
    }
  }

  render() {
    return(
      <div>
        {this.renderUser()}
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root/>, document.getElementById('main'));
});
