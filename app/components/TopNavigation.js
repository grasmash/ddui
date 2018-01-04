// @flow
import React, { Component } from 'react';

export class TopNavigation extends Component {
  constructor(props, context) {
    super(props, context);
    this.onClickRegister = this.onClickRegister.bind(this);
    this.state = {
      registered_applications: {
        locations: null
      }
    };
  }

  onClickRegister(event) {
    const registered_applications = this.state.registered_applications;
    registered_applications.locations = event.target.text;
    this.setState({
     registered_applications
    });
    console.log(this.state);
  }

  render() {
    let navStyle = {
      marginBottom: '0',
    };
    return (
      <nav className="navbar navbar-default navbar-static-top" role="navigation" style={navStyle}>
        <div className="navbar-header">
          <a className="navbar-brand" href="index.html">Drupal Dev UI</a>
        </div>

        <ul className="nav navbar-top-links navbar-right">
          <li className="dropdown">
            <a className="dropdown-toggle" data-toggle="dropdown" href="#" id="create-app">
              Create App <i className="fa fa-plus-square fa-fw"></i>
          </a>
          </li>
          <li className="dropdown">
            <a className="dropdown-toggle" onClick={this.onClickRegister} data-toggle="dropdown" href="#" id="register-app">
              Register App <i className="fa fa-plus fa-fw"></i>
            </a>
          </li>
         </ul>
      </nav>
    );
  }
}
