import React from 'react';
import ReactDOM from 'react-dom';

// stateless components for more readable code
import Checkbox from './checkbox';
import Results from './results';

// ajax call
import { fetchUsers } from './utils';

class Root extends React.Component {
  constructor(props) {
    super(props);

    this.selectedCheckBoxes = {};
    this.state = {
      users: [],
      errors: [],
      results: {}
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
    this.setState({ users: userNames });
  }

  updateErrors(data) {
    this.setState({ errors: data });
  }

  renderCheckboxes() {
    let users = this.state.users;
    let errors = this.state.errors;

    if (users.length) {
      return users.map((user, idx) => {
        let name = user[0];
        let email = user[1];
        return (
          <Checkbox
            key={idx}
            user={name}
            email={email}
            onChange={e => this.handleChange(e)}
            />
        )
      });
    } else if (errors.length) {
      return errors.map((error, idx) => {
        return (
          <div key={idx}>{error}</div>
        )
      })
    } else {
      return (
        <div className="spinner">
          <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
          <span className="sr-only">Loading...</span>
        </div>
      )
    }
  }

  renderResults() {
    let results = [];
    if (this.state.results) {
      for (var key in this.state.results) {
        let name = key;
        let email = this.state.results[key];
        results.push(
          <Results key={email.length} name={name} email={email} />
        );
      };
      return results;
    } else {
      return (
        <div className="spinner">
          <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
          <span className="sr-only">Loading...</span>
        </div>
      )
    }
  }

  handleChange(e) {
    let user = e.target.nextSibling.innerText.split('\n');
    let name = user[0];
    let email = user[1];
    if (this.selectedCheckBoxes[name]) {
      delete this.selectedCheckBoxes[name];
    } else {
      this.selectedCheckBoxes[name] = email;
    }
  }

  handleClick(e) {
    this.setState({ results: this.selectedCheckBoxes });
  }

  render() {
    return(
      <div id="root">
        <div className="title">Check Lists</div>
        <div className="chb-list">
          {this.renderCheckboxes()}
        </div>
        <button
          className="confirm"
          onClick={() => this.handleClick()}>Confirm</button>
        <div className="result-list">
          {this.renderResults()}
        </div>
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root/>, document.getElementById('main'));
});
